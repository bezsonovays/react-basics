import React from 'react';
import MyInput from '../UI/Input/MyInput';
import MySelect from '../UI/Select/MySelect';

const PostFilter = ({filter, setFilter}) => {
  return (
        <div style={{display: 'flex', gap: "15px", alignItems: 'center'}}>
              <MyInput 
                placeholder="Пошук..."
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}></MyInput>
              <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="Сортувати"
                options={[
                  {value: "title", name: "по назві"},
                  {value: "body", name: "по опису"}
                ]} >
              </MySelect>
            </div>
  )
}

export default PostFilter