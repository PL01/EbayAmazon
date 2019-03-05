import React from 'react';
import Styled from 'styled-components';

const StyledNav = Styled.nav`
    padding: 1rem 5rem 1rem 2rem;
    display:grid;
    align-items: center;
    font-size: 1.5rem;
    grid-template-columns: 1fr auto;
    background: black;
    a { color: white;}
    span { color: ${(props) => props.theme.green};}
 `;

const StyledLinks = Styled.div`
    a {
        cursor: pointer;
        display: inline-block;
        margin:  0 0.8rem;
        font-size: 1rem;
    }
    `;

const GuestNav = () => {
	return (
		<StyledNav>
			<a href="/">
				Burrito<span>X</span>
			</a>
			<StyledLinks>
				<a href="/Login">
					<span>Login</span>
				</a>
				<a href="/Signup">Sign Up </a>
			</StyledLinks>
		</StyledNav>
	);
};

export default GuestNav;
