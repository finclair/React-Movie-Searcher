import React from 'react';
import MovieListItem from './movie_item';

const MovieList = (props) => {
    console.log(props);

    if (!props.movies.length) {
        return null;
    }

    const movieItems = props.movies.map((movie) => {
        return <MovieListItem movie={movie} />
    });

    return (
      <ul className="col-md-12 list-group">
          {movieItems}
      </ul>
    );
};

export default MovieList;