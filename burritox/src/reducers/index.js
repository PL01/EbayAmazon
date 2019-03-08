import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import users from './users';
import items from './items';
import isLoading from './isLoading';

const rootReducer = combineReducers({
	users,
	items,
	isLoading
});

const persistConfig = {
	key: 'root',
	storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
