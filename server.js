require('babel-register');

require('./server.babel');
// import express from 'express'
//
// // Create our app
// var app = express();
// const PORT = process.env.PORT || 3000;
//
// app.use(function (req, res, next){
//   if (req.headers['x-forwarded-proto'] === 'https') {
//     res.redirect('http://' + req.hostname + req.url);
//   } else {
//     next();
//   }
// });
//
// app.use(express.static('public'));
//
// app.listen(PORT, function () {
//   console.log('Express server is up on port ' + PORT);
// });



// import express from 'express';
// var express = require('express');
//
//
// const app = express();
//
// app.use('/', express.static('public'));
//
// app.listen(process.env.PORT || 3000);
