var Shop = require('./shopModel.js');
module.exports = {
	getAllShops : function(req,res){
		Shop.find({})
			.exec(function(err,shops){
				return shops.length > 0 ? res.status(200).send(shops) : res.status(500).send('No shops Available');
			})
	}, 
	addNewShop : function(req,res){
		var newShop = new Shop({
			name : req.body.name,
			found : req.body.date,
			phone : req.body.phone,
			city : req.body.city,
			category : req.body.category
		})
		newShop.save(function(err, saved){
			return saved ? res.status(201).send('New Shop Successfully Added') : res.status(500).send('Error Saving Shop');
		})
	},
	getOneShop : function(req,res){
		Shop.findOne({_id : req.params.id})
			.exec(function(err, shop){
				return shop ? res.status(200).send(shop) : res.status(500).send('Error Getting one Shop');
			})
	}
};