import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Details from './routes/Details';
import Home from './routes/Home';
interface I_ToggleRouterProps {}
function Router({}: I_ToggleRouterProps) {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path={process.env.PUBLIC_URL} element={<Home />} />
					<Route path={process.env.PUBLIC_URL + '/:id'} element={<Details />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default Router;
