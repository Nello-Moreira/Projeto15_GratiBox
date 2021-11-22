import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import UserContext from '../contexts/UserContext';
import routes from './routes';

export default function Rating() {
	const navigate = useNavigate();
	const { user } = useContext(UserContext);

	useEffect(() => {
		if (!user.token) {
			navigate(routes.home);
		}
	}, [user.token]);
	return <div>Rating</div>;
}
