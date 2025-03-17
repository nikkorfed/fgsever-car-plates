const express = require("express");
const router = express.Router();

const carPlates = require("./car-plates");

router.use("/car-plates", carPlates);

module.exports = router;
