const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DB_URL;

// Connect to MongoDB
mongoose
  .connect(DB_URL)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log("DB Error:", err));

// Root route
app.get("/", (req, res) => {
  res.send("Hello Docker!");
});

// Simple users route
app.get("/users", (req, res) => {
  res.send([
    { name: "Pranesh" },
    { name: "Docker User" }
  ]);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
