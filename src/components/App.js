import React, { Component } from 'react';

require('../../style/style.css');

import SearchBar from './search_bar';
import MovieList from './movie_list';
import MovieInfo from './movie_info';

class Application extends Component {
  constructor(props) {
    super(props);

    this.prepareSearchWord = this.prepareSearchWord.bind(this);
    this.doDetailedSearch = this.doDetailedSearch.bind(this);

    this.state = { movies: [] };
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
    this.fetchOMDbData(input, (movies) => {
      this.setState({movies: movies.Search});
    });
  }

  doDetailedSearch(input) {
    this.fetchOMDbData(input, (selectedMovie) => {
      this.setState({selectedMovie: selectedMovie});
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-7">
          <SearchBar onSearching={this.prepareSearchWord} />
          <MovieList
            movies={this.state.movies}
            onMovieClick={this.doDetailedSearch }
          />
        </div>
        <MovieInfo movie={this.state.selectedMovie} />
      </div>
    );
  }
}

export default Application;