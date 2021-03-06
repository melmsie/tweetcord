module.exports = require('fs')
  .readdirSync(__dirname)
  .filter(file => file !== 'index.js')
  .map(moduleName => require(`${__dirname}/${moduleName}`));
