import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
} from '@material-ui/core/';

import './List.css';

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
});

function List({ submit, setSubmit }) {
	const classes = useStyles();

	const [response, setResponse] = useState([]);

	useEffect(() => {
		axios.get(`http://localhost:8000/v1/contact/get-all`).then((data) => {
			setResponse(data.data.data);
			setSubmit(false);
		});
	}, [submit]);

	const deleteHandler = (id) => {
		return (e) => {
			e.preventDefault();

			axios
				.delete(`http://localhost:8000/v1/contact/delete/${id}`)
				.then((data) => {
					setSubmit(true);
					window.location = '/';
				});
		};
	};

	return (
		<TableContainer className="table" component={Paper}>
			<Table className={classes.table} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>Name</TableCell>

						<TableCell align="right">Phone Number</TableCell>

						<TableCell align="right">Email</TableCell>
					</TableRow>
				</TableHead>

				<TableBody>
					{response.map((phone) => (
						<TableRow key={phone._id}>
							<TableCell component="th" scope="row">
								{phone.firstName} {phone.lastName}
							</TableCell>
							<TableCell align="right">{phone.phone}</TableCell>

							<TableCell align="right">
								{phone.email ? phone.email : 'N/A'}
							</TableCell>

							<TableCell className="icons" align="right">
								<form
									onSubmit={deleteHandler(phone._id)}
									className="icons__form"
								>
									<Button className="icons__btn" type="submit" color="primary">
										<DeleteIcon className="icons__icon" />
									</Button>
								</form>
								<Link className="icons__form" to={`/update/${phone._id}`}>
									<Button className="icons__btn" type="submit" color="primary">
										<EditIcon className="icons__icon" />
									</Button>
								</Link>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

export default List;
