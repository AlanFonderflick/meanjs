'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Post Schema
 */
var PostSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	content: {
		type: String,
		default: '',
		trim: true
	},	
	tags : [String],
	isPic : Boolean
});

mongoose.model('Post', PostSchema);