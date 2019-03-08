import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import GlobalStyle from '../styled/GlobalStyle';
import HomeContainer from '../containers/HomeContainer';
import SignupContainer from '../containers/SignupContainer';
import LoginContainer from '../containers/LoginContainer';
import ItemDetailsContainer from '../containers/ItemDetailsContainer';
import StyledContainer from '../styled/StyledContainer';
import UserContainer from '../containers/UserContainer';
import { navType } from '../utils/navType';
// ================================================
// HIGHER ORDER COMPONENT AKA PARENT COMPONENT
//=================================================

const mapStateToProps = (state) => {
	return {
		...state
	};
};

const App = (props) => {
	const { type } = props.users;
	return (
		<Fragment>
			<GlobalStyle />
			{navType(type)}
			<StyledContainer>
				<Route exact path="/" component={HomeContainer} />
				<Route exact path="/items/:id" component={ItemDetailsContainer} />
				<Route exact path="/login" component={LoginContainer} />
				<Route exact path="/signup" component={SignupContainer} />
				<Route exact path={window.location.pathname} component={UserContainer} />
			</StyledContainer>
		</Fragment>
	);
};

export default connect(mapStateToProps)(App);
