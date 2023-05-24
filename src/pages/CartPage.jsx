import { useSelector } from 'react-redux';

const CartPage = () => {
	const cartData = useSelector(state => state.cart);
	console.log(':>  CartPage  cartData:', cartData);
	return (
		<>
			<h1>Hello</h1>
		</>
	);
};

export default CartPage;
