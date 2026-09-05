import dotenv from "dotenv";
import path from "path";


dotenv.config({path: path.join(process.cwd(), ".env") });


export default {
    port : process.env.PORT!,
    database_url : process.env.DATABASE_URL!,
    app_url : process.env.APP_URL!,
    jwt_access_secret : process.env.JWT_ACCESS_SECRET!,
    jwt_refresh_secret : process.env.JWT_REFRESH_SECRET!,
    jwt_access_expires_in : process.env.JWT_ACCESS_EXPIRES_IN!,
    jwt_refresh_expires_in : process.env.JWT_REFRESH_EXPIRES_IN!,

    rate_limit_max : parseInt(process.env.RATE_LIMIT_MAX!),
    rate_limit_window : process.env.RATE_LIMIT_WINDOW!,
    rate_limit_window_ms : parseInt(process.env.RATE_LIMIT_WINDOW_MS!),
    node_env : process.env.NODE_ENV!,
}
