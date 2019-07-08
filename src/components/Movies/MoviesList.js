import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { fetchMovies } from "../../actions";

const MoviesList = () => {
	const movies = useSelector(state => state.movies);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchMovies());
	}, []);
	
	const renderAdmin = (movie) => {
		return (
			<div className="right floated content">
				<Link to={`/movies/edit/${movie.id}`} className="ui button primary">EDIT</Link>
				<Link to={`/movies/delete/${movie.id}`} className="ui button negative">DELETE</Link>
			</div>
		);
	}

	const renderCreate = () => {
		return (
			<div>
				<Link to="/movies/add" className="ui button primary">Add Movie</Link>
			</div>
		);
	}

	const renderList = () => {
		return movies.map(movie => {
			return (
				<div className="item" key={movie.id}>
					{renderAdmin(movie)}
					<i className="large middle aligned icon tv"/>
					<div className="content">
						<h3><Link to={`/movies/${movie.id}`} className="headers">{movie.title}</Link></h3>
						<div className="description">{movie.tagline}</div>
					</div>
				</div>
			);
		});
	}

	if (!movies) {
		return <div>Loading...</div>
	}

	return (
		<div>
			<div className="ui celled list">
				{renderList()}
			</div>
			{renderCreate()}
		</div>
	);

}

export default MoviesList;