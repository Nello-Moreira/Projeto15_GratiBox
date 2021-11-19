import { useState } from 'react';

import LoginFormStyle from './LoginFormStyle';
import TextInput from './TextInput';
import DefaultButton from '../buttons/DefaultButton';

export default function SignUpForm() {
	const [loading, setLoading] = useState(false);
	const [inputs, setInputs] = useState({
		name: '',
		email: '',
		password: '',
		passwordCheck: '',
		avatarUrl: '',
	});

	function inputModifier(field, newValue) {
		if (loading) return;

		inputs[field] = newValue;
		setInputs({ ...inputs });
	}

	function formSubmit(event) {
		event.preventDefault();

		if (loading) return;

		setLoading(true);

		if (!(inputs.password === inputs.passwordCheck)) {
			inputModifier('password', '');
			inputModifier('passwordCheck', '');
			setLoading(false);

			alert(
				'As senhas inseridas não conferem. Por favor, insira as senhas novamente.'
			);
			return;
		}

		let requestBody = { ...inputs };
		delete requestBody.passwordCheck;

		setLoading(false);
	}

	return (
		<LoginFormStyle onSubmit={formSubmit}>
			<TextInput
				name='name'
				value={inputs.name}
				onChange={event => inputModifier('name', event.target.value)}
				placeholder='Nome'
				type='text'
				$autoComplete={true}
				required={true}
				$loading={loading}
			/>

			<TextInput
				name='email'
				value={inputs.email}
				onChange={event => inputModifier('email', event.target.value)}
				placeholder='Email'
				type='email'
				$autoComplete={true}
				required={true}
				$loading={loading}
			/>

			<TextInput
				name='password'
				value={inputs.password}
				onChange={event =>
					inputModifier('password', event.target.value)
				}
				placeholder='Senha'
				type='password'
				required={true}
				$loading={loading}
			/>

			<TextInput
				name='passwordCheck'
				value={inputs.passwordCheck}
				onChange={event =>
					inputModifier('passwordCheck', event.target.value)
				}
				placeholder='Confirme a senha'
				type='password'
				required={true}
				$loading={loading}
			/>

			<DefaultButton type='submit'>Cadastrar</DefaultButton>
		</LoginFormStyle>
	);
}
