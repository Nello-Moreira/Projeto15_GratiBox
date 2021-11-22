import statusCode from '../services/statusCode';

const signUpErrors = error => {
	if (error.message === 'Network Error') {
		return 'O servidor está fora do ar';
	}

	switch (error.response.status) {
		case statusCode.badRequest:
			return 'Preencha todos os campos corretamente';

		case statusCode.conflict:
			return 'Este e-mail já está em uso';

		default:
			return 'Houve um erro ao realizar o cadastro. Por favor, tente novamente.';
	}
};

const loginErrors = error => {
	if (error.message === 'Network Error') {
		return 'O servidor está fora do ar';
	}

	switch (error.response.status) {
		case statusCode.badRequest:
			return 'Preencha todos os campos corretamente';

		case statusCode.notFound:
			return 'E-mail ou senha incorreto';

		default:
			return 'Houve um erro ao realizar o login. Por favor, tente novamente.';
	}
};

export { signUpErrors, loginErrors };
