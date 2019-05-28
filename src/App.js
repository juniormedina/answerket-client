import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from './components/container/Navbar';
import Notification from './components/container/Notification';
import Landing from './components/container/Landing';
import Signup from './components/container/Signup';
import Login from './components/container/Login';
import Dashboard from './components/container/Dashboard';
import ErrorPage from './components/presentational/Pages/Error';
import NotFoundPage from './components/presentational/Pages/NotFound';
import * as actions from './actions';
import Inquiry from './components/container/Inquiry';
import Ticket from './components/container/Ticket';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  // Redirects user to login page if attempting to access dashboard while not being authenticated
  authWall = component => {
    switch (component) {
      case Landing:
        return this.props.name ? <Dashboard /> : <Landing />;
      case Signup:
        return this.props.name ? <Dashboard /> : <Signup />;
      case Login:
        return this.props.name ? <Dashboard /> : <Login />;
      case Dashboard:
        return this.props.name ? <Dashboard /> : <Login />;
      default:
        return <ErrorPage />;
    }
  };

  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Navbar />
          <Notification />
          {this.props.name ? (
            <Route component={Dashboard} />
          ) : (
            <Switch>
              <Route exact path="/" render={() => this.authWall(Landing)} />
              <Route exact path="/login" render={() => this.authWall(Login)} />
              <Route
                exact
                path="/signup"
                render={() => this.authWall(Signup)}
              />
              <Route
                exact
                path="/dashboard"
                render={() => this.authWall(Dashboard)}
              />
              <Route
                exact
                path="/t/:companyName/:companyNumber"
                component={Inquiry}
              />
              <Route
                exact
                path="/t/:companyName/:companyNumber/:confirmationURL"
                component={Ticket}
              />
              <Route component={NotFoundPage} />
            </Switch>
          )}
        </Fragment>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = ({ company }) => {
  return { name: company.name };
};

export default connect(
  mapStateToProps,
  actions
)(App);
