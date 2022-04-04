const prisma = require('../utils/prisma');

const getMovieList = async (req, res) => {
	const allMovies = await prisma.movie.findMany();
	res.json(allMovies);
};

module.exports = { getMovieList };
