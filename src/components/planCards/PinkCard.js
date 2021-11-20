import styled from 'styled-components';
import CardStyle from './CardStyle';

const PinkCard = styled(CardStyle)`
	background-color: #e5cdb3;

	p {
		font-size: 18px;
		font-weight: 700;
		color: #4d65a8;
		width: 85%;
		margin-bottom: 25px;
	}

	button {
		padding: 10px 20px;
	}
`;

export default PinkCard;
