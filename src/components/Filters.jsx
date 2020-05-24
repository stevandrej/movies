import React from 'react';

const Filters = (props) => {
    
    return(
        <React.Fragment>
            <h5 className="filter-type">Genres</h5>
            <ul className="filters">
                <li className="filters__item">New movies</li>
                <li className="filters__item">Action</li>
                <li className="filters__item">Documentary</li>
                <li className="filters__item">Comedy</li>
                <li className="filters__item">Family</li>
                <li className="filters__item">Horror</li>
                <li className="filters__item">War</li>
            </ul>
        
            <h5 className="filter-type">Rated</h5>
            <ul className="filters">
                <li className="filters__item">G</li>
                <li className="filters__item">R</li>
                <li className="filters__item">PG</li>
                <li className="filters__item">PG-13</li>
            </ul>
        </React.Fragment>
    );
}

export default Filters;