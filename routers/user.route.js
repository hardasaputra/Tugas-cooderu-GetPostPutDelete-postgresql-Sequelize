const express = require("express");
const router = express.Router();

const {
  create,
  findAll,
  update,
  deleteById,
} = require("../controllers/user.controller");

router.post("/", create);
router.get("/", findAll);
router.put("/:id", update);
router.delete("/:id", deleteById);

module.exports = router;
