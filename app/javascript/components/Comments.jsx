import React from "react"
import CommentForm from './CommentForm'
import axios from "axios"
import consumer from "channels/consumer"

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
  }

  componentDidMount() {
    this.getComments();
    this.handleWebsocketUpdates(this);
  }

  handleWebsocketUpdates(commentsComponent) {
    consumer.subscriptions.create({channel: "ChatroomChannel"}, {
      received(data) {
        if(data.comment.chatroom_id === commentsComponent.props.chatroom.id) {
          let comments = commentsComponent.state.comments;
          comments.push(data.comment);
          commentsComponent.setState({ comments, });
        }
      }
    });
  }

  getComments() {
    axios.get(`${this.props.root_with_chatroom_id}/comments`)
    .then((res) => this.setState({ comments: res.data }))
    .catch((err) => console.log(err.response.data));
  }

  buildCommentForm() {
    return <div>
      <CommentForm
        root_with_chatroom_id={this.props.root_with_chatroom_id}
        getComments={this.getComments}
      />
    </div>
  }

  renderComments() {
    return this.state.comments.map((comment) => {
      return <h3 className="green" key={comment.id}>
        {comment.message}
      </h3>
    });
  }

  render() {
    return <div>
      {this.buildCommentForm()}
      <br/>
      {this.renderComments()}
    </div>
  }
}

export default Comments
