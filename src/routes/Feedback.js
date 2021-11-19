import { Routes, Route, Navigate } from 'react-router-dom';
import routes from './routes';
import Rating from './Rating';
import FeedbackDetails from './FeedbackDetails';

export default function Feedback() {
	return (
		<Routes>
			<Route path={routes.rating} element={<Rating />} />

			<Route
				path={routes.feedbackDetails}
				element={<FeedbackDetails />}
			/>

			<Route path='*' element={<Navigate to={routes.home} />} />
		</Routes>
	);
}
