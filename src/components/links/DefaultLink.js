import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function DefaultLink({
	to,
	$loading = false,
	$customStyle = {},
	children,
}) {
	return (
		<LinkStyle to={to} $loading={$loading} $customStyle={$customStyle}>
			{children}
		</LinkStyle>
	);
}

const LinkStyle = styled(Link)`
	font-weight: 700;
	font-size: 18px;
	text-decoration: none;
	color: rgb(210, 210, 210);
	margin: ${({ $customStyle }) => $customStyle.margin || '0'};
	cursor: ${({ $loading }) => ($loading ? 'default' : 'pointer')};

	:hover {
		filter: ${({ $loading }) =>
			$loading ? 'brightness(1)' : 'brightness(1.5)'};
	}

	:visited {
		color: rgb(210, 210, 210);
	}
`;
