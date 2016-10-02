var shopController = require('./../Workshop/shopController.js');

module.exports = function(app){
	app.get('/api/all/shops', shopController.getAllShops);
	app.post('/api/add/new/shop', shopController.addNewShop);
	app.get('/api/get/one/:id', shopController.getOneShop);
}