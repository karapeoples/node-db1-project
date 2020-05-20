const knex = require('../data/dbConfig')


const find = () => {
 return knex('accounts')
}

const findById = (id) => { 
  return knex('accounts')
  .where({id})
}

const insert = (account) => {
  return knex('accounts')
    .insert(account)
    .then(ids => {
      return findById(ids[0])
    })
}

const update = (id, changes) => {
  return knex('accounts')
    .where({ id })
    .update(changes)
}

const remove = (id) => {
  return knex('accounts')
    .where({id})
    .del()
}


module.exports = {
  find,
  findById,
  insert,
  update,
  remove
}