import React, { Component } from 'react';

require('bootstrap/dist/css/bootstrap.min.css');
require('font-awesome/css/font-awesome.min.css');
require('../../style/style.css');

import Nav from './Nav'
import SearchBar from './SearchBar';
import LoadingBar from './LoadingBar';
import MovieList from './MovieList';
import MovieItem from './MovieItem';
import MovieInfo from './MovieInfo';

class Application extends Component {
  constructor(props) {
    super(props);

    this.prepareSearchWord = this.prepareSearchWord.bind(this);
    this.doDetailedSearch = this.doDetailedSearch.bind(this);

    this.state = {
      movies: [],
      isLoading: false
    };
  }

  fetchOMDbData(url, callback) {
    this.setState({isLoading: true});
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => {
      if (httpRequest.readyState === 4 && httpRequest.status === 200) {
        this.setState({isLoading: false});
        var response = JSON.parse(httpRequest.responseText);
        callback(response);
      }
    };
    httpRequest.open('GET', url);
    httpRequest.send();
  }

  prepareSearchWord(params) {
    const url = 'http://www.omdbapi.com/?s=';
    const typePart = '&type=';
    const completeURL = (`${url}${params.input}${typePart}${params.searchType}`);
    this.fetchOMDbData(completeURL, (movies) => {
      this.setState({movies: movies.Search});
    });
  }

  doDetailedSearch(movie) {

    const url = 'http://www.omdbapi.com/?plot=full&i=';
    const completeUrl = `${url}${movie.imdbID}`;

    this.fetchOMDbData(completeUrl, (selectedMovie) => {
      this.setState({selectedMovie: selectedMovie});
    });
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <SearchBar onSearching={this.prepareSearchWord} />
              {this.state.isLoading && <LoadingBar/>}
              <MovieList
                movies={this.state.movies}
                onMovieClick={this.doDetailedSearch }
              />
            </div>
            <MovieInfo movie={this.state.selectedMovie} />
          </div>
        </div>
      </div>
    );
  }
}

export default Application;