import React from "react";
import { form, actions } from "./NewPost.module.css";
import Modal from "../components/Modal";
import { Form, Link, redirect } from "react-router-dom";
import axios from "axios";

const NewPost = () => {
  return (
    <Modal>
      <Form method="post" className={form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" name="author" id="name" required />
        </p>
        <p className={actions}>
          <Link to="..">Cancel</Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
};

export default NewPost;

export const action = async ({ request }) => {
  const formData = await request.formData();
  const postData = await Object.fromEntries(formData);
  return axios
    .post("http://localhost:8080/posts", {
      ...postData,
    })
    .then((res) => redirect("/"));
};
