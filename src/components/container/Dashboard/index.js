import React, { Component } from 'react';
import { connect } from 'react-redux';
import View from '../../presentational/Dashboard';
import Ticket from '../../presentational/Dashboard/Ticket';
class Dashboard extends Component {
  getTickets() {
    return this.props.tickets.length > 0 
    ? this.props.tickets.map((ticket, index) => (
      <Ticket key={index} data={ticket} />
    ))
    : <Ticket />;
  }

  render() {
    return <View tickets={this.getTickets()} />;
  }
}

const mapStateToProps = ({ tickets }) => ({ tickets });

export default connect(mapStateToProps)(Dashboard);
