// import pino from "pino";
// import { env } from "../config/env";

// /**
//  * Central logger. In development, pretty-prints to the console;
//  * in production, emits structured JSON suitable for log aggregators.
//  */
// export const logger = pino({
//   level: env.NODE_ENV === "production" ? "info" : "debug",
//   transport:
//     env.NODE_ENV === "production"
//       ? undefined
//       : {
//           target: "pino-pretty",
//           options: {
//             colorize: true,
//             translateTime: "SYS:standard",
//             ignore: "pid,hostname",
//           },
//         },
// });