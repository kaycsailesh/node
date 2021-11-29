const Datastore = require('nedb');
const config = require('../config/config');
const dbpath = config.dbpath;

const users = new Datastore({ filename: dbpath + 'users.db', autoload: true });

module.exports = {
  users
};
