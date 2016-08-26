import React from 'react';

const MovieInfo = (props) => {

    if (!props.movie) {
        return <div>Loading..</div>
    }

    console.log(props.movie);
    const movie = props.movie;

    const movieID = movie.imdbID;
    //ToDo: should the baseurl http://www.omdbapi.com/?t= be here?

    return (

        <div className="col-md-5">
            <div className="movie-info">
                <article>
                    <h2 className="title-of-movie">{movie.Title}</h2>
                    <h4 className="year-of-movie">{movie.Year}</h4>
                </article>
            </div>
            <img className="movie-image" src={movie.Poster}/>
        </div>
  );
};

export default MovieInfo;