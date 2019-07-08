import _ from 'lodash';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import MovieForm from './MoviesForm';
import { fetchMovie, editMovie } from "../../actions";

const MoviesEdit = props => {
	const { id } = props.match.params;
	const movie = useSelector(state => state.movie);
	const dispatch = useDispatch();
	const onSubmit = formValues => dispatch(editMovie(id, formValues));
	useEffect(() => {
		dispatch(fetchMovie(id));
	}, []);

	if (!movie) {
		return <div>Loading...</div>
	}

	return (
		<div>
			<h3>Edit Movie</h3>
			<MovieForm
				initialValues={_.pick(movie, 'title', 'tagline', 'description', 'release_date', 'actors')}
				onSubmit={onSubmit}/>
		</div>

	);
	
}

export default MoviesEdit;