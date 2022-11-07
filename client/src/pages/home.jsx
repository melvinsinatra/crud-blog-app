import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Header, PostsContainer, Sidebar } from '../components';

const Home = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		axios.get('/api/v1/posts')
			.then(res => console.log(res))
			.catch(err => console.log(err));
	}, []);

	return (
		<>
			<Header />
			<div className="flex">
				<PostsContainer />
				<Sidebar />
			</div>
		</>
	);
};

export default Home;
