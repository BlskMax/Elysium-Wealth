"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const server_1 = __importDefault(require("./server"));
const dotenv_1 = __importDefault(require("dotenv"));
const data_source_1 = require("./config/data-source");
dotenv_1.default.config();
const PORT = process.env.PORT || 3001;
data_source_1.AppDataSource.initialize()
    .then(() => {
    console.log("Database connected on port ${DB_PORT");
    server_1.default.listen(PORT, () => {
        console.log(`Server listening on http://localhost:${PORT}`);
    });
})
    .catch((error) => console.log(error));
