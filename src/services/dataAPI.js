import axios from 'axios';

const axiosBase = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
});

const setAuthorization = token => {
	return {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
};

const postSignUp = signUpBody => axiosBase.post('/sign-up', signUpBody);

const postLogin = loginBody => axiosBase.post('/login', loginBody);

const getPlanOptions = (planType, token) =>
	axiosBase.get(
		`/plan-options?planType=${planType}`,
		setAuthorization(token)
	);

const getProducts = token =>
	axiosBase.get('/products', setAuthorization(token));

const getStates = token => axiosBase.get('/states', setAuthorization(token));

const postSubscription = (subscriptionBody, token) =>
	axiosBase.post('/subscribe', subscriptionBody, setAuthorization(token));

export {
	postSignUp,
	postLogin,
	getPlanOptions,
	getProducts,
	getStates,
	postSubscription,
};
