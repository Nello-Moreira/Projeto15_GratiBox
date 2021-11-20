import styled from 'styled-components';
import { AiOutlineArrowDown } from 'react-icons/ai';

export default function SectionTitle({ isOpen, changeState, children }) {
	return (
		<SectionTitleStyle onClick={changeState}>
			<h3>{children}</h3>

			<IconContainer isOpen={isOpen}>
				<AiOutlineArrowDown />
			</IconContainer>
		</SectionTitleStyle>
	);
}

const SectionTitleStyle = styled.div`
	color: #4d65a8;
	font-weight: 700;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;

	h3 {
		font-size: 18px;
	}
`;

const IconContainer = styled.div`
	font-size: 23px;
	display: flex;
	align-items: center;
	justify-content: center;
	transform: rotate(${({ isOpen }) => (isOpen ? '180deg' : '0deg')});
	transition: transform 0.5s ease-in-out;
`;
