import './App.css';
import { Provider } from 'react-redux';
import { reduxStore } from './store/redux-store';
import DisplayItems from './DisplayItems/DisplayItems';
import ShoppingCart from './ShoppingCart/ShoppingCart';

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
