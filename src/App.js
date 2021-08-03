import './App.css';
import { Provider } from 'react-redux';
import { reduxStore } from './store/redux-store';
import ShoppingCart from './ShoppingCart/DisplayItems';

function App() {
	return (
		<>
			<Provider store={reduxStore}>
				<div className='App'>
					<ShoppingCart />
				</div>
			</Provider>
		</>
	);
}

export default App;
