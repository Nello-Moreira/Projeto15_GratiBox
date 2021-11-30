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

const getPlanOptions = () => axiosBase.get('/plan-options');

const getProducts = () => axiosBase.get('/products');

const getStates = token => axiosBase.get('/states', setAuthorization(token));

const postSubscription = (subscriptionBody, token) =>
	axiosBase.post('/subscribe', subscriptionBody, setAuthorization(token));

const getPlanInformations = ({ token }) =>
	axiosBase.get(`/plan-informations`, setAuthorization(token));

export {
	postSignUp,
	postLogin,
	getPlanOptions,
	getProducts,
	getStates,
	postSubscription,
	getPlanInformations,
};
