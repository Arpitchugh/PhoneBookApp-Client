import React, { useState } from 'react';
import axios from 'axios';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './Form.css';

export function Form() {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');

	const submitHandler = (e) => {
		e.preventDefault();

		axios
			.post('http://localhost:8000/v1/contact/add', {
				firstName: firstName,
				lastName: lastName,
				phone: phone.toString(),
				email: email,
			})
			.then((data) => {
				console.log(data);
			});
	};

	return (
		<form
			noValidate
			autoComplete="off"
			className="form hidden"
			onSubmit={submitHandler}
		>
			<TextField
				className="text-field"
				label="First Name"
				type="text"
				variant="outlined"
				required
				onChange={(e) => setFirstName(e.target.value)}
			/>
			<TextField
				className="text-field"
				label="Last Name"
				type="text"
				variant="outlined"
				required
				onChange={(e) => setLastName(e.target.value)}
			/>
			<TextField
				className="text-field"
				label="Phone Number"
				type="number"
				variant="outlined"
				required
				onChange={(e) => setPhone(e.target.value)}
			/>
			<TextField
				className="text-field"
				label="Email"
				type="email"
				variant="outlined"
				onChange={(e) => setEmail(e.target.value)}
			/>

			<Button
				type="submit"
				variant="contained"
				color="primary"
				className="save-button"
			>
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
			<Button className="ps" onClick={formHandler}>
				<i className="fas fa-bars ps" />
			</Button>
		</div>
	);
}
