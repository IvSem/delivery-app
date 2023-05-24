import { CartItem } from 'components';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeAll } from 'redux/cartSlice/cartSlice';
import css from './Cart.module.css';

export const Cart = ({ cartItems, closeCart, isCartOpen }) => {
	const totalAmount = useSelector(state => state.cart.totalAmount);
	const dispatch = useDispatch();

	const formattedTotalAmount = Math.abs(totalAmount).toLocaleString('en-US', {
		style: 'currency',
		currency: 'USD',
	});

	const navigate = useNavigate();

	const handleOrder = () => {
		closeCart();
		navigate('/shoping-cart');
	};

	const removeAllItems = () => {
		dispatch(removeAll());
		//dispatch(alertVisibility('The list has been emptied.', 'bad'));
	};

	return (
		<section className={`${css.cart} ${isCartOpen ? css.active : ''}`}>
			<div className={css.header}>
				<p>Your Cart</p>
				{cartItems.length ? (
					<button className={css.deleteBtn} onClick={removeAllItems}>
						Remove All
					</button>
				) : (
					''
				)}
			</div>

			{cartItems.length > 0 ? (
				<>
					<ul className={css.cartList}>
						{cartItems.map(item => (
							<CartItem item={item} key={item.id} />
						))}
					</ul>

					<div className={css.popupCart}>
						<span className={css.total}>
							Total: <br />
							<span>{formattedTotalAmount}</span>
						</span>
						<button className="btn-style" onClick={handleOrder}>
							Buy Now
						</button>
					</div>
				</>
			) : (
				<p className={css.noItems}>
					There are no items here.
					<br /> Start adding items to the cart!
				</p>
			)}
		</section>
	);
};
