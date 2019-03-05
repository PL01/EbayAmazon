import React from 'react';
import StyledSearch from '../../styled/StyledSearch';
import StyledBigButton from '../../styled/StyledBigButton';
import StyledHeader from '../../styled/StyledHeader';

/// TODO Put in its own file
const Search = () => {
	return (
		<StyledSearch>
			<input type="text" placeholder="Search.." />
			<StyledBigButton>Browse</StyledBigButton>
		</StyledSearch>
	);
};

const SubMenu = () => (
	<div className="sub-menu">
		<button>SNEAKERS</button>
		<button>WATCHES</button>
		<button>BOOKS</button>
		<button>ELECTRONICS</button>
	</div>
);

const Header = () => {
	return (
		<StyledHeader>
			<Search />
			<SubMenu />
		</StyledHeader>
	);
};

export default Header;
