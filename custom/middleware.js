const Accounts = require('../accounts/accounts-model')

const validId = (req, res, next) => {
	const { id } = req.params
	Accounts.get(id).then((project) => {
		project ? req.project : res.status(404).json({ message: 'That Project Does not Exist!' })
	})
	next()
}
const validBody = (req, res, next) => {
	const { description, notes } = req.body
	Object.entries(req.body).length === 0
		? res.status(404).json({ message: 'No Action Data' })
		: !description || !notes
		? res.status(400).json({ message: 'Missing required information. Please add the description and notes! ' })
		: next()
}

module.exports = {
  validId,
  validBody
}