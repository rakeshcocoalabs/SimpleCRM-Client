import './App.css';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import AddContract from './AddContract';
import MarerialUIDrawer from './drawer';
import { BrowserRouter, Route, Switch }
	from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<h1 style={{ color: '#323576' }}>Company Name</h1>
			<BrowserRouter>
				<MarerialUIDrawer />
				<Switch>
					<Route exact path='/' render=
						{props => <Home {...props} />} />
					<Route exact path='/about' render=
						{props => <About {...props} />} />
					<Route exact path='/contact' render=
						{props => <Contact {...props} />} />
					<Route exact path='/add-contract' render=
						{props => <AddContract {...props} />} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
