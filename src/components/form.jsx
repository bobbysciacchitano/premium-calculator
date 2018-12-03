import React from 'react';

const handleSubmit = (e, onSubmit) => {
	e.preventDefault();

	onSubmit();
};

const Form = ({ onSubmit, children }) => (
	<form onSubmit={(e) => handleSubmit(e, onSubmit)}>
		{children}
	</form>
);

export default Form;
