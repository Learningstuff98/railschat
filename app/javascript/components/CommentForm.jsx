import React from "react"
import axios from "axios"

class CommentForm extends React.Component {

  submitComment(formData) {
    axios.post(`${this.props.root_with_chatroom_id}/comments`, formData)
    .catch((err) => console.log(err.response.data));
  }

  handleCommentSubmission(e) {
    e.preventDefault();
    this.submitComment({ message: this.commentContent.value });
    this.clearCommentInputElement();
  }

  clearCommentInputElement() {
    this.commentContent.value = '';
  }

  render() {
    return <form onSubmit={(e) => this.handleCommentSubmission(e)}>
      <input type='text' placeholder='Comment...' size="50" ref={(input) => this.commentContent = input}/>
      <br/><br/>
      <input type="submit" value="Add comment" className="btn btn-primary make-it-green"/>
    </form>      
  }
}

export default CommentForm
