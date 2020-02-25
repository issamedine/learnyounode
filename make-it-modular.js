const filename = process.argv[2];
const ext = process.argv[3];
const mymodule = require("./my-module");
mymodule(filename, ext, function(error, list) {
  if (error) return console.error(error);
  list.forEach(function (file) {
      console.log(file);
  });
});

// 'use strict'
//     const filterFn = require('./solution_filter.js')
//     const dir = process.argv[2]
//     const filterStr = process.argv[3]
    
//     filterFn(dir, filterStr, function (err, list) {
//       if (err) {
//         return console.error('There was an error:', err)
//       }
    
//       list.forEach(function (file) {
//         console.log(file)
//       })
//     })
