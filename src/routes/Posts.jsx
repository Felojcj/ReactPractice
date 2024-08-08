import { Outlet } from "react-router-dom";
import PostsList from "../components/PostsList";
import axios from "axios";

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
}

export default Posts;

export const loader = () => {
  let resData = axios
    .get("http://localhost:8080/posts")
    .then((res) => (resData = res.data.posts));
  return resData;
};
