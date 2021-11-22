import image02 from '../../assets/image02.jpg';

import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import routes from '../../routes/routes';

import PinkCard from './PinkCard';
import DefaultButton from '../buttons/DefaultButton';

import SubscriptionContext from '../../contexts/SubscriptionContext';

export default function MonthlyPlanSubscribeCard() {
	const { subscription, setSubscription } = useContext(SubscriptionContext);
	const navigate = useNavigate();

	return (
		<PinkCard>
			<img src={image02} alt='imagem ilustrativa do plano' />

			<p>
				Você recebe um box por mês.
				<br />
				<br />
				Ideal para quem está começando agora.
			</p>

			<DefaultButton
				onClick={() => {
					setSubscription({
						...subscription,
						planType: 'Mensal',
					});
					navigate(routes.planInformations);
				}}
			>
				Assinar
			</DefaultButton>
		</PinkCard>
	);
}
