const express = require('express');
const { getMovieList } = require('../controllers/movie');

const router = express.Router();

router.get('/', getMovieList);

module.exports = router;
