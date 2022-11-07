import React from 'react';
import Post from './Post';

const PostsContainer = () => {
	return <div className="posts w-3/4 p-5 flex flex-wrap gap-6 justify-center">
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
  </div>;
};

export default PostsContainer;
