import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchStreams } from "../../actions";

class StreamList extends Component {
	componentDidMount() {
		this.props.fetchStreams();
	}

	renderAdmin(stream) {
		if (stream.userId === this.props.currentUserId) {
			return (
				<div className="right floated content">
					<Link to={`/streams/edit/${stream.id}`} className="ui button primary">EDIT</Link>
					<Link to={`/streams/delete/${stream.id}`} className="ui button negative">DELETE</Link>
				</div>
			);
		}
	}

	renderCreate() {
		if (this.props.isSignedIn) {
			return (
				<div>
					<Link to="/streams/new" className="ui button primary">Create Stream</Link>
				</div>
			);
		}
	}

	renderList() {
		return this.props.streams.map( stream => {
			return (
				<div className="item" key={stream.id}>
					{this.renderAdmin(stream)}
					<i className="large middle aligned icon camera"/>
					<div className="content">
						<h3><Link to={`/streams/${stream.id}`} className="headers">{stream.title}</Link></h3>
						<div className="description">{stream.description}</div>
					</div>
				</div>
			);
		});
	}

	render() {
		return (
			<div>
				<h2>Streams</h2>
				<div className="ui celled list">
					{this.renderList()}
				</div>
				{this.renderCreate()}
			</div>
		);
	};

}

const mapStateToProps = state => {
	return {
		streams: Object.values(state.streams),
		currentUserId: state.auth.userId,
		isSignedIn: state.auth.isSignedIn
	};
}

export default connect(mapStateToProps, { fetchStreams })(StreamList);