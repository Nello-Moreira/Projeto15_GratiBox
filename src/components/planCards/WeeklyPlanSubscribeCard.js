import image04 from '../../assets/image04.jpg';

import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import routes from '../../routes/routes';

import PinkCard from './PinkCard';
import DefaultButton from '../buttons/DefaultButton';

import SubscriptionContext from '../../contexts/SubscriptionContext';

export default function WeeklyPlanSubscribeCard() {
	const { subscription, setSubscription } = useContext(SubscriptionContext);
	const navigate = useNavigate();

	return (
		<PinkCard>
			<img src={image04} alt='imagem ilustrativa do plano' />

			<p>
				Você recebe um box por semana. Ideal para quem quer exercer a
				gratidão todos os dias.
			</p>
			<DefaultButton
				onClick={() => {
					setSubscription({
						...subscription,
						planType: 'Semanal',
					});
					navigate(routes.planInformations);
				}}
			>
				Assinar
			</DefaultButton>
		</PinkCard>
	);
}
