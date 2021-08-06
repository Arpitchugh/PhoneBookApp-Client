import CssBaseline from '@material-ui/core/CssBaseline';

// import HamButton from './components/HamButton';
import List from './components/List';
import { Form, Hamburger } from './components/Form';

function App() {
	return (
		<div className="App">
			<CssBaseline />
			<Hamburger />
			<Form />
			{/* <HamButton /> */}
			<List />
		</div>
	);
}

export default App;
