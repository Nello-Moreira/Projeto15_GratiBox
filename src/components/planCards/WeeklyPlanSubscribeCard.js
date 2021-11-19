import image04 from '../../assets/image04.jpg';

import { useNavigate } from 'react-router-dom';
import routes from '../../routes/routes';

import CardStyle from './CardStyle';
import DefaultButton from '../buttons/DefaultButton';

export default function WeeklyPlanSubscribeCard() {
	const navigate = useNavigate();

	return (
		<CardStyle>
			<img src={image04} alt='imagem ilustrativa do plano' />

			<p>
				Você recebe um box por semana. Ideal para quem quer exercer a
				gratidão todos os dias.
			</p>
			<DefaultButton onClick={() => navigate(routes.subscribe)}>
				Assinar
			</DefaultButton>
		</CardStyle>
	);
}
