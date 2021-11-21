import { useState } from 'react';
import styled from 'styled-components';

import SectionTitle from '../SectionTitle';

export default function StateContainer({
	loading,
	selectedState,
	setSelectedState,
}) {
	const [isOpen, setIsOpen] = useState(false);
	const [states, setStates] = useState([
		'RJ',
		'SP',
		'MG',
		'ES',
		'AM',
		'BA',
		'PI',
	]);

	function clickHandler(event) {
		setSelectedState(event.target.value);
		setIsOpen(false);
	}

	return (
		<StateContainerStyle
			isOpen={isOpen}
			cursorPointer={!isOpen && !loading}
		>
			<SectionTitle
				isOpen={isOpen}
				changeState={() => setIsOpen(!isOpen)}
			>
				Estado
			</SectionTitle>
			<StatesList isOpen={isOpen}>
				{states.map((state, i) => (
					<StateOption isSelected={state === selectedState} key={i}>
						<label htmlFor='state'>
							<input
								type='radio'
								name={state}
								value={state}
								checked={state === selectedState}
								onChange={clickHandler}
								id={state}
							/>{' '}
							{state}
						</label>
					</StateOption>
				))}
			</StatesList>
		</StateContainerStyle>
	);
}

const StateContainerStyle = styled.div`
	box-sizing: border-box;
	width: 38%;
	padding: 9px 1px 9px 7px;
	border: 1px solid rgb(204, 204, 204);
	border-radius: 5px;
	${({ isOpen }) =>
		isOpen
			? 'border-top-left-radius: 0px; border-top-right-radius: 0px;'
			: 'border-radius: 5px;'}
	margin-bottom: 7px;
	background-color: #e0d1ed9e;
	position: relative;
	cursor: ${({ cursorPointer }) => (cursorPointer ? 'pointer' : 'default')};

	@media (max-width: 350px) {
		width: 100%;
	}
`;

const StatesList = styled.ul`
	height: auto;
	max-height: ${({ isOpen }) => (isOpen ? '450%' : '0px')};
	overflow-y: auto;
	width: 100%;
	padding: 0;
	border: ${({ isOpen }) =>
		isOpen ? '1px solid rgb(204, 204, 204)' : 'none'};
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
	background-color: #ece2f4;
	position: absolute;
	bottom: 41px;
	left: -1px;
	z-index: 2;
	transition: max-height 0.3s ease-in-out;

	::-webkit-scrollbar {
		width: 7px;
	}

	::-webkit-scrollbar-track {
		background: #f1f1f1;
		border-radius: 5px;
	}

	::-webkit-scrollbar-thumb {
		background: #728bd1;
		border-radius: 5px;
	}

	::-webkit-scrollbar-thumb:hover {
		background: #4d65a8;
	}
`;

const StateOption = styled.li`
	font-weight: 700;
	color: ${({ isSelected }) => (isSelected ? '#fff' : '#4d65a8')};
	padding: 5px 0;
	background-color: ${({ isSelected }) =>
		isSelected ? '#4d65a8' : 'inherit'};
`;
