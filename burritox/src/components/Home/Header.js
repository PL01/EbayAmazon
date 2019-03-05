import React, { Fragment } from 'react';
import Styled from 'styled-components';
import StyledSearch from '../../styled/StyledSearch';
import StyledBigButton from '../../styled/StyledBigButton';

const StyledHeader = Styled.header`
	text-align: center;
	background: black;
	color: white;
	height: 35vh;
	padding-top: 3.5rem;	
`;

/// TODO Put in its own file
const Search = () => {
	return (
		<StyledSearch>
			<input type="text" placeholder="Search.." />
			<StyledBigButton>Browse</StyledBigButton>
		</StyledSearch>
	);
};

const Header = () => {
	return (
		<StyledHeader>
			<Search />
		</StyledHeader>
	);
};

export default Header;
