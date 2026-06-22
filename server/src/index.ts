require("dotenv").config();
import express from "express";
import cors from "cors";

import AppDataSource from "./data-source";
import simRoutes from "./routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/sims", simRoutes);

const PORT = process.env.PORT || 4000;

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error: unknown) => {
    console.error("Database connection failed");
    console.error(error);
  });