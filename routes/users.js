const express = require('express')
const router = express.Router()

const User = require('../models/user')

/* users listing view. */
router.get('/list', async function (req, res, next) {
  const users = await User.findAll()
  console.log(users)
  res.render('users', {
    users: JSON.parse(JSON.stringify(users, null, 2)),
  })
})

/* GET users listing. */
router.get('/', async function (req, res, next) {
  const users = await User.findAll()
  res.send(JSON.stringify(users, null, 2))
})

/* GET user info by id. */
router.get('/:identifier', async function (req, res, next) {
  const identifier = req.params.identifier
  const user = await User.findByPk(identifier)
  res.send(JSON.stringify(user, null, 2))
})

module.exports = router
