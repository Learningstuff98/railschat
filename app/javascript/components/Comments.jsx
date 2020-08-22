import React, { useState, useEffect } from "react"
import CommentForm from './CommentForm'
import axios from "axios"
import consumer from "channels/consumer"

export default function Comments({ root_with_chatroom_id, chatroom }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments();
    handleWebsocketUpdates();
  }, []);

  const handleWebsocketUpdates = () => {
    consumer.subscriptions.create({channel: "ChatroomChannel"}, {
      received(data) {
        if(data.chatroom.id === chatroom.id) {
          setComments(data.comments);
        }
      }
    });
  };

  const getComments = () => {
    axios.get(`${root_with_chatroom_id}/comments`)
    .then((res) => setComments(res.data))
    .catch((err) => console.log(err.response.data));
  };

  const renderComments = () => {
    return comments.map((comment) => {
      return <h3 className="green" key={comment.id}>
        {comment.message}
      </h3>
    });
  };

  const buildCommentForm = () => {
    return <div>
      <CommentForm
        root_with_chatroom_id={root_with_chatroom_id}
        getComments={getComments}
      />
    </div>
  };

  return <div>
    <br/><br/>
    {buildCommentForm()}
    <br/><br/>
    {renderComments()}
  </div>
}
