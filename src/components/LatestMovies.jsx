import React from 'react';
import './latestMovies.scss';

const LatestMovies = (props) => {

    return (
        <>
            <h3 className="latest_movies__heading">Latest Movies</h3>
            <ul className="latest_movies__list">
                <li className="latest_movies__item">
                    <div className="latest_movies__item-left">
                        <img className="latest_movies__item__img" src="/img/bad-boys-forlife.jpg" alt="movie cover" />
                    </div>
                    <div className="latest_movies__item-right">
                        <h4 className="latest_movies__item__title" >Bad boys for life</h4>
                        <p className="latest_movies__item__rating">Rated R</p>
                        <p className="latest_movies__item__genre">Comedy/Action</p>
                    </div>
                </li>

                <li className="latest_movies__item">
                    <div className="latest_movies__item-left">
                        <img className="latest_movies__item__img" src="/img/harley-queen.jpg" alt="movie cover" />
                    </div>
                    <div className="latest_movies__item-right">
                        <h4 className="latest_movies__item__title" >Harley Quinn: Birds of Prey</h4>
                        <p className="latest_movies__item__rating">Rated R</p>
                        <p className="latest_movies__item__genre">Action/Superhero</p>
                    </div>
                </li>

                <li className="latest_movies__item">
                    <div className="latest_movies__item-left">
                        <img className="latest_movies__item__img" src="/img/sonic.jpg" alt="movie cover" />
                    </div>
                    <div className="latest_movies__item-right">
                        <h4 className="latest_movies__item__title" >Sonic the Hedgehog</h4>
                        <p className="latest_movies__item__rating">Rated R</p>
                        <p className="latest_movies__item__genre">Adventure/Family</p>
                    </div>
                </li>

                <li className="latest_movies__item">
                    <div className="latest_movies__item-left">
                        <img className="latest_movies__item__img" src="/img/bloodshot.jpg" alt="movie cover" />
                    </div>
                    <div className="latest_movies__item-right">
                        <h4 className="latest_movies__item__title" >Bloodshot</h4>
                        <p className="latest_movies__item__rating">Rated PG-13</p>
                        <p className="latest_movies__item__genre">Action/Adventure</p>
                    </div>
                </li>

                <li className="latest_movies__item">
                    <div className="latest_movies__item-left">
                        <img className="latest_movies__item__img" src="../img/onward.jpg" alt="movie cover" />
                    </div>
                    <div className="latest_movies__item-right">
                        <h4 className="latest_movies__item__title" >Onward</h4>
                        <p className="latest_movies__item__rating">Rated PG</p>
                        <p className="latest_movies__item__genre">Family/Animation</p>
                    </div>
                </li>
            </ul>
        </>
    );
}

export default LatestMovies;