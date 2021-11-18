import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import routes from './routes/routes';
import Home from './routes/Home';

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={routes.home} element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}
