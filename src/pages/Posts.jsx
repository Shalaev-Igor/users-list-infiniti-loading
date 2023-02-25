import React, {useEffect, useRef, useState} from 'react';

import PostList from '../components/PostList';
import AddPost from '../components/addPost';
import PostFilter from '../components/PostFilter';
import MyModal from '../UI/MyModal/MyModal';
import MyButton from '../UI/button';
import { usePosts } from '../hooks/usePosts';
import PostService from '../API/PostService';
import Loader from '../UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';
import { getPageCount} from '../utils/pages';
import Pagination from '../components/pagination';
import { useObserver } from '../hooks/useObserver';
import MySelect from '../UI/select/select';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort:'', query:''});
  const [modal, setModale] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1)
  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query);
  const lastElement = useRef();

  const [fetchPosts, loading, postError ] = useFetching( async () => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data])
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit))
  });

  const createPost = (newPost) =>{
    setPosts([...posts, newPost])
    setModale(false);
  }

  useObserver(lastElement, page < totalPages, loading, ()=>setPage(page+1))

  useEffect(()=>{
    fetchPosts()
  }, [page, limit])

  const changePage = (p) =>{
    setPage(p)
  }

  const removePost = (post) =>{
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <MyButton onClick={()=>setModale(true)}>Add New Post</MyButton>
      <MyModal visible={modal} setVisible={setModale}>
        <AddPost create={createPost}/> 
      </MyModal>
      <hr style={{margin:'15px 0'}}/>
      <h4>Filter</h4>
      <PostFilter filter={filter} setFilter={setFilter}/>
      <hr style={{margin:'15px 0'}}/>
      <div>
        <h4>Number elements on page</h4>
        <MySelect
          value={limit}
          onChange={value => setLimit(value)}
          defaultValue='Number elements on page'
          options={[
            {value:5, name: '5'},
            {value:10, name: '10'},
            {value:25, name: '25'},
            {value:-1, name: 'All Posts'},
        ]}
      />
      </div>
      
      {
        postError && <h1> Error - ${postError}</h1>
      }
      <PostList posts={sortedAndSearchPosts} title={"Posts List"} remove={removePost}/>
      {
      loading &&
        <div style={{marginTop:50}}><Loader/></div> 
      }
      
      <div ref={lastElement}></div>

      <Pagination 
        page={page}
        changePage={changePage} 
        totalPages={totalPages}/>
     
    </div>
  );
}

export default Posts;
