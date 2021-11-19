import PageContainer from '../components/containers/PageContainer';
import PageTitle from '../components/titles/PageTitle';
import SignUpForm from '../components/inputsAndForms/SignUpForm';
import DefaultLink from '../components/links/DefaultLink';

import routes from './routes';

export default function SignUp() {
	return (
		<PageContainer>
			<PageTitle>Bem vindo ao GratiBox</PageTitle>

			<SignUpForm />

			<DefaultLink
				to={routes.login}
				$customStyle={{ margin: '0 0 30px' }}
			>
				Já sou grato
			</DefaultLink>
		</PageContainer>
	);
}
