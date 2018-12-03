import React from 'react';

const Button = ({ type = 'submit', onClick, disabled = false, children }) => (
	<button type={type} disabled={disabled} onClick={onClick}>{children}</button>
);

export default Button;
