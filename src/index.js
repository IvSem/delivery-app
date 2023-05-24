import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter basename="/eliftech-delivery-app">
			<Provider store={store}>
				<ChakraProvider resetCSS>
					<App />
				</ChakraProvider>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
);
