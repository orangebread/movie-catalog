import movies from './apis/movies';
import history from './history';
import {
	ADD_MOVIE,
	DELETE_MOVIE,
	EDIT_MOVIE,
	FETCH_MOVIE,
	FETCH_MOVIES
} from "./types";

export const addMovie = formValues => async dispatch => {
	const response = await movies.post('/movies', { ...formValues });
	dispatch({ type: ADD_MOVIE, payload: response.data });
	history.push('/');
};

export const fetchMovies = () => async (dispatch) => {
	const response = await movies.get('/movies');
	dispatch({ type: FETCH_MOVIES, payload: response.data });
};

export const fetchMovie = id => async (dispatch) => {
	const response = await movies.get(`/movies/${id}`);
	dispatch({ type: FETCH_MOVIE, payload: response.data });
};


export const editMovie = (id, formValues) => async (dispatch) => {
	console.log('editMovie', formValues);
	const response = await movies.put(`/movies/${id}`, formValues);
	dispatch({ type: EDIT_MOVIE, payload: response.data });
	history.push('/');
};

export const deleteMovie = id => async (dispatch) => {
	await movies.delete(`/movies/${id}`);
	dispatch({ type: DELETE_MOVIE, payload: id });
	history.push('/');
};