import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../db-mock/dbMock';
import { addToCartActionCreator, ADD_TO_CART } from '../actions/actions';

export default function ShoppingCart() {
	const products = fetchProducts();
	console.log(products);

	return (
		<div>
			{products.map((item) => {
				return (
					<div>
						<button
							onClick={() =>
								dispatch(addToCartActionCreator(item))
							}
						>
							Add To Cart
						</button>
					</div>
				);
			})}
		</div>
	);
}
