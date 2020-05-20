import React from 'react';
import './movieInfo.scss';

const MovieInfo = (props) => {

    //Check if there is a cover image for the movie
    let Poster;
    (props.movie.Poster === '' || props.movie.Poster === 'N/A') ? Poster = 'img/no-image.jpg' : Poster = props.movie.Poster ;

    //Check if there is a Rating for the movie
    if (props.movie) {

        let Rating;
        try{
            Rating = props.movie.Ratings[0].Value;
        }
        catch(e){
            Rating = 'N/A';
        }

        //Check if there are actors in the API response
        let actorsList = [];
        props.movie.Actors !== '' ? 
            actorsList = props.movie.Actors.split(', ') : actorsList.push('There are no actors in our database for this movie');

        //RENDER UI
        return (
            <div className="movie" data-itemid={props.movie.imdbID}>
                <div className="movie__img">
                    <img src={Poster} alt={props.movie.Title} />
                </div>

                <div className="movie__content">
                    <div className="movie__content__title">
                        <h2 className="movie__content__title--title">{props.movie.Title}</h2>
                        <h3 className="movie__content__title--year">{props.movie.Year}</h3>
                    </div>

                    <hr />

                    <div className="movie__content__info">
                        <p className="movie__content__info--rated">Rated: {props.movie.Rated}</p>
                        <p className="movie__content__info--genres">{props.movie.Genre}</p>
                        <p className="movie__content__info--rating">Rating: {Rating}</p>
                    </div>

                    <hr />

                    <div className="movie__content__desc">
                        <h4>Plot:</h4>
                        <p>
                            {props.movie.Plot}
                        </p>
                    </div>

                    <hr />

                    <div className="movie__content__cast">
                        <h4>Main cast:</h4>
                        <ul className="movie__content__cast-list">
                            {
                                actorsList.map((actor, index) => {
                                    return <li className="movie__content__cast--item" key={`actor_${index}`}>{actor}</li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
    else {
        return (
            <div>
                <h5>Movie informations will show up here.</h5>
            </div>
        );
    }
}

export default MovieInfo;