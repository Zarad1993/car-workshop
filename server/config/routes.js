var shopController = require('./../Workshop/shopController.js');


module.exports = function(app){
	app.get('/api/all/shops', shopController.all);
}