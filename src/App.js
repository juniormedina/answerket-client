import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Navbar from "./components/container/Navbar";
import Notifications from "./components/container/Notifications";
import Landing from "./components/container/Landing";
import Signup from "./components/container/Signup";
import Login from "./components/container/Login";
import Dashboard from "./components/container/Dashboard";
import ErrorPage from './components/presentational/Pages/Error';
import NotFoundPage from './components/presentational/Pages/NotFound';


class App extends Component {
  // Redirects user to login page if attempting to access dashboard while not being authenticated
  authWall = component => {
    switch (component) {
      case Landing:
        return this.props.isAuthenticated ? <Dashboard /> : <Landing />;
      case Signup:
        return this.props.isAuthenticated ? <Dashboard /> : <Signup />;
      case Login:
        return this.props.isAuthenticated ? <Dashboard /> : <Login />;
      case Dashboard:
        return this.props.isAuthenticated ? <Dashboard /> : <Login />;
      default:
        return <ErrorPage />
    }
  };

  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Navbar />
          <Notifications />
          <Switch>
            <Route exact path="/" render={() => this.authWall(Landing)} />
            <Route exact path="/login" render={() => this.authWall(Login)} />
            <Route exact path="/signup" render={() => this.authWall(Signup)} />
            <Route exact path="/dashboard" render={() => this.authWall(Dashboard)} />
            <Route component={NotFoundPage} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = ({ isAuthenticated }) => {
  return { isAuthenticated };
};

export default connect(
  mapStateToProps
)(App);
