import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../db-mock/dbMock';
import { addToCartActionCreator } from '../actions/actions';

function DisplayItems() {
	const products = fetchProducts();
	const dispatch = useDispatch();
	// console.log(products);

	try {
		return (
			<div>
				{products.map((item, i) => {
					return (
						<div key={i} style={{ margin: '20px' }}>
							<div>{item.title}</div>
							<div>{item.price}</div>
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
	} catch (error) {
		console.log(error);
	}
}

export default DisplayItems;
