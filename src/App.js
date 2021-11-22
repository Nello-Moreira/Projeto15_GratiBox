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

import UserContext from './contexts/UserContext';

export default function App() {
	const [user, setUser] = useState({ name: '', token: '', planType: '' });
	return (
		<>
			<GlobalStyle />
			<UserContext.Provider value={{ user, setUser }}>
				<BrowserRouter>
					<Routes>
						<Route path={routes.login} element={<Login />} />

						<Route path={routes.signUp} element={<SignUp />} />

						<Route
							path={routes.nonSubscriber}
							element={<NonSubscriber />}
						/>

						<Route
							path={routes.subscriber}
							element={<Subscriber />}
						/>

						<Route
							path={routes.planInformations}
							element={<PlanInformations />}
						/>

						<Route
							path={routes.addressInformations}
							element={<AddressInformations />}
						/>

						<Route path={routes.rating} element={<Rating />} />

						<Route
							path={routes.feedbackDetails}
							element={<FeedbackDetails />}
						/>

						<Route path={routes.home} element={<Home />} />

						<Route
							path='*'
							element={<Navigate to={routes.home} />}
						/>
					</Routes>
				</BrowserRouter>
			</UserContext.Provider>
		</>
	);
}
