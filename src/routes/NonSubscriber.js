import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import UserContext from '../contexts/UserContext';
import routes from './routes';

import PageContainer from '../components/containers/PageContainer';
import PageTitle from '../components/titles/PageTitle';
import PageSubTitle from '../components/titles/PageSubTitle';
import PlanCardsContainer from '../components/containers/PlanCardsContainer';
import WeeklyPlanSubscribeCard from '../components/planCards/WeeklyPlanSubscribeCard';
import MonthlyPlanSubscribeCard from '../components/planCards/MonthlyPlanSubscribeCard';

export default function NonSubscriber() {
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
				Você ainda não assinou um plano, que tal começar agora?
			</PageSubTitle>

			<PlanCardsContainer>
				<WeeklyPlanSubscribeCard />

				<MonthlyPlanSubscribeCard />
			</PlanCardsContainer>
		</PageContainer>
	);
}
