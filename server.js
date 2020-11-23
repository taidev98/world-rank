require("dotenv").config();

const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

const countryRoute = require("./routes/country.route");

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

app.use("/api/countries", countryRoute);
app.listen(80, () => console.log("Start server"));
