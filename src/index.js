import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import configureStore from './store/configureStore';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

const root = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDom.render(root, document.getElementById('app'));
