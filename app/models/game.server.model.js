'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Game Schema
 */

var PostSchema = new Schema ({
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
		required: 'Cannot be blank',
		trim: true
	},	
	tags : [String],
	isPic: {
		type: Boolean,
		default: 0
	}
});

var GameSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	post : [PostSchema]
});

mongoose.model('Game', GameSchema);