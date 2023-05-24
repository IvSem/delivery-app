import { useDispatch } from 'react-redux';
import {
	addOneItemToCart,
	removeOneItemToCart,
} from 'redux/cartSlice/cartSlice';
import css from './CartItem.module.css';

export const CartItem = ({ item }) => {
	const dispatch = useDispatch();

	const formatItemPrice = value => Number(value).toFixed(2);

	const incrementQuantity = () => {
		dispatch(addOneItemToCart(item.id));
		//dispatch(alertVisibility(`Added 1 unit of ${item.name}`, 'ok'));
	};

	const decrementQuantity = () => {
		dispatch(removeOneItemToCart(item.id));
		//dispatch(alertVisibility(`Removed 1 unit of "${item.name}"`, 'bad'));
	};

	return (
		<li key={item.id} className={css.cartItem}>
			<div className={css.img}>
				<img src={require(`/src/assets/${item.img}`)} alt={item.name} />
			</div>
			<div className={css.header}>
				<div className={css.titleAndPrice}>
					<p className={css.title}>{item.name}</p>
					<p className={css.unitPrice}>$ {formatItemPrice(item.price)}/each</p>
				</div>
				<span className={css.value}>
					$ {formatItemPrice(item.price * item.quantity)}
				</span>
			</div>
			<div className={css.buttonsAndQuantity}>
				<div className={css.buttons}>
					<button title="Decrease by 1" onClick={decrementQuantity}>
						-
					</button>
					<button title="Add 1 more" onClick={incrementQuantity}>
						+
					</button>
				</div>
				<span>quantity {item.quantity}</span>
			</div>
		</li>
	);
};
