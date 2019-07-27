import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import MainReducer from '../reducers/MainReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    MainReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
