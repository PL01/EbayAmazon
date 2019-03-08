import React from 'react';
import { connect } from 'react-redux';
import { getItems } from '../actions/itemActions';
import Home from '../components/Home';

const mapStateToProps = (state) => {
	return {
		items: Object.values(state.items)
	};
};

const HomeContainer = (props) => {
	return <Home {...props} />;
};

export default connect(mapStateToProps, { getItems })(HomeContainer);
