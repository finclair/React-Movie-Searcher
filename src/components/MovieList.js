import React from 'react';
import MovieListItem from './MovieItem';

const MovieList = (props) => {

    if (!props.movies || !props.movies.length) {
        return null;
    }

    const movieItems = props.movies.map((movie) => {
        return (
            <MovieListItem
                onMovieClick={props.onMovieClick}
                key={movie.imdbID}
                movie={movie}
                selectedMovie={props.selectedMovie}
            />
        );
    });

    return (
      <div className="list-group">
          {movieItems}
      </div>
    );
};

export default MovieList;