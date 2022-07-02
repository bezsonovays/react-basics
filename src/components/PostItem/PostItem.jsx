import React from "react";
import './PostItem.css';
import RemoveButton from "../UI/Button/RemoveButton";

function PostItem ({number, post, remove}) {
    return (
        <div className="post">
            <div className="post__body">

                <h4>{number}. {post.title}</h4>
                <div>{post.body}</div>
            </div>
            <div className="post__btn">
                <RemoveButton onClick={() => remove(post)} post={post}>Видалити</RemoveButton>
            </div>
        
        </div>
    )
}

export default PostItem;