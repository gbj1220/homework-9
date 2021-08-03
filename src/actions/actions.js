export const ADD_TO_CART = 'code-immersives/add_to_cart';

export const addToCartActionCreator = (item) => {
	return {
		type: ADD_TO_CART,
		payload: {
			newItem: item,
		},
	};
};
