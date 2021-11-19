import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import routes from './routes/routes';
import Home from './routes/Home';
import Login from './routes/Login';
import SignUp from './routes/SignUp';
import NonSubscriber from './routes/NonSubscriber';
import Subscriber from './routes/Subscriber';
import Subscribe from './routes/Subscribe';
import Feedback from './routes/Feedback';

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={routes.login} element={<Login />} />

				<Route path={routes.signUp} element={<SignUp />} />

				<Route
					path={routes.nonSubscriber}
					element={<NonSubscriber />}
				/>

				<Route path={routes.subscriber} element={<Subscriber />} />

				<Route path={routes.subscribe} element={<Subscribe />} />

				<Route path={routes.feedback} element={<Feedback />} />

				<Route path={routes.home} element={<Home />} />

				<Route path='*' element={<Navigate to={routes.home} />} />
			</Routes>
		</BrowserRouter>
	);
}
