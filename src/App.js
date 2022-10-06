import "./App.css";
import HomePage from "./components/home-page/home-page.component";
import SingleProject from "./components/single-project/single-project.component";
import { Routes, Route } from "react-router-dom";

import ScrollToTop from "./utils/scrollTop";

function App() {
	return (
		<div className="main-container-app">
			<div className="app">
				<ScrollToTop>
					<Routes>
						<Route path="/*" element={<HomePage />} />
						<Route path=":index" element={<SingleProject />} />
					</Routes>
				</ScrollToTop>
			</div>
		</div>
	);
}

export default App;
