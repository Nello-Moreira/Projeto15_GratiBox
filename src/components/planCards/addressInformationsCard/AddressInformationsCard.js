import styled from 'styled-components';
import { useContext } from 'react';

import SubscriptionContext from '../../../contexts/SubscriptionContext';

import image03 from '../../../assets/image03.jpg';
import WhiteCard from '../WhiteCard';
import AddressInput from '../../inputsAndForms/AddressInput';
import CityInputsContainer from '../../containers/CityInputsContainer';
import StateContainer from './StateContainer';

export default function AddressInformationsCard({ loading }) {
	const { subscription, setSubscription } = useContext(SubscriptionContext);

	function saveNewAddressState(field, value) {
		if (loading) return;
		subscription.address[field] = value;
		setSubscription({ ...subscription });
	}

	return (
		<WhiteCard>
			<img src={image03} alt='imagem ilustrativa do plano' />
			<AddressInput
				name='name'
				value={subscription.address.name}
				onChange={event =>
					saveNewAddressState('name', event.target.value)
				}
				placeholder='Nome completo'
				type='text'
				$autoComplete={true}
				required={true}
				$loading={loading}
			/>
			<AddressInput
				name='zipCode'
				value={subscription.address.zipCode}
				onChange={event =>
					saveNewAddressState('zipCode', event.target.value)
				}
				placeholder='Cep'
				type='text'
				$autoComplete={true}
				required={true}
				$loading={loading}
			/>
			<AddressInput
				name='streetName'
				value={subscription.address.streetName}
				onChange={event =>
					saveNewAddressState('streetName', event.target.value)
				}
				placeholder='Endereço de entrega'
				type='text'
				$autoComplete={true}
				required={true}
				$loading={loading}
			/>
			<CityInputsContainer>
				<CityInput
					name='city'
					value={subscription.address.city}
					onChange={event =>
						saveNewAddressState('city', event.target.value)
					}
					placeholder='Cidade'
					type='text'
					$autoComplete={true}
					required={true}
					$loading={loading}
				/>

				<StateContainer
					selectedState={subscription.address.state}
					setSelectedState={state =>
						saveNewAddressState('state', state)
					}
					loading={loading}
				/>
			</CityInputsContainer>
		</WhiteCard>
	);
}

const CityInput = styled(AddressInput)`
	width: 60%;

	@media (max-width: 350px) {
		width: 100%;
	}
`;
