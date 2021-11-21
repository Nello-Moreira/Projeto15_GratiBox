import styled from 'styled-components';
import TextInput from './TextInput';

const AddressInput = styled(TextInput)`
	font-size: 18px;
	font-weight: 700;
	color: ${({ $loading }) => ($loading ? '#728bd1' : '#4d65a8')};
	width: ${({ $width }) => $width || '100%'};
	margin-bottom: 7px;
	background-color: #e0d1ed9e;

	::placeholder {
		color: #728bd1;
	}

	:focus {
		color: ${({ $loading }) => ($loading ? 'transparent' : '#4d65a8')};
		text-shadow: ${({ $loading }) =>
			$loading ? '0px 0px 0px #728bd1' : 'none'};
	}
`;

export default AddressInput;
