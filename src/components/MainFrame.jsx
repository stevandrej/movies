import React from 'react';
import MovieInfo from './MovieInfo';
import MoviesList from './MoviesList';

const MainFrame = (props) => {
    
    //There is a movie
    if(props.data.Response === "True")

    //    return <MovieInfo movie={props.data}/>;
        return (
            <MoviesList movies={props.data.Search} currentPage={props.currentPage} setCurrentPage={props.setCurrentPage}/>
        );

    //No movie was found
        else if(props.data.Response === 'False'){
            return(
            <h5>We couldn't find a movie with that name.</h5>
            );
        }
        else{
            
        //First search / Empty string search / There is no answer from the API Search
        return (
            <div>
                <h5>Movie informations will show up here.</h5>
            </div>
        );}
}

export default MainFrame;