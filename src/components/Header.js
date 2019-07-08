import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className="ui secondary pointing menu">
			<Link to="/" className="item">
				<h1>Movie Catalog</h1>
			</Link>
		</div>
	);
};

export default Header;