// const readline = require("readline");
const fs = require("fs");

var file = process.argv[2];

const result = fs.readFileSync(file);

console.log(result.toString().split("\n").length - 1);
