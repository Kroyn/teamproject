const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const { sequelize } = require("./models");
const userRoutes = require("./routes/users.routes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
    res.json({ message: "LocalServices API is running." });
});

sequelize.authenticate()
.then(() => console.log("Connected to DB"))
.catch((err) => console.error("DB Connection Error:", err));

module.exports = app;
