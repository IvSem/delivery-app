import { LayoutPage } from 'pages';
import { Route, Routes } from 'react-router';

export const App = () => {
	return (
		<Routes>
			<Route path="/" element={<LayoutPage />}></Route>
		</Routes>
	);
};
