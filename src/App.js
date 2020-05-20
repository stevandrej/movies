import React, { useState, useEffect, useRef } from 'react';
import "./App.scss";
import "./typography.scss";
import Filters from './components/Filters';
import Search from './components/Search';
import LatestMovies from './components/LatestMovies';
import MainFrame from './components/MainFrame';
/* import {useHttp} from './components/http'; */

const App = () => {
	const [movies, setMovies] = useState('');
	const [search, setSearch] = useState('');
	const [currentPage, setCurrentPage] = useState(1);

	//const data = useHttp(`http://www.omdbapi.com/?s=${search}&plot=full&apikey=22b41965`,[search]);

	const isFirstRun = useRef(true);
	useEffect(() => {
		if (isFirstRun.current) {
			isFirstRun.current = false;
			return;
		}
		async function fetchMovie() {
			await fetch(`http://www.omdbapi.com/?s=${search}&plot=full&apikey=22b41965`)
				.then(response => response.json())
				.then(result => setMovies(result));
		}
		search !== '' ? fetchMovie() : setMovies('');
		setCurrentPage(1);

	}, [search]);


	return (
		<>
			<div className="bgImg" style={
				{
					backgroundImage: (movies !== '' && movies.hasOwnProperty('Poster') && movies.Poster !== '' && movies.Poster !== 'N/A'  && movies.Response !== 'False') ? `url(${movies.Poster})` : `url('img/cinema.jpg')`
				}
			}></div>
			<div className="container">

				<div className="side-left">
					<div className="logo-container">
						<img src='./img/logo-movie.png' alt="logo" className="logo" />
					</div>
					<Filters />
				</div>

				<div className="side-right">
					<div className="search">
						<Search handleSearch={setSearch} />
					</div>
					<div className="content">
						<main className="main-frame">
							<MainFrame data={movies} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
{/* 							<MainFrame data={data} />  */}
						</main>

						<div className="latest_movies">
							<LatestMovies />
						</div>
					</div>
				</div>

			</div>
		</>
	);
}

export default App;