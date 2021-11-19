import PageContainer from '../components/containers/PageContainer';
import PageTitle from '../components/titles/PageTitle';
import LoginForm from '../components/inputsAndForms/LoginForm';
import DefaultLink from '../components/links/DefaultLink';

import routes from './routes';
import { useState } from 'react';

export default function Login() {
	const [loading, setLoading] = useState(false);

	return (
		<PageContainer>
			<PageTitle>Bem vindo ao GratiBox</PageTitle>

			<LoginForm loading={loading} setLoading={setLoading} />

			<DefaultLink
				to={routes.signUp}
				$loading={loading}
				$customStyle={{ margin: '0 0 30px' }}
			>
				Ainda não sou grato
			</DefaultLink>
		</PageContainer>
	);
}
