import styled from 'styled-components';

const DefaultButton = styled.button`
	font-size: 24px;
	font-weight: 500;
	color: #ffffff;
	background-color: #8c97ea;
	border: none;
	border-radius: 10px;
	cursor: ${({ $loading }) => ($loading ? 'default' : 'pointer')};
`;

export default DefaultButton;
