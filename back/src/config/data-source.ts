import { DataSource } from "typeorm";
import dotenv from "dotenv";
dotenv.config();
import User from "../entities/User"; 
import Credential from "../entities/Credential";
import Appointment from "../entities/Appointment";

export const AppDataSource = new DataSource({
    type: "postgres",
    host:  process.env.DB_host || "localhost",
    port: Number (process.env.DB_PORT) || 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: false,
    logging: true,
    dropSchema: false,
    // entities: ["./src/entities/*ts"],
    entities: [User,Credential, Appointment],
    subscribers: [],
    migrations: [],
})