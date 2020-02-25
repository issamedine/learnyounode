const fs = require("fs");
const path = require("path");
module.exports = function(filename, ext, callback) {
  fs.readdir(filename, function(error, list) {
    if (error) return callback(error);
    list = list.filter(function(x){
       return path.extname(x) ==='.'+ ext
    })
    callback(null, list);
  });
};

// 'use strict'
//     const fs = require('fs')
//     const path = require('path')
    
//     module.exports = function (dir, filterStr, callback) {
//       fs.readdir(dir, function (err, list) {
//         if (err) {
//           return callback(err)
//         }
    
//         list = list.filter(function (file) {
//           return path.extname(file) === '.' + filterStr
//         })
    
//         callback(null, list)
//       })
//     }