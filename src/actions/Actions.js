const addContact = (contact = {}) => ({
  type: 'ADD_CONTACT',
  contact
});

export default addContact;
