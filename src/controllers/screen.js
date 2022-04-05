const prisma = require('../utils/prisma');

const createScreen = async (req, res) => {
	const getScreens = await prisma.screen.findMany({});

	const newScreen = await prisma.screen.create({
		data: {
			number: getScreens.length + 1,
		},
	});
	res.json(newScreen);
};

module.exports = { createScreen };
