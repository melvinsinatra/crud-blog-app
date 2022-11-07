import { useState } from 'react';
import { Navbar } from './components';
import { CreatePostPage, Home, LoginPage, PostDetailPage, RegisterPage, SettingsPage } from './pages';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
	const user = false;

	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/register" element={user ? <HomePage /> : <RegisterPage />} />
				<Route path="/login" element={user ? <HomePage /> : <LoginPage />} />
				<Route path="/create-post" element={user ? <CreatePostPage /> : <RegisterPage />} />
				<Route path="/settings" element={user ? <Settings /> : <RegisterPage />} />
				<Route path="/post/:postId" element={<PostDetailPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
