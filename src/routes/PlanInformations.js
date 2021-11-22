import styled from 'styled-components';

import { useNavigate } from 'react-router';
import { useContext, useEffect } from 'react';
import UserContext from '../contexts/UserContext';
import routes from './routes';

import PageContainer from '../components/containers/PageContainer';
import PageTitle from '../components/titles/PageTitle';
import PageSubTitle from '../components/titles/PageSubTitle';
import PlanInformationsCard from '../components/planCards/planInformationsCard/PlanInformationsCard';
import DefaultButton from '../components/buttons/DefaultButton';

export default function PlanInformations() {
	const { user } = useContext(UserContext);
	const navigate = useNavigate();

	useEffect(() => {
		if (!user.token) {
			navigate(routes.home);
		}
	}, [user.token]);

	return (
		<PageContainer>
			<PageTitle>Bom te ver por aqui, {user.name}.</PageTitle>

			<PageSubTitle>
				“Agradecer é arte de atrair coisas boas”
			</PageSubTitle>

			<PlanInformationsCard />

			<NextPageButton
				onClick={() => navigate(routes.addressInformations)}
			>
				Próximo
			</NextPageButton>
		</PageContainer>
	);
}

const NextPageButton = styled(DefaultButton)`
	padding: 10px 20px;
	margin-top: 15px;
`;
