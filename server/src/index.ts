require("dotenv").config();
const express = require("express");
const cors = require("cors");

const { AppDataSource } = require("./data-source");
const simRoutes = require("./routes");

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