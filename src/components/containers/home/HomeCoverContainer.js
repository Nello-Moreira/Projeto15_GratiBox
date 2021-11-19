import styled from 'styled-components';

const HomeCoverContainer = styled.div`
	height: 100vh;
	width: 100vw;
	background-color: #4d65a8;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	overflow: hidden;

	img {
		height: 100%;
		position: absolute;
		bottom: 0px;
	}
`;

export default HomeCoverContainer;
