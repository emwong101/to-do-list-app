const path = require("node:path");

require("dotenv").config({ path: path.resolve(__dirname, "./.env") });

const PORT = process.env.PORT || 8080;

const express = require("express");
const connectDB = require("./config/db");

//initialize express server
const app = express();

//import endpoints
const routes = require("./routes/routes");

//connect to MongoDB Schema
connectDB();

//middleware
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("Server is running"));

app.use("/lists", routes);

app.listen(PORT, () => {
  console.log(`server is up and running on http://localhost:${PORT}`);
});
