const express = require("express");
const cors = require("cors");
const routes = require("./routes/routes");
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

//db
mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("db connected!");
});
mongoose.connection.on("error", (err) => {
  console.log(`DB connection err: ${err.message}`);
});

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use("/", routes);

app.listen(process.env.PORT, () => console.log("up and running"));
