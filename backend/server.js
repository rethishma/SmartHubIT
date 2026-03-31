const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth");
const flatRoutes = require("./routes/flats");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/flats", flatRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
