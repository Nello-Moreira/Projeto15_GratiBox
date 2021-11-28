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

	const [plans, setPlans] = useState([]);

	const [planOptions, setPlanOptions] = useState([]);

	const [deliveryOptions, setDeliveryOptions] = useState([]);

	const [productOptions, setProductOptions] = useState([]);

	useEffect(() => {
		getPlanOptions()
			.then(response => planOptionsHandler(response.data))
			.catch(error =>
				alert('Houve um erro. Por favor, recarregue a página.')
			);

		getProducts(user.token)
			.then(response => productsOptionsHandler(response.data))
			.catch(error =>
				alert('Houve um erro. Por favor, recarregue a página.')
			);
	}, []);

	useEffect(() => {
		const selectedOption = planOptions.find(
			element => element.checked === true
		);

		if (!selectedOption) return;

		deliveryOptionsHandler(
			plans.find(plan => plan.planTypeId === selectedOption.id)
		);

		setSubscription({
			...subscription,
			planTypeId: selectedOption.id,
			deliveryOptionId: null,
		});
	}, [planOptions]);

	useEffect(() => {
		const selectedOption = deliveryOptions.find(
			element => element.checked === true
		);

		if (!selectedOption) return;

		setSubscription({
			...subscription,
			deliveryOptionId: selectedOption.id,
		});
	}, [deliveryOptions]);

	useEffect(() => {
		const selectedOptions = productOptions.filter(
			element => element.checked === true
		);

		setSubscription({
			...subscription,
			productsList: selectedOptions.map(option => option.id),
		});
	}, [productOptions]);

	function planOptionsHandler(plans) {
		setPlans(plans);

		setPlanOptions(
			plans.map(plan => {
				return {
					id: plan.planTypeId,
					option: plan.planType,
					checked: subscription.planTypeId === plan.planTypeId,
				};
			})
		);
	}

	function deliveryOptionsHandler(plan) {
		return setDeliveryOptions(
			plan.deliveryOptions.map(option => {
				return {
					id: option.id,
					option: isNaN(option.name)
						? option.name
						: `Dia ${option.name}`,
					checked: subscription.deliveryOptionId === option.id,
				};
			})
		);
	}

	function productsOptionsHandler(products) {
		setProductOptions(
			products.map(product => {
				return {
					id: product.id,
					name: product.name,
					checked: subscription.productsList.includes(product.id),
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

				<SectionContentRadioInput
					isOpen={openSections.plan}
					sectionName={'planType'}
					inputs={planOptions}
					saveValue={setPlanOptions}
				/>
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

				{deliveryOptions.length === 0 ? (
					<Warning isOpen={openSections.delivery}>
						Selecione um tipo de plano
					</Warning>
				) : (
					<SectionContentRadioInput
						isOpen={openSections.delivery}
						sectionName={'delivery'}
						inputs={deliveryOptions}
						saveValue={setDeliveryOptions}
					/>
				)}
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

const Warning = styled.p`
	font-size: 16px;
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
