import React from "react";
import { post, author, text } from "./Post.module.css";
import { Link } from "react-router-dom";

const Post = ({ id, author: postAuthor, body }) => {
  return (
    <li className={post}>
      <Link to={id}>
        <p className={author}>{postAuthor}</p>
        <p className={text}>{body}</p>
      </Link>
    </li>
  );
};

export default Post;
