import React from 'react';
import PropTypes from 'prop-types';

const ContactsListItem = (props) => {
  const contact = { ...props.contact };
  return (
    <tr>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>
        {contact.addrHouseNo}
        ,
        {contact.addrStreet}
        ,
        {contact.addrCity}
        ,
        {contact.addrState}
        ,
        {contact.addrPincode}
        ,
        {contact.addrCountry}
      </td>
      <td>
        {contact.phoneCountryCode}
        {contact.phoneNo}
      </td>
      <td>{contact.note}</td>
    </tr>
  )
};

ContactsListItem.propTypes = {
  contact: PropTypes.object
};

ContactsListItem.defaultProps = {
  contact: {}
};

export default ContactsListItem;
