import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import MoviesAdd from './Movies/MoviesAdd';
import MoviesEdit from './Movies/MoviesEdit';
import MoviesDelete from './Movies/MoviesDelete';
import MoviesList from './Movies/MoviesList';
import MovieShow from './Movies/MoviesShow';
import Header from './Header';
import history from '../history';

const App = () => {
	return (
		<div className="ui container">
			<Router history={history}>
				<div>
					<Header />
					<Switch>
						<Route path="/" exact component={MoviesList} />
						<Route path="/movies/add" exact component={MoviesAdd} />
						<Route path="/movies/edit/:id" exact component={MoviesEdit} />
						<Route path="/movies/delete/:id" exact component={MoviesDelete} />
						<Route path="/movies/:id" exact component={MovieShow} />
					</Switch>
				</div>
			</Router>
		</div>
	);
};

export default App;