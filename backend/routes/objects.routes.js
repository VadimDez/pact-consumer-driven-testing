const router = require('express').Router();
const controller = require('../controllers/object.controller');

router.get("/objects", controller.getAll);

module.exports = router;