import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';

import GlobalStyle from './GlobalStyle';

import routes from './routes/routes';
import Home from './routes/Home';
import Login from './routes/Login';
import SignUp from './routes/SignUp';
import NonSubscriber from './routes/NonSubscriber';
import Subscriber from './routes/Subscriber';
import PlanInformations from './routes/PlanInformations';
import AddressInformations from './routes/AddressInformations';
import Rating from './routes/Rating';
import FeedbackDetails from './routes/FeedbackDetails';
import ProtectedRoute from './routes/ProtectedRoute';

import UserContext from './contexts/UserContext';
import SubscriptionContext from './contexts/SubscriptionContext';

export default function App() {
	const [user, setUser] = useState({
		name: null,
		token: null,
		planType: null,
	});

	const [subscription, setSubscription] = useState({
		planTypeId: null,
		deliveryOptionId: null,
		productsList: [],
		address: {
			name: '',
			streetName: '',
			zipCode: '',
			city: '',
			state: '',
		},
	});
	return (
		<>
			<GlobalStyle />
			<UserContext.Provider value={{ user, setUser }}>
				<SubscriptionContext.Provider
					value={{ subscription, setSubscription }}
				>
					<BrowserRouter>
						<Routes>
							<Route path={routes.login} element={<Login />} />

							<Route path={routes.signUp} element={<SignUp />} />

							<Route
								path={routes.subscriber}
								element={
									<ProtectedRoute>
										<Subscriber />
									</ProtectedRoute>
								}
							/>

							<Route
								path={routes.rating}
								element={
									<ProtectedRoute>
										<Rating />
									</ProtectedRoute>
								}
							/>

							<Route
								path={routes.feedbackDetails}
								element={
									<ProtectedRoute>
										<FeedbackDetails />
									</ProtectedRoute>
								}
							/>

							<Route
								path={routes.nonSubscriber}
								element={
									<ProtectedRoute>
										<NonSubscriber />
									</ProtectedRoute>
								}
							/>

							<Route
								path={routes.planInformations}
								element={
									<ProtectedRoute>
										<PlanInformations />
									</ProtectedRoute>
								}
							/>

							<Route
								path={routes.addressInformations}
								element={
									<ProtectedRoute>
										<AddressInformations />
									</ProtectedRoute>
								}
							/>

							<Route path={routes.home} element={<Home />} />

							<Route
								path='*'
								element={<Navigate to={routes.home} />}
							/>
						</Routes>
					</BrowserRouter>
				</SubscriptionContext.Provider>
			</UserContext.Provider>
		</>
	);
}
