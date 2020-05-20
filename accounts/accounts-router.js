const express = require('express')
const router = express.Router()
const mw = require('../custom/middleware')
const validId = mw.validId
const validBody = mw.validBody
const Accounts = require('./accounts-model')


router.get('/', (req, res) => {
  Accounts
    .find()
    .then(account => {
      res.status(200).json(account)
    })
    .catch(err => {
    res.status(500).json({message:'Error in the Database'})
  })
})

router.get('/:id', validId, (req, res) => {
  const { id } = req.params
  Accounts
      .findById(id)
			.then((account) => {
				res.status(200).json( account)
			})
})

router.post('/', validBody, (req, res) => {
  Accounts.insert(req.body)
			.then((account) => {
				res.status(201).json({ message: 'Success a New Account was created', account })
			})
			.catch((err) => {
				res.status(500).json({ message: 'Error in the Database' })
			})
})

router.put('/:id', validId, validBody, (req, res) => {
  const { id } = req.params
  const body = req.body
  Accounts.update(id, body)
    .then(account => {
    res.status(200).json({message: 'The account was updated with the following information', body})
  })
})

router.delete('/:id', validId, validBody, (req, res) => {
  const { id } = req.params
  Accounts.findById(id)
    .then(account => {
      account ?
        Accounts.remove(id)
          .then((deleted) => {
            deleted ? res.status(200).json({ success: `Account with ID ${id} has been removed`, info: account }) : null
          }) : null
    })
})
module.exports = router;