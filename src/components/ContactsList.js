import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ContactsListItem from './ContactsListItem';

const ContactsList = props => (
  <div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Note</th>
        </tr>
      </thead>
      <tbody>
        {
          props.contactsList && props.contactsList.length === 0 ? <tr className="no-contact">Please Add Contact</tr> : props.contactsList.map((contact, index) => (
            <ContactsListItem id={index} contact={contact} />
          ))
        }
      </tbody>
    </table>
  </div>
);

ContactsList.propTypes = {
  contactsList: PropTypes.array
};

ContactsList.defaultProps = {
  contactsList: []
};

const mapStateToProps = state => ({
  contactsList: state.ContactsList
});

export default connect(mapStateToProps)(ContactsList);
