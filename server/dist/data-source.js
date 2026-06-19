"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const { DataSource } = require("typeorm");
const { SIMCard } = require("./entities/db");
const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [SIMCard],
    synchronize: true,
    logging: false
});
module.exports = { AppDataSource };
//# sourceMappingURL=data-source.js.map