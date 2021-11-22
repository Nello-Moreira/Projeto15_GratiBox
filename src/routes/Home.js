import image05 from '../assets/image05.webp';
import HomePageButton from '../components/buttons/HomePageButton';
import HomeTitle from '../components/titles/HomeTitle';
import HomeCoverContainer from '../components/containers/home/HomeCoverContainer';
import HomeButtonsContainer from '../components/containers/home/HomeButtonsContainer';
import DefaultLink from '../components/links/DefaultLink';

import routes from './routes';

import { useNavigate } from 'react-router-dom';

export default function Home() {
	const navigate = useNavigate();

	return (
		<HomeCoverContainer>
			<HomeTitle>Bem vindo ao GratiBox</HomeTitle>

			<img src={image05} alt='Imagem da página inicial do GratiBox' />

			<HomeButtonsContainer>
				<HomePageButton onClick={() => navigate(routes.signUp)}>
					Quero começar
				</HomePageButton>

				<DefaultLink
					to={routes.login}
					$customStyle={{ margin: '0 0 30px' }}
				>
					Já sou grato
				</DefaultLink>
			</HomeButtonsContainer>
		</HomeCoverContainer>
	);
}
