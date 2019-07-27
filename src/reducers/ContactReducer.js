const ContactsState = [];

export default (state = ContactsState, action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return [
        ...state,
        action.contact
      ];
    default:
      return state;
  }
}
