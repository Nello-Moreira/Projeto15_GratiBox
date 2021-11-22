import { useNavigate } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import UserContext from '../contexts/UserContext';
import routes from './routes';

import CircleLoader from '../components/loaders/CircleLoader';

export default function FeedbackDetails() {
	const navigate = useNavigate();
	const { user } = useContext(UserContext);
	const [pageFirstLoad, setPageFirstLoad] = useState(true);

	useEffect(() => {
		if (!user.token) {
			navigate(routes.home);
		}
		setPageFirstLoad(false);
	}, [user.token]);

	return pageFirstLoad ? <CircleLoader /> : <div>{'FeedbackDetails'}</div>;
}
