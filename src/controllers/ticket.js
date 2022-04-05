const prisma = require('../utils/prisma');

const createTicket = async (req, res) => {
	const newTicket = await prisma.ticket.create({
		data: {
			screening: {
				connect: { id: req.body.screeningId },
			},
			customer: {
				connect: { id: req.body.customerId },
			},
		},
	});
	res.json(newTicket);
};

module.exports = { createTicket };
