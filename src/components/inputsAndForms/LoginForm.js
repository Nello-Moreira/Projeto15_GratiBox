import { useState } from 'react';

import LoginFormStyle from './LoginFormStyle';
import TextInput from './TextInput';
import DefaultButton from '../buttons/DefaultButton';

export default function LoginForm({ loading, setLoading }) {
	const [inputs, setInputs] = useState({
		email: '',
		password: '',
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

		setLoading(false);
	}

	return (
		<LoginFormStyle onSubmit={formSubmit}>
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

			<DefaultButton type='submit' $loading={loading}>
				Entrar
			</DefaultButton>
		</LoginFormStyle>
	);
}
