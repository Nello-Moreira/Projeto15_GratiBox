import { useState } from 'react';

import PageContainer from '../components/containers/PageContainer';
import PageTitle from '../components/titles/PageTitle';
import SignUpForm from '../components/inputsAndForms/SignUpForm';
import DefaultLink from '../components/links/DefaultLink';

import routes from './routes';

export default function SignUp() {
	const [loading, setLoading] = useState(false);

	return (
		<PageContainer>
			<PageTitle>Bem vindo ao GratiBox</PageTitle>

			<SignUpForm loading={loading} setLoading={setLoading} />

			<DefaultLink
				to={routes.login}
				$loading={loading}
				$customStyle={{ margin: '0 0 30px' }}
			>
				Já sou grato
			</DefaultLink>
		</PageContainer>
	);
}
