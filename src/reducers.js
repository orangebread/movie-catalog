import { combineReducers} from "redux";
import { reducer as formReducer } from 'redux-form';
import _ from 'lodash';

import {
	ADD_MOVIE,
	DELETE_MOVIE,
	EDIT_MOVIE,
	FETCH_MOVIE,
	FETCH_MOVIES
} from "./types";

const moviesReducer = (state = [], action) => {
	switch (action.type) {
		case FETCH_MOVIES:
			return action.payload.movies;
		case ADD_MOVIE:
			return [...state, action.payload];
		case EDIT_MOVIE:
			return [...state, action.payload];
		case DELETE_MOVIE:
			return state.filter(obj => {
				return obj.id == action.payload;
			});
			
		default:
			return state;
	}
}

const movieReducer = (state = null, action) => {
	switch (action.type) {
		case FETCH_MOVIE:
			return action.payload.movie;
		default:
			return state;
	}
}

export default combineReducers({
	form: formReducer,
	movies: moviesReducer,
	movie: movieReducer
});