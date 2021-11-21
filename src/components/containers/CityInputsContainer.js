import styled from 'styled-components';

const CityInputsContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media (max-width: 350px) {
		flex-direction: column;
	}
`;

export default CityInputsContainer;
