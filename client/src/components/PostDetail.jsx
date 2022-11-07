import React from 'react';

import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const PostDetail = () => {
	return (
		<div className="singlePost w-3/4">
			<div className="singlePostWrapper p-5 pr-0">
				<img className="singlePostImg w-full h-96 rounded-md object-cover" src="https://i.ibb.co/zxbjtSh/placeholder-img.jpg" alt="Post Image" />
				<h1 className="singlePostTitle text-center m-2 font-lora text-3xl">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, unde?
					<div className="singlePostEdit float-right text-lg flex gap-4 p-1">
						<FaEdit className="inline text-2xl text-blue-700 cursor-pointer" />
						<FaTrashAlt className="inline text-2xl text-red-600 cursor-pointer" />
					</div>
				</h1>
				<div className="singlePostInfo mb-5 flex justify-between text-base text-yellow-600 font-varela">
					<span className="singlePostAuthor">
						Author: <strong>Melvin</strong>
					</span>
					<span className="singlePostDate">1 hour ago</span>
				</div>
				<p className='text-base text-slate-500 first-letter:ml-5 first-letter:text-3xl first-letter:font-semibold'>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa hic vitae aperiam itaque quas delectus. Ipsa quae magnam voluptatibus, molestiae
					accusantium labore culpa voluptas illo fugit. Officiis repellendus repudiandae tempore accusantium incidunt recusandae quisquam neque itaque
					animi laborum possimus voluptatibus amet hic culpa vitae in eligendi eveniet ratione, cupiditate fugiat quasi obcaecati. Aliquid maxime deserunt
					repellat consectetur corrupti repellendus voluptatibus doloribus similique impedit iure ipsam placeat dolor atque cupiditate, deleniti
					consequuntur quis reprehenderit odio laudantium fugiat vero! Quibusdam reiciendis error, aspernatur ea perspiciatis repellat dolorum harum
					maiores facilis magnam eaque nemo sit nam eius similique, magni obcaecati sunt odio laboriosam?
				</p>
			</div>
		</div>
	);
};

export default PostDetail;
