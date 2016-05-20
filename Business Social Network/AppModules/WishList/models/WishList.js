var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var WishListSchema = new mongoose.Schema({
	user : { type: Schema.Types.ObjectId, ref: 'User', required: true },
	products : [ { type: Schema.Types.ObjectId, ref: 'Product' } ],
	last_seen: {type: Date, default: Date.now}
 });

module.exports = mongoose.model('WishList', WishListSchema);
