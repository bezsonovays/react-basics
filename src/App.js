import './App.css';
import Header from './components/Header/Header';
import PostList from './components/PostList/PostList';
import PostForm from './components/PostForm/PostForm';
import { useMemo, useState } from 'react';
import PostFilter from './components/PostFilter/PostFilter';
import MyModal from './components/UI/Modal/MyModal';
import MyButton from './components/UI/Button/MyButton';

function App() {
  const [posts, setPosts] = useState ([
      {id: 1, title: "JavaScript", body: "description"},
      {id: 2, title: "PHP", body: "description"},
      {id: 3, title: "Node.js", body: "description"},
  ])

  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);

  const sortedPost = useMemo(() => {
        console.log('Функція відпрацювала');
        if(filter.sort) {
          return [...posts].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]))
        } else {
          return posts;
        }
        
  }, [filter.sort, posts]);

  const sortedAndSeachesPosts = useMemo(() => {
    return sortedPost.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPost])

const createPost = (newPost) => {
  setPosts([...posts, newPost]);
  setModal(false);
}

const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
}


 return (
    <div className="App">
          <Header title="Create Post Page" className="header"></Header>
          <div className='container'>
         
            <MyButton style={{margin: "40px 10px"}} onClick={() => {setModal(true)}}>Створити пост</MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                 <PostForm create={createPost}></PostForm>
            </MyModal>
            <hr style={{margin: "15px 0 30px 0"}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            <PostList remove={removePost} posts={sortedAndSeachesPosts} title="Список постів"></PostList>
        
          </div>
     </div>
  );
}

export default App;
