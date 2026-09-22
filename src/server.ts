import "dotenv/config";
import app from "./app";
import config from "./app/config";
import { prisma } from "./app/lib/prisma";
import { redisClient } from "./app/lib/redis";
// import nodemailer from "nodemailer";
import { transporter } from "./app/lib/nodemailer";
import { seedDatabase } from "./app/utils/seedDatabase";

const PORT = config.port;

const main = async () => {
  try {
    await prisma.$connect();
    console.log("Connected to the database successfully.");
     await redisClient.connect();
     console.log("Redis connected successfully");

     await transporter.verify();
     console.log("Nodemailer connected successfully");

    

    try {
      await seedDatabase();
    } catch (error) {
      console.error("Database seeding failed (server will still start):", error);
    }

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error starting the server:", error);
    await prisma.$disconnect();
    process.exit(1);
  }
};



main();
