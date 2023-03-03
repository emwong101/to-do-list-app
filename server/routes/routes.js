const express = require("express");

const router = express.Router();

const {
  getAllItems,
  createItem,
  updateItem,
  deleteItem,
  getOneItem,
} = require("../controllers/endpoints");

router.get("/", getAllItems);

router.get("/:id", getOneItem);

router.post("/", createItem);

router.put("/:id", updateItem);

router.delete("/:id", deleteItem);

module.exports = router;
