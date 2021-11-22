import styled from 'styled-components';
import { useState, useEffect, useContext } from 'react';

import image03 from '../../../assets/image03.jpg';

import WhiteCard from '../WhiteCard';
import SectionTitle from '../SectionTitle';
import SectionContentRadioInput from './SectionContentRadioInput';
import SectionContentCheckboxInput from './SectionContentCheckboxInput';

import SubscriptionContext from '../../../contexts/SubscriptionContext';
import UserContext from '../../../contexts/UserContext';

import { getPlanOptions, getProducts } from '../../../services/dataAPI';

export default function PlanInformationsCard() {
	const { user } = useContext(UserContext);
	const { subscription, setSubscription } = useContext(SubscriptionContext);
	const [openSections, setOpenSections] = useState({
		plan: false,
		delivery: false,
		products: false,
	});

	const [deliveryOptions, setDeliveryOptions] = useState([]);

	const [productOptions, setProductOptions] = useState([]);

	useEffect(() => {
		getPlanOptions(subscription.planType, user.token)
			.then(response => planOptionsHandler(response.data))
			.catch(error =>
				alert('Houve um erro. Por favor, recarregue a página.')
			);

		getProducts(user.token)
			.then(response =>
				setProductOptions(
					response.data.map(product => {
						return { name: product.name, checked: true };
					})
				)
			)
			.catch(error =>
				alert('Houve um erro. Por favor, recarregue a página.')
			);
	}, []);

	useEffect(() => {
		const selectedOption = deliveryOptions.find(
			element => element.checked === true
		);

		if (!selectedOption) return;

		setSubscription({
			...subscription,
			deliveryOption: selectedOption.name,
		});
	}, [deliveryOptions]);

	useEffect(() => {
		const selectedOptions = productOptions.filter(
			element => element.checked === true
		);

		setSubscription({
			...subscription,
			selectedProducts: selectedOptions.map(option => option.name),
		});
		console.log(subscription);
	}, [productOptions]);

	function planOptionsHandler(options) {
		if (isNaN(options[0].name)) {
			return setDeliveryOptions(
				options.map(option => {
					return {
						option: option.name,
						checked: false,
						name: option.name,
					};
				})
			);
		}
		return setDeliveryOptions(
			options.map(option => {
				return {
					option: `Dia ${option.name}`,
					checked: false,
					name: option.name,
				};
			})
		);
	}

	return (
		<PlanInformationsCardStyle>
			<img src={image03} alt='imagem ilustrativa do plano' />
			<section>
				<SectionTitle
					isOpen={openSections.plan}
					changeState={() =>
						setOpenSections({
							...openSections,
							plan: !openSections.plan,
						})
					}
				>
					Plano
				</SectionTitle>

				<PlanType isOpen={openSections.plan}>
					{subscription.planType}
				</PlanType>
			</section>

			<section>
				<SectionTitle
					isOpen={openSections.delivery}
					changeState={() =>
						setOpenSections({
							...openSections,
							delivery: !openSections.delivery,
						})
					}
				>
					Entrega
				</SectionTitle>

				<SectionContentRadioInput
					isOpen={openSections.delivery}
					sectionName={'delivery'}
					inputs={deliveryOptions}
					saveValue={setDeliveryOptions}
				/>
			</section>

			<section>
				<SectionTitle
					isOpen={openSections.products}
					changeState={() =>
						setOpenSections({
							...openSections,
							products: !openSections.products,
						})
					}
				>
					Quero receber
				</SectionTitle>

				<SectionContentCheckboxInput
					isOpen={openSections.products}
					sectionName={'products'}
					inputs={productOptions}
					saveValue={setProductOptions}
				/>
			</section>
		</PlanInformationsCardStyle>
	);
}

const PlanInformationsCardStyle = styled(WhiteCard)`
	section {
		box-sizing: border-box;
		width: 100%;
		padding: 10px;
		margin-bottom: 7px;
		background-color: #e0d1ed9e;
		border-radius: 5px;
	}
`;

const PlanType = styled.p`
	font-size: 18px;
	font-weight: 400;
	color: #4d65a8;
	height: auto;
	max-height: ${({ isOpen }) => (isOpen ? '50vh' : '0px')};
	margin: ${({ isOpen }) => (isOpen ? '10px 0 0 10px' : '0px 0 0 10px')};
	overflow-y: hidden;
	opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
	transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out,
		margin 0.3s ease-in-out;
`;
