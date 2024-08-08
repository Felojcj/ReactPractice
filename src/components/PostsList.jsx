import React from "react";
import Post from "./Post";
import { posts } from "./PostsList.module.css";
import axios from "axios";
import { useLoaderData } from "react-router-dom";

const PostsList = () => {
  const postsArr = useLoaderData();

  return (
    <>
      {postsArr.length && (
        <ul className={posts}>
          {postsArr.map((post, index) => (
            <Post key={index} id={post.id} {...post} />
          ))}
        </ul>
      )}
      {!postsArr.length && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
      ;
    </>
  );
};

export default PostsList;
