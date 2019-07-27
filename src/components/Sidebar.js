import React, { Component } from 'react';
import { history } from './App';

class Sidebar extends Component {
  onAddContactForm = () => {
    history.push('/');
  };

  onViewContacts = () => {
    history.push('/viewcontacts');
  };

  render() {
    return (
      <div className="sidebar-nav">
        <div className="sidebar-item" role="presentation" onClick={this.onAddContactForm}>Add Contact</div>
        <div className="sidebar-item" role="presentation" onClick={this.onViewContacts}>View Contacts</div>
      </div>
    )
  }
}

export default Sidebar
