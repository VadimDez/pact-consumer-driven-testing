const router = require("express").Router();
const controller = require("../controllers/cars.controller");

router.get("/cars", controller.getAll);

module.exports = router;
