import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';

const CreatePostPage = () => {
	return (
		<div className="write pt-12">
			<div className="container my-0 mx-auto">
        <img className='w-2/5 h-96 object-cover' src="https://i.ibb.co/zxbjtSh/placeholder-img.jpg" alt=""/>
				<form className="writeForm" action="">
					<div className="writeFormGroup flex items-center">
						<label htmlFor="fileInput">
							<FaPlusCircle className="w-8 h-8 rounded-full flex items-center justify-center text-slate-800 cursor-pointer" />
						</label>
						<input type="file" id="fileInput" className="hidden" />
						<input className="text-3xl border-none p-5 w-full focus:outline-none" type="text" placeholder="Title" autoFocus />
					</div>
					<div className="writeFormGroup ml-">
						<textarea className="writeInput writeText text-xl border-none p-5 w-full focus:outline-1 focus:outline-slate-300" type="text" placeholder="Tell your Story..."></textarea>
					</div>
					<div className='w-full flex items-center justify-center'>
						<button className="writeSubmit rounded-lg py-3 px-6 bg-blue-700 text-white">Publish</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default CreatePostPage;
