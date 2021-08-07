import axios from 'axios';

export const ADD_TO_CART = 'code-immersives/add_to_cart';
export const LOG_IN = 'code-immersives/logIn';
export const CALL_API = 'code-immersives/callApi';

export const addToCartActionCreator = (item) => {
	return {
		type: ADD_TO_CART,
		payload: {
			newItem: item,
		},
	};
};

export const logInActionCreator = (authorizedUser) => {
	return {
		type: LOG_IN,
		payload: {
			username: authorizedUser.username,
			password: authorizedUser.password,
		},
	};
};

export const callApiActionCreator = (fact) => async (dispatch, getState) => {
	let fact;

	try {
		let response = await axios.get(
			'https://catfact.ninja/fact?max_length=140'
		);

		fact = response.data.fact;
	} catch (error) {
		console.log(error);
	}

	dispatch({
		type: CALL_API,
		payload: {
			fact,
		},
	});
};
