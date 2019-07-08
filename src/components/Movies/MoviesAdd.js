import React from 'react';
import { useDispatch } from 'react-redux';

import MoviesForm from './MoviesForm';
import { addMovie } from "../../actions";

const MoviesAdd = () => {
	const dispatch = useDispatch();
	const onSubmit = formValues => dispatch(addMovie(formValues));
	
	return (
		<div>
			<h3>Add a movie</h3>
			<MoviesForm onSubmit={onSubmit}/>
		</div>
	);
	
}

export default MoviesAdd;