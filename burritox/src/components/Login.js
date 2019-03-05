import React, { Component } from 'react';
import Form from '../styled/Form';
import styled from 'styled-components';

const FormContainer = styled.div`margin: 0 20rem;`;

class Login extends Component {
	state = {
		email: '',
		password: ''
	};
	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};
	render() {
		return (
			<FormContainer>
				<Form
					data-test="form"
					onSubmit={(e) => {
						e.preventDefault();
					}}
				>
					<fieldset>
						<label htmlFor="email">
							<input
								type="text"
								id="email"
								name="email"
								placeHolder="Email address"
								required
								value={this.state.email}
								onChange={this.handleChange}
							/>
						</label>
						<label htmlFor="password">
							<input
								type="password"
								id="password"
								name="password"
								placeHolder="Password"
								required
								value={this.state.password}
								onChange={this.handleChange}
							/>
						</label>
						<button type="submit">Login</button>
					</fieldset>
					<p>
						Don't have an account? <a>Sign up</a>
					</p>
				</Form>
			</FormContainer>
		);
	}
}

export default Login;
