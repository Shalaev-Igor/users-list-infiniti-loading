import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import Loader from '../UI/Loader/Loader';

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState([])
    const [comments, setComments] = useState([])

    const [fetchPostById, isLoading, error] = useFetching(async() => {
        const response = await PostService.getById(params.id);
        setPost(response.data)
    })

    const [fetchCommentsById, isComLoading, comerror] = useFetching(async() => {
        const response = await PostService.getCommentsByPostId(params.id);
        setComments(response.data)
    })

    useEffect(()=>{
        fetchPostById()
        fetchCommentsById()
    }, [])
    
  return (
    <div className='single__post'>
        <h2> Your open post with ID: {post.id}</h2>
        {
            isLoading
            ? <Loader/>
            :<div>
                <h1 className='single__post_title'>{post.title}</h1>
                <div className='single__post_description'>{post.body}</div>
            </div>
            
        }
        <h2 style={{marginTop:40}}> Comments: </h2>
        {isComLoading
            ?<Loader/>
            :<div style={{marginBottom:40}}>
                {
                    comments.map(comm =>
                        <div key={comm.id} style={{marginTop:15}}>
                            <h4>{comm.email}</h4>
                            <div>{comm.body}</div>
                        </div>
                        )
                }
            </div>

        }
       
    </div>
  )
}

export default PostIdPage;