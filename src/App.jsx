import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { UpdateForm } from './components/UpdateForm';
import List from './components/List';
import { Form, Hamburger } from './components/Form';

function App() {
	const [submit, setSubmit] = useState(false);

	return (
		<>
			<CssBaseline />
			<Router>
				<Switch>
					<Route path="/" exact>
						<Hamburger />
						<Form setSubmit={setSubmit} />
						<List setSubmit={setSubmit} submit={submit} />
					</Route>

					<Route path="/update/:id" exact>
						<Hamburger />
						<UpdateForm setSubmit={setSubmit} />
						<List setSubmit={setSubmit} submit={submit} />
					</Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;
