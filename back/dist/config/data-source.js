"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const User_1 = __importDefault(require("../entities/User"));
const Credential_1 = __importDefault(require("../entities/Credential"));
const Appointment_1 = __importDefault(require("../entities/Appointment"));
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: process.env.DB_host || "localhost",
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: false,
    logging: true,
    dropSchema: false,
    // entities: ["./src/entities/*ts"],
    entities: [User_1.default, Credential_1.default, Appointment_1.default],
    subscribers: [],
    migrations: [],
});
