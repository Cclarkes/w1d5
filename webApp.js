var listpusher = require('./listModule');
var addToList = listpusher(parseInt(process.argv[2]));

console.log(addToList)