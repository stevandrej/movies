import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import './moviesList.scss';


const MoviesList = (props) => {

    //props.movies = DATA OF MOVIES
    const perPage = 4;
    const numPages =  Math.ceil(props.movies.length / perPage);
    const indexOfLastPost = props.currentPage * perPage;
    const indexOfFirstPost = indexOfLastPost - perPage;
    const displayData = props.movies.slice(indexOfFirstPost, indexOfLastPost);

    const handleChange = (event, value) => {
        props.setCurrentPage(value);
      };

    return(
        <div className="moviesList">
        <div className="moviesList__container">
            {displayData.map(item => {
                return(
                    <div className="movies__item" data-itemid={item.imdbID} key={`item_${item.imdbID}`} onClick={ () => {props.setId(item.imdbID); props.setView('single');} }>
                        <img src={ (item.Poster==='N/A' || !item.Poster) ? `img/no-image.jpg` : item.Poster} alt={item.Title}  className="movies__item__image"/>
                        <h4>{item.Title}</h4>
                        <h5>{item.Year}</h5>
                    </div>
                )
            })}
        </div>
        
        <div className="pagination">
            <Pagination count={numPages} color="secondary" defaultPage={1} page={props.currentPage} onChange={handleChange}/>
        </div>

        </div>
    );
}

export default MoviesList;