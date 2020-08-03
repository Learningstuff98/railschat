import React from "react"

class TestComponent extends React.Component {

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
