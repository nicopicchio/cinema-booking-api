const prisma = require('../utils/prisma');

const getMovieList = async (req, res) => {
	let durationLessThan;
	let durationGreaterThan;

	if (req.query.durationLess) {
		durationLessThan = Number(req.query.durationLess);
	}
	if (req.query.durationGreater) {
		durationGreaterThan = Number(req.query.durationGreater);
	}

	const allMovies = await prisma.movie.findMany({
		where: {
			runtimeMins: {
				lt: durationLessThan,
				gt: durationGreaterThan,
			},
		},
		include: {
			screenings: true,
		},
	});
	res.json(allMovies);
};

const getMovieById = async (req, res) => {
  const getSpecificMovie = await prisma.movie.findUnique({
    where: {
      id: parseInt(req.params.id)
    }
  })
  if (!getSpecificMovie) {
    res.status(404)
    res.json({ error: 'Movie not found' })
    return
  }
  res.json(getSpecificMovie)
}

const addMovie = async (req, res) => {
  const screeningsArray = [];
	if (req.body.screenings) {
		for (const screening of req.body.screenings) {
			screeningsArray.push({
				startsAt: new Date(Date.parse(screening.startsAt)),
				screenId: screening.screenId,
			});
		}
	}
	const createdMovie = await prisma.movie.create({
		data: {
			title: req.body.title,
			runtimeMins: req.body.runtimeMins,
			screenings: {
        create: screeningsArray
      }
		},
	});
	res.json(createdMovie);
};

module.exports = { getMovieList, addMovie, getMovieById };
