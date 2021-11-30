import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import routes from '../../routes/routes';

import UserContext from '../../contexts/UserContext';

import LoginFormStyle from './LoginFormStyle';
import TextInput from './TextInput';
import DefaultButton from '../buttons/DefaultButton';

import { postLogin } from '../../services/dataAPI';
import { loginErrors } from '../../helpers/responseErrors';

export default function LoginForm({ loading, setLoading }) {
	const { setUser } = useContext(UserContext);
	const navigate = useNavigate();
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

		postLogin(inputs)
			.then(response => {
				setUser(response.data);
				if (!response.data.isSubscriber) {
					return navigate(routes.nonSubscriber);
				}
				navigate(routes.subscriber);
			})
			.catch(error => alert(loginErrors(error)));
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
