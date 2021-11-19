import styled from 'styled-components';

const CardStyle = styled.div`
	width: 35%;
	padding-bottom: 20px;
	background-color: #e5cdb3;
	border: 1px solid #333f91;
	border-radius: 25px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	img {
		width: 100%;
		border-radius: 25px;
	}

	p {
		font-size: 18px;
		font-weight: 700;
		color: #4d65a8;
		width: 85%;
		margin-bottom: 25px;
	}

	button {
		padding: 10px 20px;
		border: 1px solid #333f91;
	}

	@media (max-width: 1150px) {
		width: 45%;
	}

	@media (max-width: 900px) {
		width: 65%;
	}

	@media (max-width: 600px) {
		width: 100%;
	}
`;

export default CardStyle;
