import React, { Component } from 'react';
import { connect } from 'react-redux';
import View from '../../presentational/Dashboard';
import Ticket from '../../presentational/Dashboard/Ticket';
import TicketPreview from '../../presentational/Dashboard/Ticket/Preview';

class Dashboard extends Component {
  constructor(props) {
    super(props);
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
    console.log('ticketPreviewHandler was triggered!')
    this.setState({ currentView: this.views.TICKET, currentTicketIndex: index });
  };

  renderContent() {
    switch (this.state.currentView) {
      case this.views.PREVIEW:
        return <View ticketPreviews={this.getTicketPreviews()} />;
      case this.views.TICKET:
        return <Ticket />;
      default:
        return null;
    }
  }
  render() {
    return this.renderContent();
  }
}

const mapStateToProps = ({ tickets }) => ({ tickets });

export default connect(mapStateToProps)(Dashboard);
