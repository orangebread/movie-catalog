import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { deleteMovie } from "../../actions";
import Modal from '../Modal';
import history from '../../history';


const MoviesDelete = props => {
	const { id } = props.match.params;
	const movie = useSelector(state => state.movie);
	const dispatch = useDispatch();
	const deleteMovieHandler = id => dispatch(deleteMovie(id));

	const renderActions = () => {
		return (
			<React.Fragment>
				<button onClick={() => deleteMovieHandler(id)} className="ui button negative">Delete</button>
				<Link to="/" className="ui button">Cancel</Link>
			</React.Fragment>
		);
	}

	const renderContent = () => {
		if (!movie) {
			return 'Are you sure you want to delete this movie?'
		}
		return `Are you sure you want to movie the stream with title: ${movie.title}`;
	}

	return (
		<Modal
			title="Delete Movie"
			content={renderContent()}
			actions={renderActions()}
			onDismiss={() => history.push('/')}
		/>
	);

}

export default MoviesDelete;