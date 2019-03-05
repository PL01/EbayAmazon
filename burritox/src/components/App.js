import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import GlobalStyle from '../styled/GlobalStyle';
import HomeContainer from '../containers/HomeContainer';
import SignupContainer from '../containers/SignupContainer';
import LoginContainer from '../containers/LoginContainer';
import StyledContainer from '../styled/StyledContainer';
import GuestNav from './Home/GuestNav';

// ================================================
// HIGHER ORDER COMPONENT AKA PARENT COMPONENT
//=================================================
const App = () => {
	return (
		<Fragment>
			<GlobalStyle />
			<GuestNav />
			<StyledContainer>
				<Route exact path="/" component={HomeContainer} />
				<Route exact path="/login" component={LoginContainer} />
				<Route exact path="/signup" component={SignupContainer} />
			</StyledContainer>
		</Fragment>
	);
};

export default App;
