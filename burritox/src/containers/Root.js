import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import store from '../store';
import App from '../components/App';
import theme from '../constants/theme';
// CONTAINER IS CONNECTED TO REDUX STORE
const Root = () => {
	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<Router>
					<App />
				</Router>
			</ThemeProvider>
		</Provider>
	);
};

export default Root;
