import React from 'react';
import { FaGithubSquare, FaInstagramSquare, FaLinkedinIn } from 'react-icons/fa';

const Sidebar = () => {
	return (
		<div className="w-1/4 m-5 pb-7 bg-slate-100 rounded-xl flex flex-col items-center">
			<div className="flex flex-col items-center">
				<span className="w-full m-3 p-1 border-y border-solid border-y-slate-500 font-varela text-slate-900 text-center">Categories</span>
				<ul className="list-none mb-7">
					<li className="inline-block w-1/2 mt-4 cursor-pointer">Tech</li>
					<li className="inline-block w-1/2 mt-4 cursor-pointer">Music</li>
					<li className="inline-block w-1/2 mt-4 cursor-pointer">Movies</li>
					<li className="inline-block w-1/2 mt-4 cursor-pointer">Games</li>
					<li className="inline-block w-1/2 mt-4 cursor-pointer">Lifestyle</li>
				</ul>
			</div>
			<div className="flex flex-col items-center">
				<span className="w-full m-3 p-1 border-y border-solid border-y-slate-500 font-varela text-slate-900 text-center">Follow us</span>
				<div className="mt-4 w-64 flex items-center justify-center gap-3">
					<FaInstagramSquare className="inline-block text-3xl cursor-pointer" />
					<FaLinkedinIn className="inline-block text-3xl cursor-pointer" />
					<FaGithubSquare className="inline-block text-3xl cursor-pointer" />
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
