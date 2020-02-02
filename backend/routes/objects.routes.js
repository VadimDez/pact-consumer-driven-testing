const router = require('express').Router();
const controller = require('../controllers/objects.controller');

router.get("/objects", controller.getAll);

module.exports = router;