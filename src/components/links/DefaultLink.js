import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function DefaultLink({
	to,
	$loading = false,
	$customStyle = {},
	children,
}) {
	const navigate = useNavigate();

	return (
		<LinkStyle
			onClick={$loading ? null : () => navigate(to)}
			$loading={$loading}
			$customStyle={$customStyle}
		>
			{children}
		</LinkStyle>
	);
}

const LinkStyle = styled.a`
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
