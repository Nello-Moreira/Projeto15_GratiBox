import styled from 'styled-components';
import { useState, useEffect } from 'react';

import image03 from '../../../assets/image03.jpg';
import WhiteCard from '../WhiteCard';
import SectionTitle from '../SectionTitle';
import SectionContentRadioInput from './SectionContentRadioInput';
import SectionContentCheckboxInput from './SectionContentCheckboxInput';

export default function PlanInformationsCard() {
	const [openSections, setOpenSections] = useState({
		plan: false,
		delivery: false,
		products: false,
	});

	const [planOptions, setPlanOptions] = useState([
		{ option: 'Semanal', checked: true },
		{ option: 'Mensal', checked: false },
	]);

	const [deliveryOptions, setDeliveryOptions] = useState([
		{ option: 'Segunda-feira', checked: true },
		{ option: 'Quarta-feira', checked: false },
		{ option: 'Sexta-feira', checked: false },
	]);

	const [productOptions, setProductOptions] = useState([
		{ option: 'Chás', checked: true },
		{ option: 'Incensos', checked: true },
		{ option: 'Produtos Orgânicos', checked: true },
	]);

	useEffect(() => {
		const weekOptions = ['Segunda-feira', 'Quarta-feira', 'Sexta-feira'];
		const monthOptions = ['Dia 1', 'Dia 10', 'Dia 20'];

		if (planOptions.find(item => item.option === 'Semanal').checked) {
			setDeliveryOptions(
				deliveryOptions.map((item, i) => ({
					...item,
					option: weekOptions[i],
				}))
			);
			return;
		}
		setDeliveryOptions(
			deliveryOptions.map((item, i) => ({
				...item,
				option: monthOptions[i],
			}))
		);
	}, [planOptions]);

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
					sectionName={'plan'}
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
