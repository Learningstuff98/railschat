import React from "react"
import CommentForm from './CommentForm'
import axios from "axios"

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
    this.getComments = this.getComments.bind(this);
  }

  componentDidMount() {
    this.getComments();
  }

  getComments() {
    axios.get(this.props.root_with_chatroom_instance + '/comments')
    .then((res) => this.setState({ comments: res.data }))
    .catch((err) => console.log(err.response.data));
  }

  buildCommentForm() {
    return <div>
      <CommentForm
        root_with_chatroom_instance={this.props.root_with_chatroom_instance}
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
