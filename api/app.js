const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

const authRoute = require('./routes/auth.routes');
const userRoute = require('./routes/user.routes');
const postRoute = require('./routes/post.routes');
const categoryRoute = require('./routes/category.routes');

const dotenv = require('dotenv');
dotenv.config({ path: path.resolve(__dirname, './.env') });
app.use(express.json());

const multer = require('multer');
const mongoose = require('mongoose');

mongoose
	.connect(process.env.MONGO_URL)
	.then(console.log('Server is connected to MongoDB'))
	.catch((err) => console.log(err));

// File upload start
const storage = multer.diskStorage({
	destination: (req, file, callback) => {
		callback(null, 'images');
	},
	filename: (req, file, callback) => {
		callback(null, req.body.name);
	}
});

const upload = multer({ storage: storage });
app.post('/api/upload', upload.single('file'), (req, res) => {
	res.status(200).json('File has been uploaded!');
});
// File upload end

app.use('/api/v1', (req, res) => res.send('Hello'));
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/posts', postRoute);
app.use('/api/v1/categories', categoryRoute);

app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});
