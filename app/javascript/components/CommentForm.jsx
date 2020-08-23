import React, { useState } from "react";
import axios from "axios";

export default function CommentForm({ root_with_chatroom_id }) {
  const [input, setInput] = useState('');

  const submitComment = (formData) => {
    axios.post(`${root_with_chatroom_id}/comments`, formData)
    .catch((err) => console.log(err.response.data));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitComment({ message: input });
    setInput('');
  };

  const buildInputButton = () => {
    return <input
      type="submit"
      value="Submit"
      className="btn btn-primary green"
    />
  };

  const buildInputElement = () => {
    return <input
      type="text"
      placeholder="Add a comment"
      size="50"
      value={input}
      onChange={e => setInput(e.target.value)}
    />
  };

  return <form onSubmit={handleSubmit}>
    {buildInputElement()}
    <br/><br/>
    {buildInputButton()}
  </form>
}
