import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {getMessage} from "../actions/index";

class ChatBody extends Component {

  renderMessages() {
    return this.props.messages.map((message) => {
      return (
        <div key={message.date} className="messageBody">
          <p className="messageText">
            {message.message}
          </p>
          <span>{message.date}</span>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="u-full-width chatBody">{this.renderMessages()}</div>
    );
  }

}

function mapStateToProps(state) {
  return {messages: state.messages}
}

export default connect(mapStateToProps)(ChatBody);
