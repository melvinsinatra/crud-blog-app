import React from 'react';
import { FaUserEdit } from 'react-icons/fa';
import { Sidebar } from '../components';

const Settings = () => {
	return (
		<div className="settings flex">
			<div className="settingsWrapper w-3/4 p-5">
				<div className="settingsTitle flex items-center justify-between">
					<span className="settingsUpdateTitle text-3xl mb-5 text-blue-400">Update your Account</span>
					<span className="settingsDeleteTitle text-3xl mb-5 py-3 px-6 rounded-2xl text-white bg-red-600 cursor-pointer">Delete your Account</span>
				</div>
				<form className="settingsForm flex flex-col" action="">
					<label htmlFor="">Profile picture</label>
					<div className="settingsPP flex items-center my-3 mx-0 gap-5">
						<img className="w-17 h-17 rounded-3xl object-cover" src="https://i.ibb.co/6YJ77mg/avatar.png" alt="Profile Picture" />
						<label className="bg-blue-400 rounded-2xl flex items-center justify-center p-1 cursor-pointer" htmlFor="fileInput">
							<FaUserEdit className="text-3xl text-white" />
						</label>
						<input type="file" id="fileInput" className="hidden" />
					</div>
					<div className='flex flex-col mb-6'>
						<label className='text-xl' htmlFor="username">Username</label>
						<input className='p-3 border-b border-solid border-slate-300 focus:outline-none' type="text" name="username" placeholder="Melvin" />
					</div>
					<div className='flex flex-col mb-6'>
						<label className='text-xl' htmlFor="email">Email</label>
						<input className='p-3 border-b border-solid border-slate-300 focus:outline-none' type="email" name="email" placeholder="melvin@mail.com" />
					</div>
					<div className='flex flex-col mb-6'>
						<label className='text-xl' htmlFor="password">Password</label>
						<input className='p-3 border-b border-solid border-slate-300 focus:outline-none' type="password" name="password" placeholder="********" />
					</div>
					<button className="settingsSubmit self-center mt-4 py-3 px-6 rounded-lg text-white bg-blue-600">Update</button>
				</form>
			</div>
			<Sidebar />
		</div>
	);
};

export default Settings;
