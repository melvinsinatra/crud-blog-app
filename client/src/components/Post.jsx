import React from 'react';

const Post = () => {
	return (
		<div className="post w-96">
			<img className="w-full h-72 object-cover rounded-lg" src="https://i.ibb.co/zxbjtSh/placeholder-img.jpg" alt="Post Image" />
			<div className="flex flex-col items-center">
				<div className="font-varela text-xs text-yellow-600 pt-4 flex gap-3">
					<span className="cursor-pointer">Music</span>
					<span className="cursor-pointer">Life</span>
				</div>
				<span className="font-josefin text-xl font-bold mt-4 cursor-pointer">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, recusandae.
				</span>
				<hr />
				<span className="font-lora italic text-base text-gray-400 mt-3 ">1 hour ago</span>
			</div>
			<p className='font-varela text-sm text-gray-600 mt-3 line-clamp-3 mb-6'>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit necessitatibus sapiente reprehenderit neque, ipsam magnam. Alias assumenda quisquam
				commodi impedit dolores sint deleniti maiores mollitia, quia temporibus, numquam rem placeat!
			</p>
		</div>
	);
};

export default Post;
