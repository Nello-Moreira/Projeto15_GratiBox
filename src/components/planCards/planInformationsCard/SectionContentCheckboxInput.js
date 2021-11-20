import styled from 'styled-components';

export default function SectionContentCheckboxInput({
	isOpen,
	sectionName,
	inputs,
	saveValue,
}) {
	function clickHandler(event) {
		const newInputsState = inputs.map(input => {
			if (input.option === event.target.value) {
				input.checked = !input.checked;
				return input;
			}
			return input;
		});

		saveValue(newInputsState);
	}

	return (
		<SectionContentStyle isOpen={isOpen}>
			{inputs.map((input, i) => (
				<label htmlFor={input.option} key={input.option}>
					<input
						type='checkbox'
						name={sectionName}
						value={input.option}
						checked={input.checked}
						onChange={clickHandler}
						id={input.option}
						key={i}
					/>{' '}
					{input.option}
				</label>
			))}
		</SectionContentStyle>
	);
}

const SectionContentStyle = styled.div`
	font-weight: 400;
	font-size: 18px;
	color: #4d65a8;
	height: auto;
	max-height: ${({ isOpen }) => (isOpen ? '50vh' : '0px')};
	margin: ${({ isOpen }) => (isOpen ? '10px 0 0 10px' : '0px 0 0 10px')};
	overflow-y: hidden;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
	transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out,
		margin 0.3s ease-in-out;

	input {
		margin-bottom: 10px;
	}
`;
