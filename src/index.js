import React, { Component } from 'react'; //get the React from node_modules
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';
import SearchBar from './components/search_bar';
import MovieList from './components/movie_list';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducers);

if (module.hot) {
  module.hot.accept('./reducers', () => {
    const nextReducer = require('./reducers/index').default;
    store.replaceReducer(nextReducer);
  });
}

//Create a component. This component should produce some HTML
class Application extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>Moi!!!!
        <SearchBar />
        <MovieList />
    </div>
    );
  }
}

//Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(
  //<Provider store={store}>
    <Application />
  //</Provider>
  , document.querySelector('.container'));
