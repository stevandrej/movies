import React, { useState, useEffect, useRef } from 'react';
import "./style.css";
import Filters from './components/Filters';
import Search from './components/Search';
import LatestMovies from './components/LatestMovies';
import MainFrame from './components/MainFrame';
import CircularProgress from '@material-ui/core/CircularProgress';


const App = () => {

	const [movies, setMovies] = useState('');
	const [search, setSearch] = useState('');
	const [currentPage, setCurrentPage] = useState(1);
	const [view, setView] = useState('blog');
	const [id, setId] = useState('');

	const [isLoadingBlogView, setLoadingBlogView] = useState(false);
	const [isLoadingSingleView, setLoadingSingleView] = useState(false);

	const isFirstRun = useRef(true);

	useEffect(() => {
		if (isFirstRun.current) {
			isFirstRun.current = false;
			return;
		}
		setLoadingBlogView(true);
		async function fetchMovies() {
			await fetch(`https://www.omdbapi.com/?s=${search}&plot=full${process.env.REACT_APP_API_KEY}`)
				.then(response => response.json() )
				.then(result => {
					setLoadingBlogView(false)
					setMovies(result)
				});
		}

		if(search !== '')
		{
			fetchMovies();
		}
		else{
			setMovies('');
			setLoadingBlogView(false);
		}
		
		setMovies('');
		setCurrentPage(1);
		setView('blog');
		setId('');

	}, [search]);


	const [movieInfo, setMovieInfo] = useState('');

	useEffect( () => {

		setLoadingSingleView(true);
        async function fetchMovieInfo() {
            await fetch(`https://www.omdbapi.com/?i=${id}&plot=full${process.env.REACT_APP_API_KEY}`)
                .then(response => response.json() )
				.then(result => {
					setLoadingSingleView(false)
					setMovieInfo(result)
				});
		}

        if(view === 'single')
            {
				fetchMovieInfo();
			}
			
		setMovieInfo('');
                
	}, [view, id]);


	let toggleMM = false;
	const menuViewMobile = () => {
			
		toggleMM = !toggleMM;

		if (toggleMM)
		document.querySelector('.mobile-menu').className='mobile-menu mobile-menu--active';
		else
		document.querySelector('.mobile-menu').className='mobile-menu';
	}


	return (
		<React.Fragment>
			<div className="bgImg" style={
				{
					backgroundImage: (view !== 'blog' && movieInfo !== '' && movieInfo.hasOwnProperty('Poster') && movieInfo.Poster !== '' && movieInfo.Poster !== 'N/A'  && movieInfo.Response !== 'False') ? `url(${movieInfo.Poster})` : `url('img/cinema.jpg')`
				}
			}></div>

			{/* Mobile MENU */}
			<div className="mobile-menu">
				<div className="mobile-menu-container">
					<div className="logo-container">
							<img src='./img/logo-movie.png' alt="logo" className="logo" />
					</div>
					<Filters />
				</div>
				<div className="toggle-menu" onClick={menuViewMobile}>
					<div className="toggle-menu__lines"></div>
				</div>
			</div>

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
							{isLoadingBlogView ? <CircularProgress color="secondary" /> : <MainFrame isLoadingSingleView={isLoadingSingleView} data={movies} movieInfo={movieInfo} currentPage={currentPage} setCurrentPage={setCurrentPage} setView={setView} view={view} setId={setId} id={id} />}
						</main>

						<div className="latest_movies">
							<LatestMovies />
						</div>
					</div>
				</div>

			</div>
		</React.Fragment>
	);
}

export default App;