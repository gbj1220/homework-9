import { LOG_IN, ADD_TO_CART, CALL_API } from '../actions/actions';

export const reducer = (state, action) => {
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

		case LOG_IN:
			return {
				...state,
				users: {
					...state.users,
					id: action.payload.id,
					username: action.payload.username,
					password: action.payload.password,
				},
			};

		case CALL_API:
			return {
				...state,
				catFact: {
					fact: [action.payload.fact],
				},
			};
		default:
			return state;
	}
};
