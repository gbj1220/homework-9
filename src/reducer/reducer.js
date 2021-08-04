import { ADD_TO_CART } from '../actions/actions';

export const reducer = (state, action) => {
	try {
		switch (action.type) {
			case ADD_TO_CART:
				const newItem = action.payload.newItem;
				console.log(state);
				return {
					...state,
					shoppingCart: {
						...state.shoppingCart,
						items: [...state.shoppingCart.items, newItem],
					},
				};
			default:
				console.log('Default case ran');
		}
	} catch (error) {
		console.log(error);
	}
};
