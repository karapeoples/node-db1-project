const express = require('express')
const router = express.Router()
const mw = require('../custom/middleware')
const validId = mw.validId
const validBody = mw.validBody
const Accounts = require('./accounts-model')


router.get('/', (req, res) => {
  
})

router.get(':/id', validId, (req, res) => {
  
})

router.post('/', validBody, (req, res) => {
  
})

router.update('/:id', validId, validBody, (req, res) => {
  
})

router.delete('/:id', validId, validBody, (req, res) => {

})

module.export = router;