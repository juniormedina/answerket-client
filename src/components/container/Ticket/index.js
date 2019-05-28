import React, { Component } from 'react';
import TicketChat from '../../presentational/Ticket/Chat';
import TicketError from '../../presentational/Ticket/Error';
import ChatMessage from '../../presentational/Ticket/Chat/Message';
import Axios from 'axios';

const axios =
  process.env.NODE_ENV === 'production'
    ? Axios.create({
        baseURL: 'https://answerket-server.herokuapp.com'
      })
    : Axios;

class Ticket extends Component {
  constructor(props) {
    super(props);
    this.chatBoxRef = React.createRef();
    this.views = {
      LOADING: 'LOADING',
      CHAT: 'CHAT',
      ERROR: 'ERROR'
    };
    this.state = {
      currentView: this.views.LOADING
    };
  }

  componentDidMount() {
    // Validates ticket
    this.getTicket(
      this.props.match.params.companyName,
      this.props.match.params.companyNumber,
      this.props.match.params.confirmationURL
    );
  }

  getTicket = async (companyName, companyNumber, confirmationURL) => {
    let response = await axios.post('/api/inquiry_fetch', {
      companyName,
      companyNumber,
      confirmationURL
    });
    if (response.data.isSuccessful) {
      this.setState({
        messages: response.data.messages,
        currentView: this.views.CHAT
      });
    } else {
      this.setState({ currentView: this.views.ERROR });
    }
  };

  renderContent = () => {
    switch (this.state.currentView) {
      case this.views.LOADING:
        return <p>Loading..</p>;
      case this.views.CHAT:
        return this.renderTicketChat();
      case this.views.ERROR:
        return this.renderTicketError();
      default:
        return null;
    }
  };

  render() {
    return this.renderContent();
  }

  renderTicketChat = () => {
    let chatMessages = this.state.messages.map((message, index) => {
      return (
        <ChatMessage
          key={index}
          date={message.date}
          time={message.time}
          text={message.text}
          fromInquirer={message.fromInquirer}
        />
      );
    });
    return (
      <TicketChat
        messages={chatMessages}
        companyName={this.props.match.params.companyName}
        companyNumber={this.props.match.params.companyNumber}
        chatBoxRef={this.chatBoxRef}
        buttonChatSubmitHandler={this.buttonChatSubmitHandler}
      />
    );
  };

  buttonChatSubmitHandler = async () => {
    // Grabs text from chat box
    let message = this.chatBoxRef.current.value;
    // TODO: Validate message
    if (!message) return;
    // Dispatches message
    let response = await axios.post('/api/inquiry_message_inquirer', {
      companyName: this.props.match.params.companyName,
      companyNumber: this.props.match.params.companyNumber,
      confirmationURL: this.props.match.params.confirmationURL,
      message
    });
    // TODO - ...
    // Temporary: Reloads ticket by sending same initial request
    if (response.data.isSuccessful) {
      this.setState({
        messages: response.data.messages
      });
    }
    // Clears chat box
    this.chatBoxRef.current.value = '';
  };

  renderTicketError = () => {
    return <TicketError />;
  };
}

export default Ticket;
