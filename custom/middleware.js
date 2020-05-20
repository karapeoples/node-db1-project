const Accounts = require('../accounts/accounts-model')

const validId = (req, res, next) => {
	const { id } = req.params
	Accounts.findById(id)
		.then((account) => {
			account.length > 0 ? req.account || next() : res.status(404).json({ message: 'That Account Does not Exist!' })
		})
		.catch((err) => {
			res.status(500).json({ message: 'Error in the Database' })
		})
}
const validBody = (req, res, next) => {
	const { name, budget } = req.body
	Object.entries(req.body).length === 0
		? res.status(404).json({ message: 'No Account Data' })
		: !name || !budget
		? res.status(400).json({ message: 'Missing required information. Please add a name and budget amount! ' })
			: next() 
}

module.exports = {
  validId,
  validBody
}