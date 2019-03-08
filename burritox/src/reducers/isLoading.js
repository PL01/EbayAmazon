import { handleActions } from 'redux-actions';
import { API_START, API_END } from '../constants/actionTypes';
import { GET_ITEMS } from '../constants/labels';

export default handleActions(
	{
		[API_START]: (state, action) => state
	},
	{}
);
