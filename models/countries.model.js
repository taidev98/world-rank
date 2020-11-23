const mongoose = require("mongoose");

const CountrySchema = new mongoose.Schema({
  name: String,
  alpha2Code: String,
  alpha3Code: String,
  capital: String,
  region: String,
  subregion: String,
  population: Number,
  area: Number,
  gini: Number,
  nativeName: String,
  currencies: Array,
  languages: Array,
  flag: String,
});

const Countries = mongoose.model("Country", CountrySchema, "countries");
module.exports = Countries;
