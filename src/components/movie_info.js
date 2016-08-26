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
                    <h2 className={movie.Title}></h2>
                    <h4 className="year-of-movie"></h4>
                    <p><span className="rate-of-movie" class="label label-default"></span></p>
                    <p className="director-of-movie"></p>
                    <p className="actors-of-movie"></p>
                    <p><span className="imdb-rate-of-movǥie"></span></p>
                    <p className="votes-of-movie"></p>
                    <p className="oscars-of-movie"></p>
                    <p className="plot-of-movie"></p>
                </article>
            </div>
            <div className="movie-image"></div>
        </div>
  );
};

export default MovieInfo;