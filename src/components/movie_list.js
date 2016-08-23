import React from 'react';
import MovieListItem from './movie_item';

const MovieList = (props) => {

    if (!props.movies.length) {
        return null;
    }

    const movieItems = props.movies.map((movie) => {
        return <MovieListItem key={movie.imdbID} movie={movie} />
    });

    return (
      <ul className="col-md-12 list-group">
          {movieItems}
      </ul>
    );
};

export default MovieList;