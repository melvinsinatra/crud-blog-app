const router = require('express').Router();
const User = require('../models/User');
const Post = require('../models/Post');
const bcrypt = require('bcrypt');

// Update
router.put('/:id', async (req, res) => {
	if (req.body.userId !== req.params.id) {
		res.status(401).json('You can only update your own account!');
		return;
	}

	if (req.body.password) {
		const salt = await bcrypt.genSalt(10);
		req.body.password = await bcrypt.hash(req.body.password, salt);
	}

	try {
		const updatedUser = await User.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body
			},
			{ new: true }
		);
		res.status(200).json('User succesfully updated!');
	} catch (err) {
		res.status(500).json(err);
	}
});

// Delete (All post from the user will also be deleted)
router.delete('/:id', async (req, res) => {
	if (req.body.userId !== req.params.id) {
		res.status(401).json('You can only delete your own account!');
		return;
	}

	const user = await User.findById(req.params.id);
	if (!user) {
		res.status(404).json('User not found');
		return;
	}

	try {
		await Post.deleteMany({ username: user.username });
		await User.findByIdAndDelete(req.params.id);
		res.status(200).json('User succesfully deleted!');
	} catch (err) {
		res.status(500).json(err);
	}
});

// Get user
router.get('/:id', async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		const { password, ...userDetails } = user._doc;
    res.status(200).json(userDetails);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
