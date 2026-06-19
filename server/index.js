"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const typeorm_1 = require("typeorm");
const SIMCard_1 = require("./entities/SIMCard");
const simRoutes_1 = __importDefault(require("./routes/simRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 3306,
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASS || "",
    database: process.env.DB_NAME || "simdb",
    entities: [SIMCard_1.SIMCard],
    synchronize: true,
    logging: false
});
app.use("/api/sims", simRoutes_1.default);
const PORT = process.env.PORT || 4000;
exports.AppDataSource.initialize()
    .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
})
    .catch((error) => {
    console.error("Database connection failed");
    console.error(error);
});
//# sourceMappingURL=index.js.map