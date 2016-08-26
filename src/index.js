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

const url = 'http://www.omdbapi.com/?s=';


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

    this.prepareSearchWord = this.prepareSearchWord.bind(this)

    this.state = { movies: [] }; //the state of movies starts as an empty array

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

  prepareSearchWord(input) {
    const complete = url.concat(input);
    this.fetchOMDbData(complete, (movies) => {
    this.setState({movies: movies.Search});
    }
    );
  }

  render() {
    return (
      <div>
        <div className="col-md-7">
          <SearchBar onSearching={this.prepareSearchWord} />
          <MovieList movies={this.state.movies} />
        </div>
    </div>
    );
  }
}

//Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(
  //<Provider store={store}>
    <Application />
  //</Provider>
  , document.querySelector('.content'));
