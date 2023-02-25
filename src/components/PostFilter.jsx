import React from 'react';
import MySelect from '../UI/select/select';
import MyInput from '../UI/input/input';


const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
        <MyInput
            placeholder='Search...'
            value={filter.query}
            onChange={e=>setFilter({...filter, query:e.target.value})}
        />
        <MySelect
            value={filter.sort}
            onChange={selecterSort => setFilter({...filter, sort:selecterSort})}
            defaultValue='Sort by'
            options={[
            {value: 'title', name: 'Name'},
            {value: 'body', name: 'Description'},
            ]}
        />
    </div>
  )
}

export default PostFilter