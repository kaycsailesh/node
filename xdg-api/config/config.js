const config = {
  "development": {
    "database": "xdg_development",
    "dialect": "sqlite",
    "storage": "db/xdg.db",
    "secretKey": "9kjahne9c4091",
    "verificationSecret": "%??@((*$)!)@(&$(*&*@__@)*#(*!@@)#@@@#",
    "appUrl": "http://localhost:3000/",
    "dbpath": "db/development/"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "xdg_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false,
    "secretKey": "9kjahne9c4091",
    "verificationSecret": "%??@((*$)!)@(&$(*&*@__@)*#(*!@@)#@@@#",
    "dbpath": "db/test/"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "xdg_production",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false,
    "secretKey": "_)@(*$(&$^%&!(&^%^@&$?<!@*",
    "verificationSecret": "%??@((*$)!)@(&$(*&*@__@)*#(*!@@)#@@@#",
    "appUrl": "http://localhost:3000/",
    "dbpath": "db/production/"
  }
};

// exports.config = () => {
//   var node_env = process.env.NODE_ENV || 'development';
//   return env[node_env];
// };

module.exports = config[process.env.NODE_ENB || 'development']
