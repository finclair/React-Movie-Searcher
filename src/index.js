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

const url = 'http://www.omdbapi.com/?s=lol';


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

    this.state = { movies: [] }; //the state of movies starts as an empty array

  }

  componentDidMount() {
    this.fetchOMDbData(url, (movies) => {
      console.log(movies.Search);

      this.setState({ movies: movies.Search });
    });
  }

  fetchOMDbData(url, callback) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => {
      if (httpRequest.readyState === 4 && httpRequest.status === 200) {
        var response = JSON.parse(httpRequest.responseText);
        callback(response);
      }
    };
    httpRequest.open('GET', url);
    httpRequest.send();
  }

  render() {
    return (
      <div>Moi!!!!
        <SearchBar />
        <MovieList movies={this.state.movies} />
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
