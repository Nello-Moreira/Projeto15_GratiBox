import styled from 'styled-components';

const PageContainer = styled.div`
	width: 70%;
	margin: 50px auto 0px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media (max-width: 600px) {
		width: 93%;
	}
`;
export default PageContainer;
