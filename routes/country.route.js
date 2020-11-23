const express = require("express");
const {
  index,
  create,
  remove,
  update,
  getById,
} = require("../controllers/countries.controller");
const router = express.Router();

router.get("", index);
router.get("/:id", getById);
router.post("/create", create);
router.delete("/:id", remove);
router.put("/:id", update);

module.exports = router;
