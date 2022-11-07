import React from 'react';

const RegisterPage = () => {
	return (
		<div className="login bg-cover bg-[url('https://i.ibb.co/7QNNvwL/login-page-bg.jpg')] h-[calc(100vh-4.5rem)]">
			<div className="container my-0 mx-auto h-full">
				<div className="flex flex-col h-full justify-center">
					<span className="loginTitle text-5xl text-slate-900">Register</span>
					<form className="loginForm mt-5 flex flex-col" action="">
						<label className="my-2" htmlFor="username">
							Username
						</label>
						<input className="p-2 bg-white border-none focus:outline-none" type="text" name="email" placeholder="Min. 8 characters" />
						<label className="my-2" htmlFor="email">
							Email
						</label>
						<input className="p-2 bg-white border-none focus:outline-none" type="email" name="email" placeholder="example@mail.com" />
						<label className="my-2" htmlFor="password">
							Password
						</label>
						<input className="p-2 bg-white border-none focus:outline-none" type="password" name="password" placeholder="Min. 8 characters" />
						<div className='self-center mt-4'>
							<button className="loginButton mt-4 py-2 px-6 cursor-pointer bg-blue-700 text-white rounded-lg">Register</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default RegisterPage;
