import { createStore, compose, applyMiddleware } from 'redux';
import { reducer } from '../reducer/reducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
	shoppingCart: {
		items: [],
	},
	users: [],
	catFact: '',
};

export const reduxStore = createStore(
	reducer,
	initialState,
	composeEnhancers(applyMiddleware(thunk))
);
