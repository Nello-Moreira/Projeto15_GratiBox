import { Routes, Route, Navigate } from 'react-router-dom';
import routes from './routes';
import PlanInformations from './PlanInformations';
import Address from './Address';

export default function Subscribe() {
	return (
		<Routes>
			<Route
				path={routes.planInformations}
				element={<PlanInformations />}
			/>

			<Route path={routes.address} element={<Address />} />

			<Route path='*' element={<Navigate to={routes.home} />} />
		</Routes>
	);
}
