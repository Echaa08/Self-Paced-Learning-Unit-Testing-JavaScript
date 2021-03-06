const env = process.env.NODE_ENV || 'development';
const config = require('./knexfile.js')[env];
const db = require('knex')(config);

module.exports = {
  getItems: () => db('items').select(),
  addItem: (item) => db('items').insert(item, 'id'),
  geItem: (id) => db('items').select().where('id', parseInt(id)).first()
};
