import PageContainer from '../components/containers/PageContainer';
import PageTitle from '../components/titles/PageTitle';
import PageSubTitle from '../components/titles/PageSubTitle';
import PlanInformationsCard from '../components/planCards/planInformationsCard/PlanInformationsCard';

export default function PlanInformations() {
	return (
		<PageContainer>
			<PageTitle>Bom te ver por aqui, @User.</PageTitle>

			<PageSubTitle>
				“Agradecer é arte de atrair coisas boas”
			</PageSubTitle>

			<PlanInformationsCard />
		</PageContainer>
	);
}
