import styled from 'styled-components';
import { useState } from 'react';

import image03 from '../../../assets/image03.jpg';
import WhiteCard from '../WhiteCard';
import SectionTitle from './SectionTitle';
import SectionContentRadioInput from './SectionContentRadioInput';

export default function PlanInformationsCard() {
	const [openSections, setOpenSections] = useState({
		plan: false,
		delivery: false,
		products: false,
	});

	const [planOptions, setPlanOptions] = useState([
		{ option: 'Semanal', checked: false },
		{ option: 'Mensal', checked: false },
	]);

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
