const Countries = require("../models/countries.model");

module.exports.index = async (req, res) => {
  if (req.query.page < 1) req.query.page = 1;
  const skip = parseInt(req.query.page - 1) * 6;
  const countries = await Countries.find().skip(skip).limit(6);
  res.json(countries);
};
module.exports.getById = async (req, res) => {
  const country = await Countries.findOne({ _id: req.params.id });
  res.json(country);
};

module.exports.create = async (req, res) => {
  const country = await Countries.create(req.body);
  res.json(country);
};

module.exports.remove = async (req, res) => {
  await Countries.findOneAndDelete(
    { _id: req.params.id },
    (err) => err && console.log(err)
  );
  res.status(200);
};

module.exports.update = async (req, res) => {
  console.log(req.body);
  const country = await Countries.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    (err) => err && console.log(err)
  );
  res.json(country);
};
