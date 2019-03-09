import React from 'react';
import { connect } from 'react-redux';
import { getItems, setSearchResults, setCategory } from '../actions/itemActions';
import Home from '../components/Home';
import { GET_ITEMS } from '../constants/labels';

const mapStateToProps = (state) => {
	let searchResults = state.search.setSearchItems;
	let default_category = state.search.product_category;
	return {
		items: Object.values(state.items),
		searchResults,
		default_category,
		loading: state.isLoading[GET_ITEMS]
	};
};

const HomeContainer = (props) => {
	return <Home {...props} />;
};

export default connect(mapStateToProps, { getItems, setSearchResults, setCategory })(HomeContainer);
