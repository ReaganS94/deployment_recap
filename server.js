const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("colors");
const connectDB = require("./dbinit");
const app = express();

app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 8080;

connectDB();

const factsRoute = require("./routes/facts");

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.get("/", (req, res) => {
  res.send("Welcome to the fun facts API!");
});

app.use("/facts", factsRoute);

app.listen(PORT, () => {
  console.log(`connected to http://localhost:${PORT}`.rainbow);
});
