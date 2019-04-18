import React, { Component } from 'react';
import { connect } from 'react-redux';
import View from '../../presentational/Dashboard';
import Ticket from '../../presentational/Dashboard/Ticket';
import TicketPreview from '../../presentational/Dashboard/Ticket/Preview';
import ChatMessage from '../../presentational/Dashboard/Ticket/Chat/Message';
import * as actions from '../../../actions';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.chatBoxRef = React.createRef();
    this.views = {
      PREVIEW: 0,
      TICKET: 1
    };
    this.state = {
      currentView: this.views.PREVIEW,
      currentTicketIndex: null
    };
  }

  getTicketPreviews() {
    return this.props.tickets.length > 0 ? (
      this.props.tickets.map((ticket, index) => (
        <TicketPreview
          key={index}
          number={ticket.number}
          date={ticket.messages[ticket.messages.length - 1].date}
          time={ticket.messages[ticket.messages.length - 1].time}
          status={ticket.status}
          inquirer={ticket.inquirer}
          subject={ticket.subject}
          onClick={() => this.ticketPreviewHandler(index)}
        />
      ))
    ) : (
      <TicketPreview />
    );
  }

  ticketPreviewHandler = index => {
    this.setState({
      currentView: this.views.TICKET,
      currentTicketIndex: index
    });
  };

  buttonTicketSendHandler = () => {
    // Grabs text from chat box
    let message = this.chatBoxRef.current.value;
    // TODO: Validate message
    if (!message) return;
    // Dispatches message
    actions.ticketSend(message, this.state.currentTicketIndex);
    // Clears chat box
    this.chatBoxRef.current.value = '';
  };

  buttonBackHandler = () => {
    this.setState({
      currentView: this.views.PREVIEW,
      currentTicketIndex: null
    });
  };

  buttonTicketCloseHandler = () => {
    // Dispatches ticket close
    actions.ticketClose(this.state.currentTicketIndex);
  }

  renderContent() {
    switch (this.state.currentView) {
      case this.views.PREVIEW:
        return <View ticketPreviews={this.getTicketPreviews()} />;
      case this.views.TICKET:
        let ticket = this.props.tickets[this.state.currentTicketIndex];
        let chatMessages = ticket.messages.map((message, index) => {
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
          <Ticket
            number={ticket.number}
            inquirer={ticket.inquirer}
            subject={ticket.subject}
            messages={chatMessages}
            chatBoxRef={this.chatBoxRef}
            buttonTicketSendHandler={this.buttonTicketSendHandler}
            buttonBackHandler={this.buttonBackHandler}
            buttonTicketCloseHandler={this.buttonTicketCloseHandler}
          />
        );
      default:
        return null;
    }
  }
  render() {
    return this.renderContent();
  }
}

const mapStateToProps = ({ company }) => ({ tickets: company.tickets });

export default connect(
  mapStateToProps,
  actions
)(Dashboard);
