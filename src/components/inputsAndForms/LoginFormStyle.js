import styled from 'styled-components';

const LoginFormStyle = styled.form`
	box-sizing: border-box;
	width: 70%;
	margin: 50px 0 0;
	display: flex;
	flex-direction: column;
	align-items: center;

	> input {
		width: 100%;
		margin: 0 0 15px;
	}

	> button {
		width: 50%;
		padding: 10px 0;
		margin: 30px 0 15px;
		border: 1px solid #333f91;
	}

	@media (max-width: 600px) {
		width: 95%;
	}
`;

export default LoginFormStyle;
