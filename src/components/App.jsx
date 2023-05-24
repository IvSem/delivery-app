import { CartPage, LayoutPage, ShopPage } from 'pages';
import { Route, Routes } from 'react-router';

export const App = () => {
	return (
		<Routes>
			<Route path="/" element={<LayoutPage />}>
				<Route index element={<ShopPage />} />
				<Route path="/shoping-cart" element={<CartPage />} />
			</Route>
		</Routes>
	);
};
