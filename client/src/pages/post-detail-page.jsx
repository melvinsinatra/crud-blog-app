import React from 'react'
import { PostDetail, Sidebar } from '../components';


const PostDetailPage = () => {
  return (
    <div className='single flex'>
      <PostDetail />
      <Sidebar />
    </div>
  )
}

export default PostDetailPage;