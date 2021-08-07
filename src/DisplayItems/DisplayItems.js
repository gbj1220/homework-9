import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../db-mock/dbMock';
import { addToCartActionCreator } from '../actions/actions';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import CatFact from '../CatFact/CatFact';

function DisplayItems() {
	const products = fetchProducts();
	const dispatch = useDispatch();
	const shoppingCart = useSelector((state) => state.shoppingCart);
	console.log(shoppingCart);

	return (
		<div style={{ textAlign: 'center' }}>
			{products.map((item, i) => {
				return (
					<div key={i} style={{ margin: '20px' }}>
						<div style={{ color: '#78fff1' }}>{item.title}</div>
						<div style={{ color: '#78fff1' }}>{item.price}</div>
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
			<ShoppingCart />
			<CatFact />
		</div>
	);
}

export default DisplayItems;
