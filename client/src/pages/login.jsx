import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
	return (
		<div className="login bg-cover bg-[url('https://i.ibb.co/7QNNvwL/login-page-bg.jpg')] h-[calc(100vh-4.5rem)]">
			<div className="container my-0 mx-auto h-full">
				<div className="flex flex-col h-full justify-center">
					<span className="loginTitle text-5xl text-slate-900">Login</span>
					<form className="loginForm mt-5 flex flex-col" action="">
						<label className="my-2" htmlFor="email">
							Email
						</label>
						<input className="p-2 bg-white border-none focus:outline-none" type="text" name="email" placeholder="" />
						<label className="my-2" htmlFor="password">
							Password
						</label>
						<input className="p-2 bg-white border-none focus:outline-none" type="password" name="password" placeholder="" />
						<div className='self-center mt-4'>
							<button className="loginButton mt-4 py-2 px-6 cursor-pointer bg-blue-700 text-white rounded-lg">Login</button>
						</div>
					</form>
					<p className='p-4 text-center'>or<br/>Click <Link to='/register' className='text-bold text-inherit underline cursor-pointer'>here</Link> to register</p>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
