 import React from "react";
 import PostItem from "../PostItem/PostItem";
 import  "./PostList.css";

import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

 function PostList ({posts, title, remove}) {
     if(!posts.length) {
         return (
         <div className='info__message'>Постів не знайдено!</div>
         )
     }

     return (
         <div>
        <h1 style={{textAlign: "center", marginTop: "50px 0"}}>{title}</h1>
         <TransitionGroup>
            {posts.map((post, index) => 
              <CSSTransition
              key={post.id}
              timeout={500}
              classNames="post"
            >
                <PostItem  number={index + 1} post={post} remove={remove}> </PostItem>
            </CSSTransition>
                        )}
         </TransitionGroup>
           
        </div>
     )
 }
 
 
 export default PostList;

    