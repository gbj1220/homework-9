import './App.css';
import { Provider } from 'react-redux';
import { reduxStore } from './store/redux-store';
import DisplayItems from './ShoppingCart/DisplayItems';
import ShoppingCart from './ShoppingCart/DisplayItems';

function App() {
	return (
		<>
			<Provider store={reduxStore}>
				<div className='App'>
					<div className='display-items'>
						<DisplayItems />
					</div>
					<div className='shopping-cart'>
						<ShoppingCart />
					</div>
				</div>
			</Provider>
		</>
	);
}

export default App;
