import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import UserContext from '../contexts/UserContext';
import SubscriptionContext from '../contexts/SubscriptionContext';
import routes from './routes';

import PageContainer from '../components/containers/PageContainer';
import PageTitle from '../components/titles/PageTitle';
import PageSubTitle from '../components/titles/PageSubTitle';
import AddressInformationsCard from '../components/planCards/addressInformationsCard/AddressInformationsCard';
import DefaultButton from '../components/buttons/DefaultButton';

import { postSubscription } from '../services/dataAPI';

export default function Address() {
	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();
	const { user } = useContext(UserContext);
	const { subscription } = useContext(SubscriptionContext);

	function subscribe() {
		if (loading) return;

		if (Object.values(subscription.address).includes('')) {
			alert('Preencha todos os campos');
			return;
		}
		setLoading(true);

		postSubscription({ ...subscription, id: user.id }, user.token)
			.then(response => navigate(routes.subscriber))
			.catch(error => {
				alert(
					'Houve um erro ao fazer a inscrição. Por favor, tente novamente'
				);
				navigate(routes.nonSubscriber);
			});
	}

	return (
		<PageContainer>
			<PageTitle>Bom te ver por aqui, {user.name}.</PageTitle>

			<PageSubTitle>
				“Agradecer é arte de atrair coisas boas”
			</PageSubTitle>

			<AddressInformationsCard loading={loading} />

			<NextPageButton onClick={subscribe}>Finalizar</NextPageButton>
		</PageContainer>
	);
}

const NextPageButton = styled(DefaultButton)`
	padding: 10px 20px;
	margin-top: 15px;
`;
