import { createStore } from 'redux';
import rootReducer from '../reducers';

// store configuration and any middleware goes here
const configureStore = (initialState) => {
	const store = createStore(rootReducer, initialState);
	// hot reloading config
	if (module.hot) {
		module.hot.accept('../reducers', () => {
			store.replaceReducer(rootReducer);
		});
	}

	return store;
};

export default configureStore;
