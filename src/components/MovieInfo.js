import React from 'react';

const MovieInfo = (props) => {

    if (!props.movie) {
        return null;
    }

    const movie = props.movie;

    return (

        <div className="col-md-5">
            <div className="movie-info">
                <article>
                    <h2 className="title-of-movie">{movie.Title}</h2>
                    <h4 className="year-of-movie">{movie.Year}</h4>
                    <p className="rate-of-movie">{movie.Rated}</p>
                    <p className="director-of-movie">{movie.Director}</p>
                    <p className="actors-of-movie">{movie.Actors}</p>
                    <p>IMDb Rank: <span className="imdb-rate-of-movie label label-info">{movie.imdbRating}</span></p>
                    <p className="votes-of-movie">Votes in IMDb: {movie.imdbVotes}</p>
                    <p className="oscars-of-movie">{movie.Awards}</p>
                    <p className="plot-of-movie">{movie.Plot}</p>
                </article>
            </div>
            <img className="movie-image" src={movie.Poster}/>
        </div>
  );
};

export default MovieInfo;