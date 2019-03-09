import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import users from './users';
import items from './items';
import selectedItem from './selectedItem';
import isLoading from './isLoading';
import search from './search';
const rootReducer = combineReducers({
	users,
	items,
	search,
	selectedItem,
	isLoading
});

const persistConfig = {
	key: 'root',
	storage,
	blacklist: [ 'search' ]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
