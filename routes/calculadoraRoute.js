const express = require("express");
const router = express.Router();
var calculadoraController = require("../controller/calculadoraController");

//
router.post("/", calculadoraController.abreCalculadora);

//
router.post("/", calculadoraController.calcula);


module.exports = router;
