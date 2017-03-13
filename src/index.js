import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/containers/App';
import { Provider } from 'react-redux';
import rootReducer from './js/reducers';
import rootSaga from './js/sagas';
import configureStore from './js/store';

const store = configureStore({ rootReducer, rootSaga });

ReactDOM.render(
  (<Provider store={store}>
    <App />
  </Provider>),
  document.getElementById('root')
);
