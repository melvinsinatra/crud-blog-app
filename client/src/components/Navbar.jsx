import React from 'react';

import { FaInstagramSquare, FaLinkedin, FaGithubSquare, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const user = true;

	return (
		<nav className="w-full sticky top-0 flex items-center bg-white font-josefin py-4 z-50 opacity-95">
			<div className="w-1/5 flex items-center justify-center">
				<FaInstagramSquare className="inline-block text-3xl cursor-pointer" />
				<FaLinkedin className="inline-block text-3xl cursor-pointer" />
				<FaGithubSquare className="inline-block text-3xl cursor-pointer" />
			</div>
			<div className="w-3/5">
				<ul className="flex justify-center m-0 p-0 list-none">
					<li className="mr-5 text-2xl font-light cursor-pointer uppercase">
						<Link to="/" className="underline-none text-inherit">
							Home
						</Link>
					</li>
					<li className="mr-5 text-2xl font-light cursor-pointer uppercase">
						<Link to="/" className="underline-none text-inherit">
							About
						</Link>
					</li>
					<li className="mr-5 text-2xl font-light cursor-pointer uppercase">
						<Link to="/contact">Contact</Link>
					</li>
					<li className="mr-5 text-2xl font-light cursor-pointer uppercase">
						<Link to="/create-post">Write</Link>
					</li>
					<li className="mr-5 text-2xl font-light cursor-pointer uppercase">
						<Link to="/login" className="underline-none text-inherit">
							{user && 'Logout'}
						</Link>
					</li>
				</ul>
			</div>
			<div className="w-1/5 flex items-center justify-center">
				{user ? (
					<img className="w-10 h-10 rounded-full object-cover" src="https://i.ibb.co/6YJ77mg/avatar.png" alt="avatar picture" />
				) : (
					<ul className='flex justify-center m-0 p-0 list-none'>
						<li className="mr-5 text-2xl font-light cursor-pointer uppercase">
							<Link to="/login">Login</Link>
						</li>
						<li className="mr-5 text-2xl font-light cursor-pointer uppercase">
							<Link to="/register">Register</Link>
						</li>
					</ul>
				)}
				<FaSearch className="text-lg text-slate-600 cursor-pointer ml-4" />
			</div>
		</nav>
	);
};

export default Navbar;
