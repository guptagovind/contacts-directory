import { combineReducers } from 'redux';
import ContactReducer from './ContactReducer';


const MainReducer = combineReducers({
  ContactsList: ContactReducer
});

export default MainReducer;
