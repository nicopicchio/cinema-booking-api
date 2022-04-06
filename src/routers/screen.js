const express = require('express');
const controller = require('../controllers/screen');

const router = express.Router();

router.post('/', controller.createScreen);

module.exports = router;
