var express = require('express');
var mongoose = require('mongoose');

var MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost/car-work-local';
mongoose.connect(MONGO_URI);

var app = express();
app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization, Access-Control-Allow-Origin, Access-Control-Allow-Headers');
	next();
});

require('./config/middleware.js')(app,express);
require('./config/routes.js')(app);

var port = process.env.port || 8000;

var listener = app.listen(port, function(){
	console.log('Listening on port ' + port);
});


module.exports = app;