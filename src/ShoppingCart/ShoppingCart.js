import { black } from 'chalk';
import React from 'react';
import { useSelector } from 'react-redux';

function ShoppingCart() {
	const shoppingCart = useSelector((state) => state.shoppingCart);
	const items = shoppingCart.items.map((el, i) => (
		<div key={i} style={{ padding: '25px' }}>
			<div>Item: {el.title}</div>
			<div>Price: {el.price}</div>
		</div>
	));

	return (
		<div className='shopping-cart-main'>
			<h2>Shopping Cart</h2>
			<div
				style={{
					border: 'solid 2px black',
					margin: '25px 500px',
					minHeight: '200px',
					backgroundColor: 'gray',
				}}
			>
				{items}
			</div>
		</div>
	);
}

export default ShoppingCart;
