import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchMovie } from "../../actions";

const MoviesShow = props => {
	const { id } = props.match.params;
	const movie = useSelector(state => state.movie);	
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchMovie(id));
	}, []);

	const renderActors = () => {
		const arrActors = actors.map(actor => actor.fullName);
		return arrActors.map((actor, index) => {
			if (index !== actors.length - 1) {
				return `${actor}, `;
			}
			return actor;
		});
	}

	if (!movie) {
		return <div>Loading...</div>
	}

	const { title, tagline, description, release_date, actors } = movie;

	return (
		<div>
			<h1>{title} ({release_date})</h1>
			<h3><i>{tagline}</i></h3>
			<h4>Summary:</h4><p>{description}</p>
			<h4>Starring:</h4> <span>{renderActors()}</span>
		</div>
	);
	

}

export default MoviesShow;