import './App.css';
import { Provider } from 'react-redux';
import { reduxStore } from './store/redux-store';
import DisplayItems from './DisplayItems/DisplayItems';
import SignIn from './SignIn/SignIn';
import CatFact from './CatFact/CatFact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<>
			<Router>
				<Provider store={reduxStore}>
					<Switch>
						<Route path='/login'>
							<SignIn />
						</Route>
						<Route path='/'>
							<DisplayItems />
						</Route>
						<Route path='/home'>
							<CatFact />
						</Route>
					</Switch>
				</Provider>
			</Router>
		</>
	);
}

export default App;
