import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import {configureStore} from './store/configureStore'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
const store = configureStore();

ReactDOM.render( <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
 

serviceWorker.register();
