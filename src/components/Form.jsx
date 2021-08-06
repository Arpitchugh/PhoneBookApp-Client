import React from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './Form.css';

export function Form() {
	return (
		<form noValidate autoComplete="off" className="form hidden">
			<TextField
				className="text-field"
				label="First Name"
				type="text"
				variant="outlined"
				required
			/>
			<TextField
				className="text-field"
				label="Last Name"
				type="text"
				variant="outlined"
			/>
			<TextField
				className="text-field"
				label="Phone Number"
				type="phoneNumber"
				variant="outlined"
				required
			/>
			<TextField
				className="text-field"
				label="Email"
				type="email"
				variant="outlined"
			/>
			<Button variant="contained" color="primary" className="save-button">
				Save
			</Button>
		</form>
	);
}

export function Hamburger() {
	const formHandler = () => {
		document.querySelector('.form').classList.toggle('hidden');
	};

	return (
		<div>
			<Button className="ps"  onClick={formHandler}>
				<i className="fas fa-bars ps" />
			</Button>
		</div>
	);
}
