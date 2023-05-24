import { Box } from '@chakra-ui/react';
import { LayoutPage } from 'pages';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
	return (
		<Box overflow="" display="flex" flexDirection="column">
			<Routes>
				<Route path="/" element={<LayoutPage />}></Route>
			</Routes>
		</Box>
	);
};
