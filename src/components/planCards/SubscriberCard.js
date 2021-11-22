import { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import image03 from '../../assets/image03.jpg';

import WhiteCard from './WhiteCard';

import UserContext from '../../contexts/UserContext';

import { getPlanInformations } from '../../services/dataAPI';

export default function SubscriberCard() {
	const { user } = useContext(UserContext);
	const [planInformations, setPlanInformations] = useState({
		subscription_date: null,
		type: null,
		nextDeliveries: [],
		products: [],
	});

	useEffect(() => {
		getPlanInformations(user)
			.then(response => {
				console.log(response.data);
				setPlanInformations(response.data);
			})
			.catch(error => console.error(error));
	}, []);

	function formatDate(date) {
		const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
		date = new Date(date);
		return date.toLocaleDateString('pt-BR', options);
	}

	return (
		<SubscriberCardStyle>
			<img src={image03} alt='imagem ilustrativa do plano' />

			<h3>Plano:</h3>
			<p>{planInformations.type}</p>

			<h3>Data da assinatura:</h3>
			<p>{formatDate(planInformations.subscription_date)}</p>

			<h3>Próximas entregas:</h3>
			<ul>
				{planInformations.nextDeliveries.map(date => (
					<li key={date}>{formatDate(date)}</li>
				))}
			</ul>

			<h3>Produtos:</h3>
			<ul>
				{planInformations.products.map(product => (
					<li key={product}>{product}</li>
				))}
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
