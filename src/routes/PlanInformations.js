import styled from 'styled-components';

import { useNavigate } from 'react-router';
import { useState, useContext, useEffect } from 'react';
import UserContext from '../contexts/UserContext';
import SubscriptionContext from '../contexts/SubscriptionContext';
import routes from './routes';

import CircleLoader from '../components/loaders/CircleLoader';
import PageContainer from '../components/containers/PageContainer';
import PageTitle from '../components/titles/PageTitle';
import PageSubTitle from '../components/titles/PageSubTitle';
import PlanInformationsCard from '../components/planCards/planInformationsCard/PlanInformationsCard';
import DefaultButton from '../components/buttons/DefaultButton';

export default function PlanInformations() {
	const { user } = useContext(UserContext);
	const { subscription } = useContext(SubscriptionContext);

	const navigate = useNavigate();
	const [pageFirstLoad, setPageFirstLoad] = useState(true);

	useEffect(() => {
		if (!user.token) {
			navigate(routes.home);
		}
		setPageFirstLoad(false);
	}, [user.token]);

	function checkSelectedPlanInformations() {
		if (!subscription.planType) {
			return alert('Selecione um tipo de plano');
		}
		if (!subscription.deliveryOption) {
			return alert('Selecione uma opção de entrega');
		}
		if (subscription.selectedProducts.length === 0) {
			return alert('Selecione ao menos um produto');
		}
		navigate(routes.addressInformations);
	}

	return pageFirstLoad ? (
		<CircleLoader />
	) : (
		<PageContainer>
			<PageTitle>Bom te ver por aqui, {user.name}.</PageTitle>

			<PageSubTitle>
				“Agradecer é arte de atrair coisas boas”
			</PageSubTitle>

			<PlanInformationsCard />

			<NextPageButton onClick={checkSelectedPlanInformations}>
				Próximo
			</NextPageButton>
		</PageContainer>
	);
}

const NextPageButton = styled(DefaultButton)`
	padding: 10px 20px;
	margin-top: 15px;
`;
