const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
			unique: true
		},
		description: {
			type: String,
			required: true
		},
		image: {
			type: String,
			required: true
		},
		username: {
			type: String,
			required: true
		},
		categories: {
			type: Array,
			required: true
		}
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Post', postSchema);
