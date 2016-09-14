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
    this.searchMoviesAutomated = this.searchMoviesAutomated.bind(this);
    this.doDetailedSearch = this.doDetailedSearch.bind(this);
    this.browseNextPage = this.browseNextPage.bind(this);
    this.browsePreviousPage = this.browsePreviousPage.bind(this);

    this.state = {
      movies: [],
      isLoading: false,
      selectedPage: 1,
      textInput: '',
      selectedType: 'movie'
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
    const completeURL = this.generateURL({
      s: searchCriterias.input,
      page: 1,
      type: searchCriterias.searchType
    });
    console.log(completeURL);
    this.fetchOMDbData(completeURL, (movies) => {
      this.setState({
        movies: movies.Search,
        selectedPage: 1,
        textInput: searchCriterias.input,
        selectedType: searchCriterias.searchType
      });
    });
  }

  searchMoviesAutomated(searchCriterias, input) {
    const completeURL = this.generateURL({
      s: input,
      page: 1,
      type: searchCriterias.searchType
    });
    console.log(completeURL);
    this.fetchOMDbData(completeURL, (movies) => {
      this.setState({
        movies: movies.Search,
        selectedPage: 1,
        textInput: searchCriterias.input,
        selectedType: searchCriterias.searchType
      });
    });
  }


  doDetailedSearch(movie) {
    const completeUrl = this.generateURL({
      plot: 'full',
      i: movie.imdbID
    });
    this.fetchOMDbData(completeUrl, (selectedMovie) => {
      this.setState({selectedMovie: selectedMovie});
    });
  }

  browseNextPage() {
    const completeURL = this.generateURL({
      s: this.state.textInput,
      page: this.state.selectedPage + 1,
      type: this.state.selectedType
    });
    this.fetchOMDbData(completeURL, (movies) => {
      this.setState({
        movies: movies.Search,
        selectedPage: this.state.selectedPage + 1
      });
    });
  }

  browsePreviousPage() {
    const completeURL = this.generateURL({
      s: this.state.textInput,
      page: this.state.selectedPage - 1,
      type: this.state.selectedType
    });
    this.fetchOMDbData(completeURL, (movies) => {
      this.setState({
        movies: movies.Search,
        selectedPage: this.state.selectedPage - 1
      });
    });
  }

  generateURL(object) {
    let url = 'http://www.omdbapi.com/';
    Object.keys(object).forEach((key, index) => {
      if (object.hasOwnProperty(key)) {
        let getParameter = `${index === 0 ? '?' : '&'}${key}=${object[key]}`;
        url += getParameter;
      }
    });
    return url;
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <SearchBar 
                onSearching={this.searchMovies} 
                onAutomatedSearching={this.searchMoviesAutomated} 
              />
              {this.state.isLoading && <LoadingBar/>}
              <MovieList
                movies={this.state.movies}
                selectedMovie={this.state.selectedMovie}
                onMovieClick={this.doDetailedSearch}
              />
              <Pager
                selectedPage={this.state.selectedPage}
                onPreviousButtonClick={this.browsePreviousPage}
                onNextButtonClick={this.browseNextPage}
                movies={this.state.movies}
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