import React from 'react';
import MyButton from '../UI/button';
import { useNavigate } from 'react-router-dom';

const PostItem = ({post, remove}) => {
  const navigate = useNavigate()
  return (
    <div className='post'>
        <div className='post__content'>
            <strong>{post.id}. {post.title}</strong>
            <div>
                {post.body}
            </div>
        </div>
        <div className='post__btn'>
            <MyButton onClick={()=>remove(post)}>Delete</MyButton>
            <MyButton onClick={()=>navigate(`/posts/${post.id}`)}>View</MyButton>
        </div>
    </div>
  )
}

export default PostItem