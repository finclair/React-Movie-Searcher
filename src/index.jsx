import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers, { default as nextReducer } from './reducers';

import App from './components/App';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducers);

if (module.hot) {
  module.hot.accept('./reducers', () => {
    store.replaceReducer(nextReducer);
  });
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('#app'));
