import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import NotFoundPage from './NotFoundPage';
import ContactFormContainer from './ContactFormContainer';
import ContactsList from './ContactsList';
import Sidebar from './Sidebar';
import Header from './Header';

export const history = createHistory();


class App extends Component {
  routes = () => (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={ContactFormContainer} />
        <Route path="/viewcontacts" component={ContactsList} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );

  render() {
    return (
      <div className="container">
        <Header />
        <div className="combine-content-container">
          <Sidebar />
          {this.routes()}
        </div>
      </div>
    );
  }
}

export default App;
