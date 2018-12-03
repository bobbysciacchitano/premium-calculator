import React from 'react';

const Input = ({ name, disabled = false, checked = false, pattern, type, value = '', onChange }) => {

	const updateField = ({ target }) => {
		let inputValue = target.value;

		if (type === 'checkbox') {
			inputValue = target.checked;
		}

		if (type === 'radio') {
			inputValue = value;
		}

		onChange(name, inputValue);
	};

	return (
		<input
			name={name}
			type={type}
			pattern={pattern}
			checked={checked}
			disabled={disabled}
			value={value || ''}
			onChange={updateField} />
	);
};

export default Input;
