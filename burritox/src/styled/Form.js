import styled from 'styled-components';

const Form = styled.form`
	padding: 30px;
	line-height: 1.5;
	line-height: 1.5;
	font-weight: 600;
	label {
		display: block;
		margin-bottom: 1.3rem;
	}
	input,
	textarea,
	select {
		width: 100%;
		padding: 0.8rem;
		font-size: 1rem;
		border: 1px solid black 0.2;
		&:focus {
			outline: 0;
			border-color: ${(props) => props.theme.red};
		}
	}
	button,
	input[type='submit'] {
		margin-top: 2rem;
		width: 100%;
		background: ${(props) => props.theme.green};
		color: white;
		border: 0;
		font-size: 1.2rem;
		font-weight: 400;
		padding: 0.8rem 1.2rem;
	}

	fieldset {
		border: 0;
		padding: 0;

		&[disabled] {
			opacity: 0.4;
		}
	}
	p {
		padding-top: 2rem;
		text-align: center;
		font-weight: 500;
		a {
			color: blue;
		}
	}
`;

export default Form;
