import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';

const MovieForm = props => {
	const renderError = ({ error, touched }) => {
		if (touched && error) {
			return (
				<div className="ui error message">
					<div className="header">{error}</div>
				</div>
			);
		}
	}

	const renderInput = ({ input, label, meta }) => { // formProps -> formProps.input
		const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
		return (
			<div className={className}>
				<label>{label}</label>
				<input {...input} autoComplete="off"/>
				{renderError(meta)}
			</div>
		);
	}

	const renderActors = ({ fields }) => {
		return (
			<div>
				<button type="button" className="ui button positive" onClick={() => fields.push({})}>Add Actor</button>
				<br />
				{fields.map((actor, index) =>
					<div key={index}>
						<h4>Actor #{index + 1}</h4>
						<button
							type="button"
							className="ui tiny button negative "
							title="Remove Actor"
							onClick={() => fields.remove(index)}>
							Delete Actor
						</button>
						<br />
						<Field
							name={`${actor}.fullName`}
							type="text"
							component={renderInput}
							label="Full Name"
						/>
					</div>
				)}
			</div>
		);
	}

	const onSubmit = (formValues) => {
		props.onSubmit(formValues);
	}

	return (
		<form onSubmit={props.handleSubmit(onSubmit)} className="ui form error">
			<Field name="title" component={renderInput} label="Enter Title"/>
			<Field name="tagline" component={renderInput} label="Enter Tagline"/>
			<Field name="description" component={renderInput} label="Enter Description"/>
			<Field name="release_date" component={renderInput} label="Enter Release Date"/>
			<FieldArray name="actors" component={renderActors} label="Enter Actor Names" />
			<br />
			<button className="ui button primary">Submit</button>
		</form>
	);
}

const validate = formValues => {
	const errors = {};

	if (!formValues.title) {
		errors.title = 'Enter title is required';
	}

	if (!formValues.tagline) {
		errors.tagline = 'Enter tagline is required';
	}

	if (!formValues.description) {
		errors.description = 'Enter description is required'
	}

	if (!formValues.release_date) {
		errors.release_date = 'Enter release date is required';
	}

	if (!formValues.actors) {
		errors.actors = 'Enter actors is required';
	}

	return errors;
};

export default reduxForm({
	form: 'movieForm',
	validate
})(MovieForm);