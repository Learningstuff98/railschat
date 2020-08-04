import React from "react"
import axios from "axios"

class TestComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chatrooms: []
    };
  }

  componentDidMount() {
    this.getChatRooms();
  }

  getChatRooms() {
    axios.get('https://rails-chat-andy-strube.herokuapp.com/chatrooms')
    .then((res) => this.setState({ chatrooms: res }))
    .catch((err) => console.log(err.response.data)); 
  }

  renderTestButton() {
    return <div onClick={() => console.log("I was clicked")} className="cursor">
      test button
    </div>
  }

  renderMessage() {
    return <div>{this.props.message}</div>
  }

  render() {
    return <div>
      TestComponent
      {this.renderMessage()}
      {this.renderTestButton()}
    </div>
  }
}

export default TestComponent
