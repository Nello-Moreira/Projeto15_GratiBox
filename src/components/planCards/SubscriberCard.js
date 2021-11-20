import styled from 'styled-components';
import image03 from '../../assets/image03.jpg';

import WhiteCard from './WhiteCard';

export default function SubscriberCard() {
	return (
		<SubscriberCardStyle>
			<img src={image03} alt='imagem ilustrativa do plano' />

			<h3>Plano:</h3>
			<p>@tipo_de_plano</p>

			<h3>Data da assinatura:</h3>
			<p>@tipo_de_plano</p>

			<h3>Próximas entregas:</h3>
			<ul>
				<li>01/01/1970</li>
				<li>01/01/1970</li>
				<li>01/01/1970</li>
			</ul>

			<h3>Produtos:</h3>
			<ul>
				<li>Chás</li>
				<li>Produtos organicos</li>
				<li>Incensos</li>
			</ul>
		</SubscriberCardStyle>
	);
}

const SubscriberCardStyle = styled(WhiteCard)`
	> h3 {
		font-size: 18px;
		font-weight: 700;
		color: #4d65a8;
		width: 85%;
	}

	> p {
		color: #e63c80;
		margin: 5px 0 10px 20px;
	}

	> ul {
		margin: 5px 0 5px 20px;
	}

	> ul li {
		color: #e63c80;
		margin-bottom: 5px;
	}
`;
