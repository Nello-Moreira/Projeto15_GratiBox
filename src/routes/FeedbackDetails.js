import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import UserContext from '../contexts/UserContext';
import routes from './routes';

export default function FeedbackDetails() {
	const navigate = useNavigate();
	const { user } = useContext(UserContext);

	useEffect(() => {
		if (!user.token) {
			navigate(routes.home);
		}
	}, [user.token]);

	return <div>FeedbackDetails</div>;
}
