const express = require("express");
const router = express.Router();

const { carPlates } = require("../controllers");

router.post("/", carPlates.create);
router.get("/", carPlates.getAll);
router.get("/:guid", carPlates.getById);
router.put("/:guid", carPlates.updateById);
router.delete("/:guid", carPlates.deleteById);

module.exports = router;
