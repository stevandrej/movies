import React, { useState } from "react";

const Search = (props) => {
    const [search, setSearch] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleSearch(search);
    }

    return(
        <>
        <form className="searchbar" onSubmit={handleSubmit} spellCheck='false'>
            <input onChange={(e) => {setSearch(e.target.value)}} value={search} className="searchbar__field" type="text" placeholder="Search for movie..."/>
        </form>
        </>
    );
}

export default Search;