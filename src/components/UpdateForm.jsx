import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './Form.css';

export function UpdateForm() {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');

	const { id } = useParams();

	useEffect(() => {
		axios.get(`http://localhost:8000/v1/contact/get-one/${id}`).then((data) => {
			setFirstName(data.data.data.firstName);
			setLastName(data.data.data.lastName);
			setPhone(data.data.data.phone);
			setEmail(data.data.data.email);
		});
	}, [id]);

	const submitHandler = (e) => {
		e.preventDefault();

		axios
			.post('http://localhost:8000/v1/contact/add', {
				firstName: firstName,
				lastName: lastName,
				phone: phone.toString(),
				email: email,
			})
			.then(() => {
				setFirstName('');
				setLastName('');
				setPhone('');
				setEmail('');
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
				value={firstName}
				onChange={(e) => setFirstName(e.target.value)}
			/>
			<TextField
				className="text-field"
				label="Last Name"
				type="text"
				variant="outlined"
				required
				value={lastName}
				onChange={(e) => setLastName(e.target.value)}
			/>
			<TextField
				className="text-field"
				label="Phone Number"
				type="number"
				variant="outlined"
				required
				value={phone}
				onChange={(e) => setPhone(e.target.value)}
			/>
			<TextField
				className="text-field"
				label="Email"
				type="email"
				variant="outlined"
				value={email}
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
