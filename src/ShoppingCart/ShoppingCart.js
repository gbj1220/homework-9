import React from 'react';
import { useSelector } from 'react-redux';

function ShoppingCart() {
	const shoppingCart = useSelector((state) => state.shoppingCart);

	return (
		<div className='shopping-cart-main'>
			<h2 style={{ textAlign: 'center', color: '#78fff1' }}>
				Shopping Cart
			</h2>
			<div
				style={{
					border: 'solid 2px #78fff1',
					margin: '25px 500px',
					minHeight: '200px',
				}}
			>
				{shoppingCart.items.map((el, i) => {
					return (
						<div className='cart-items' key={i}>
							<span style={{ color: '#78fff1' }}>
								Product: {el.title}
							</span>
							<span style={{ color: '#78fff1' }}>
								Price: {el.price}
							</span>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default ShoppingCart;
