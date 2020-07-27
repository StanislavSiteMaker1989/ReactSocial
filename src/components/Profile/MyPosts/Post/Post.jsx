import s from "./Post.module.css";
import React from "react";

const Post = (props) => {
        return<div className={s.item}>
        <img src='https://art1.ru/media/photo/content/GOT0804-14_3.JPG' />
        <div>
            {props.message}
            <span className={s.like}>like {props.likecount}</span>
        </div>
    </div>
}

export default Post;
