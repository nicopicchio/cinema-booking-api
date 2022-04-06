const express = require('express');
const controller = require('../controllers/ticket');

const router = express.Router();

router.post('/', controller.createTicket);

module.exports = router;
