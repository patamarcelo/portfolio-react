import "./App.css";
import HomePage from "./components/home-page/home-page.component";
import SingleProject from "./components/single-project/single-project.component";
import AuthPage from "./routes/auth/auth.component";
import CardSkeleton from "./components/skeleton/skeleton-card.component"

import HomeAuth from "./components/home-auth/home.auth.component";
import NotFoundPage from "./routes/error-page/not-found.component";

import { Routes, Route, Navigate } from "react-router-dom";

import { useState, Fragment } from "react";

import { useSelector } from "react-redux";
import { selectIsAuthUser } from "./store/user/user.selector";

import ScrollToTop from "./utils/scrollTop";

import "react-notifications/lib/notifications.css";
import { NotificationContainer } from "react-notifications";

function App() {
	// const [isAuth, setIsAuth] = useState(true);
	const isAuth = useSelector(selectIsAuthUser);

	return (
		<>
			<NotificationContainer />
			<div className="main-container-app">
				<div className="app">
					<ScrollToTop>
						<Routes>
							<Route path="/" element={<HomePage />} />
							<Route path=":index" element={<SingleProject />} />
							<Route
								path="/admin"
								element={!isAuth ? <AuthPage /> : <HomeAuth />}
							/>
							<Route path="/skeleton" element={<CardSkeleton />} />

						</Routes>
					</ScrollToTop>
				</div>
			</div>
		</>
	);
}

export default App;
