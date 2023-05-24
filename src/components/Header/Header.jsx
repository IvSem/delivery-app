import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ReactComponent as IconLogo } from 'assets/logo.svg';
import { ReactComponent as IconMenu } from 'assets/menu.svg';
import { ReactComponent as IconCart } from 'assets/cart.svg';
import css from './Header.module.css';
import { Cart } from 'components';

export const Header = () => {
	const cartData = useSelector(state => state.cart);
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(true);
	const refCart = useRef();
	const refMenu = useRef();

	const location = useLocation();
	const isShopingCartPage = location.pathname === '/shoping-cart';

	const classIsActive = ({ isActive }) => (isActive ? css.linkActive : '');

	const handleOpenCart = () => {
		setIsCartOpen(true);
	};

	const handleClosedCart = () => {
		setIsCartOpen(false);
	};

	useEffect(() => {
		const checkPageWidth = () => {
			if (window.innerWidth <= 570) {
				setIsMenuOpen(false);
			}
		};
		checkPageWidth();
		window.addEventListener('resize', checkPageWidth);
		return () => {
			window.removeEventListener('resize', checkPageWidth);
		};
	}, []);

	useEffect(() => {
		const closeMenu = e => {
			if (e.target !== refCart.current && !refCart.current.contains(e.target)) {
				setIsCartOpen(false);
			}
			if (e.target !== refMenu.current && !refMenu.current.contains(e.target)) {
				setIsMenuOpen(false);
			}
		};
		window.addEventListener('click', closeMenu);
		return () => {
			window.removeEventListener('click', closeMenu);
		};
	}, []);

	return (
		<header className={css.header}>
			<div className={`container ${css.container}`}>
				<nav className={isMenuOpen ? css.active : ''}>
					<NavLink to="/" end className={classIsActive}>
						Shop
					</NavLink>
					<NavLink to="/shoping-cart" className={classIsActive}>
						Shoping Cart
					</NavLink>
				</nav>
				<Link className={css.logo} to="/">
					<IconLogo /> DeliveryApp
				</Link>
				<button
					ref={refMenu}
					className={`${css.menuBtn} ${isMenuOpen ? css.active : ''}`}
					onClick={() => setIsMenuOpen(true)}
				>
					<IconMenu />
				</button>
				<div className={css.cart} ref={refCart}>
					<button
						className={`btn-style ${css.btnCart} ${
							isCartOpen ? css.btnActive : ''
						}`}
						onClick={handleOpenCart}
						disabled={isShopingCartPage}
					>
						<span>Cart</span>
						<IconCart />
						{cartData.totalItems > 0 ? (
							<span className={css.cartItems}>{cartData.totalItems}</span>
						) : null}
					</button>

					<Cart
						cartItems={cartData.items}
						handleClosedCart={handleClosedCart}
						isCartOpen={isCartOpen}
					/>
				</div>
			</div>
		</header>
	);
};

export default Header;
