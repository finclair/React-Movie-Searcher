import React from 'react';
import MovieListItem from './movie_item';

const MovieList = (props) => {
    
    //console.log(props.onMovieClick);

    if (!props.movies.length) {
        return null;
    }

    const movieItems = props.movies.map((movie) => {
        return (
            <MovieListItem
                onMovieClick={props.onMovieClick}
                key={movie.imdbID}
                movie={movie}
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