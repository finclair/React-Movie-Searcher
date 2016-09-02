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
import Pager from './Pager';

class Application extends Component {
  constructor(props) {
    super(props);

    this.searchMovies = this.searchMovies.bind(this);
    this.doDetailedSearch = this.doDetailedSearch.bind(this);
    this.browseNextPage = this.browseNextPage.bind(this);
    this.browsePreviousPage = this.browsePreviousPage.bind(this);

    this.state = {
      movies: [],
      isLoading: false,
      selectedPage: 1,
      textInput: ''
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

  searchMovies(searchCriterias) {
    const url = 'http://www.omdbapi.com/?s=';
    const typePart = '&type=';
    const pagePart = '&page=';
    const completeURL = `${url}${searchCriterias.input}${typePart}${searchCriterias.searchType}${pagePart}1`;
    this.fetchOMDbData(completeURL, (movies) => {
      this.setState({
        movies: movies.Search,
        selectedPage: 1,
        textInput: searchCriterias.input
      });
    });
  }

  doDetailedSearch(movie) {
    const url = 'http://www.omdbapi.com/?plot=full&i=';
    const completeUrl = `${url}${movie.imdbID}`;
    this.fetchOMDbData(completeUrl, (selectedMovie) => {
      this.setState({selectedMovie: selectedMovie});
    });
  }

  browseNextPage() {
    const url = 'http://www.omdbapi.com/?s=';
    const textInput = this.state.textInput;
    const typePart = '&type=';
    const pagePart = '&page=';
    const completeURL = `${url}${textInput}${typePart}${'movie'}${pagePart}${this.state.selectedPage + 1}`;
    this.fetchOMDbData(completeURL, (movies) => {
      this.setState({
        movies: movies.Search,
        selectedPage: this.state.selectedPage + 1
      });
    });
  }

  browsePreviousPage() {
    const url = 'http://www.omdbapi.com/?s=';
    const textInput = this.state.textInput;
    const typePart = '&type=';
    const pagePart = '&page=';
    const completeURL = `${url}${textInput}${typePart}${'movie'}${pagePart}${this.state.selectedPage - 1}`;
    this.fetchOMDbData(completeURL, (movies) => {
      this.setState({
        movies: movies.Search,
        selectedPage: this.state.selectedPage - 1
      });
    });
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <SearchBar onSearching={this.searchMovies} />
              {this.state.isLoading && <LoadingBar/>}
              <MovieList
                movies={this.state.movies}
                onMovieClick={this.doDetailedSearch }
              />
              <Pager
                onPreviousButtonClick={this.browsePreviousPage}
                onNextButtonClick={this.browseNextPage}  
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