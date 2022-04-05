const express = require('express');
const {
	getMovieList,
	addMovie,
	getMovieById,
} = require('../controllers/movie');

const router = express.Router();

router.get('/', getMovieList);
router.post('/', addMovie);
router.get('/:id', getMovieById);

module.exports = router;
