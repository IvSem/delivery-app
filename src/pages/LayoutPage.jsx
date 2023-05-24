import { Header } from 'components';
import { Outlet } from 'react-router-dom';

const LayoutPage = () => {
	return (
		<>
			<Header />
			<main className="container">
				<Outlet />
			</main>
		</>
	);
};

export default LayoutPage;
