import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import configureStore from './store';
import Root from './components/Root'

import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render(
  <Root store={store} />, 
  document.getElementById('root')
);
registerServiceWorker();
