const express = require('express');
const controller = require('../controllers/movie');
const router = express.Router();

router.get('/', controller.getMovieList);
router.post('/', controller.addMovie);
router.get('/:id', controller.getMovieById);
router.put('/:id', controller.updateMovie);

module.exports = router;
