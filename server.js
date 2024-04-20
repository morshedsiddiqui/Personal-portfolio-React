process.env.NODE_ENC = 'development';

const express =  require('./config/express');

const app = express(); 
var path = require('path');


//app.use(express.Static(path.join(__dirname, 'public')))


app.listen(8081);

module.exports = app;

console.log("server is running........")



