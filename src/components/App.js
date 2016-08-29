import React, { Component } from 'react';

require('bootstrap/dist/css/bootstrap.min.css');
require('../../style/style.css');

import Nav from './Nav'
import SearchBar from './search_bar';
import LoadingBar from './LoadingBar';
import MovieList from './movie_list';
import MovieInfo from './movie_info';

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