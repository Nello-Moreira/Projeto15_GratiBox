import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import routes from './routes';
import PlanInformations from './PlanInformations';
import Address from './Address';

export default function Subscribe() {
	const navigate = useNavigate();

	useEffect(() => {
		navigate(routes.planInformations);
	}, []);

	return (
		<Routes>
			<Route
				path={routes.planInformations}
				element={<PlanInformations teste='teste' />}
			/>

			<Route path={routes.address} element={<Address />} />
		</Routes>
	);
}
