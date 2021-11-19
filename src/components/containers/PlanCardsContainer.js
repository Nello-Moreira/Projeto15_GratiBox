import styled from 'styled-components';

const PlanCardsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;

	@media (max-width: 900px) {
		> div {
			margin-bottom: 50px;
		}
	}
`;

export default PlanCardsContainer;
