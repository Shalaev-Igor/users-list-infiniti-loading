import React,{ useState} from 'react'
import MyButton from '../UI/button'
import MyInput from '../UI/input/input'

const AddPost = ({create}) => {

const[post, setPost] = useState({title:'', body:''})

const addNewPost = (e) =>{
    e.preventDefault();
    const newPost = {
        ...post,
        id: Date.now(),
    }
    create(newPost);
    setPost({title:'', body:''});
  }

  return (
    <div>
        <h2> Add New Post</h2>
        <form>
            <MyInput value={post.title} type='text' placeholder='New Post Title' onChange={(e)=>setPost({...post, title: e.target.value})}/>
            <MyInput value={post.body} type='text' placeholder='New Post Description'onChange={(e)=>setPost({...post, body: e.target.value})} />
            <MyButton style={{marginTop:10}} onClick={addNewPost}> Add New Post</MyButton>
        </form>
    </div>
  )
}

export default AddPost