import { ADD_TO_CART } from '../actions/actions';

export const reducer = (state, action) => {
	console.log(`======state======`);
	console.log(state);

	switch (action.type) {
		case ADD_TO_CART:
			const newItem = action.payload.newItem;
			return {
				...state,
				shoppingCart: {
					...state.shoppingCart,
					items: [...state.shoppingCart.items, newItem],
				},
			};
		default:
			return state;
	}
};
