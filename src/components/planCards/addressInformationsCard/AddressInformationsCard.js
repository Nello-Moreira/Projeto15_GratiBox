import styled from 'styled-components';

import image03 from '../../../assets/image03.jpg';
import WhiteCard from '../WhiteCard';
import AddressInput from '../../inputsAndForms/AddressInput';
import CityInputsContainer from '../../containers/CityInputsContainer';
import StateContainer from './StateContainer';

export default function AddressInformationsCard({
	loading,
	address,
	setAddress,
}) {
	return (
		<WhiteCard>
			<img src={image03} alt='imagem ilustrativa do plano' />
			<AddressInput
				name='name'
				value={address.name}
				onChange={event =>
					loading
						? null
						: setAddress({ ...address, name: event.target.value })
				}
				placeholder='Nome completo'
				type='text'
				$autoComplete={true}
				required={true}
				$loading={loading}
			/>
			<AddressInput
				name='zipCode'
				value={address.zipCode}
				onChange={event =>
					loading
						? null
						: setAddress({
								...address,
								zipCode: event.target.value,
						  })
				}
				placeholder='Cep'
				type='text'
				$autoComplete={true}
				required={true}
				$loading={loading}
			/>
			<AddressInput
				name='streetName'
				value={address.streetName}
				onChange={event =>
					loading
						? null
						: setAddress({
								...address,
								streetName: event.target.value,
						  })
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
					value={address.city}
					onChange={event =>
						loading
							? null
							: setAddress({
									...address,
									city: event.target.value,
							  })
					}
					placeholder='Cidade'
					type='text'
					$autoComplete={true}
					required={true}
					$loading={loading}
				/>

				<StateContainer
					selectedState={address.state}
					setSelectedState={state =>
						setAddress({ ...address, state: state })
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
