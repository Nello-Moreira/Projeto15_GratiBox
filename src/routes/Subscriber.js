import styled from 'styled-components';

import PageContainer from '../components/containers/PageContainer';
import PageTitle from '../components/titles/PageTitle';
import PageSubTitle from '../components/titles/PageSubTitle';
import SubscriberCard from '../components/planCards/SubscriberCard';
import DefaultButton from '../components/buttons/DefaultButton';

export default function Subscriber() {
	return (
		<PageContainer>
			<PageTitle>Bom te ver por aqui, @User.</PageTitle>

			<PageSubTitle>
				“Agradecer é arte de atrair coisas boas”
			</PageSubTitle>

			<SubscriberCard />

			<FeedbackButton
				onClick={() =>
					alert('Em breve será possível avaliar suas entregas')
				}
			>
				Avaliar entregas
			</FeedbackButton>
		</PageContainer>
	);
}

const FeedbackButton = styled(DefaultButton)`
	padding: 10px 20px;
	margin-top: 15px;
`;
