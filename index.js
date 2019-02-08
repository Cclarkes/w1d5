const chalk = require("chalk");

var message = chalk.magentaBright("Hello ") + chalk.yellow("World");
console.log(message);

console.log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz') + chalk.red(" Whoa now this is red"));