var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var shopSchema = new Schema({
	name : {type : String},
	email : {type : String},
	category : {type : String},
	found : {type : Number},
	phone : {type : Number},
	city : {type : String}
});

var Shop = mongoose.model('Shop', shopSchema);

module.exports = Shop;