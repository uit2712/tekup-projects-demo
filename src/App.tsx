import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ROUTE_PATH_NAMES from '@Core/Constants/Routes';
import Home from '@Presentation/UI/Pages/Home';

function App() {
	return (
		<Router>
			<Routes>
				<Route path={ROUTE_PATH_NAMES.home} element={<Home />} />
			</Routes>
		</Router>
	);
}

export default App;
