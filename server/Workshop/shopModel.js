var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var shopSchema = new Schema({
	name : {type : String},
	category : {type : String, enum: ['Service', 'Body Parts', 'Accessories',]},
	found : {type : Date},
	phone : {type : Number},
	city : {type : String}
});

var Shop = mongoose.model('Shop', shopSchema);

module.exports = Shop;