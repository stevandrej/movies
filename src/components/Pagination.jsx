import React from 'react';
import "./pagination.scss";

const Pagination = (props) => {
    const pages = [];

    for(let i = 1; i <= props.numPages; i++){
        pages.push(i);
    }

    return(
        <nav className="pagination">
            <ul>
                {pages.map( number => {
                    return (<li key={`page_${number}`} className="pagination-li">
                            <button className="pagination-btn"  onClick={ () => { props.handleClick(number) } }>{number}</button>
                        </li>);
                })}
            </ul>
        </nav>
    );
}

export default Pagination;