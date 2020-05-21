import React, { useState, useEffect } from 'react';
import MovieInfo from './MovieInfo';
import MoviesList from './MoviesList';

const MainFrame = (props) => {

    const [movieInfo, setMovieInfo] = useState('');

	useEffect( () => {
        async function fetchMovieInfo() {
            await fetch(`https://www.omdbapi.com/?i=${props.id}&plot=full${process.env.REACT_APP_API_KEY}`)
                .then(response => response.json())
                .then(result => setMovieInfo(result));
        }

        if(props.view === 'single')
            fetchMovieInfo();
                
    }, [props.view, props.id]);
    

    //There is a movie/s information
    if(props.data.Response === "True")
    {
        if(props.view === 'blog')
            return (
                <MoviesList movies={props.data.Search} currentPage={props.currentPage} setCurrentPage={props.setCurrentPage} setView={props.setView} setId={props.setId}/>
            );

            if(props.view === 'single')
            {
                return <MovieInfo movie={movieInfo} setView={props.setView} />;
            }
    }      
    //No movie was found
    else if(props.data.Response === 'False'){
        return(
            <h5>We couldn't find a movie with that name.</h5>
        );
    }
    else //First search / Empty string search / There is no answer from the API Search
        return (
            <div>
                <h5>Movie informations will show up here.</h5>
            </div>
        );

}

export default MainFrame;