import { useSelector, useDispatch } from "react-redux";
import {
	selectIsAuthUser,
	// selectCurrentUser
} from "../../store/user/user.selector";
import { setIsAuthUser, setUser } from "../../store/user/user.action";

import { useState } from "react";

import TextField from "@mui/material/TextField";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { client } from "../../utils/axios/axios.utils";

import {
	createNotification,
	TYPES_NOTIFICATION
} from "../../utils/notifications/notififications.utils";

const AuthPage = () => {
	const INITIAL_USER = {
		username: "",
		password: ""
	};
	const [currentPassword, setCurrentPassword] = useState(INITIAL_USER);

	const dispatch = useDispatch();
	const isAuth = useSelector(selectIsAuthUser);
	// const loggedUser = useSelector(selectCurrentUser);

	const handleAuth = async () => {
		await authUser(currentPassword);
	};

	const handlerInput = e => {
		const currentName = e.target.name;
		const currentValue = e.target.value;
		setCurrentPassword({ ...currentPassword, [currentName]: currentValue });
	};
	const handlePress = e => {
		if (e.key === "Enter") {
			handleAuth();
		}
	};

	const authUser = async credentials => {
		try {
			await client.post("auth/", credentials).then(response => {
				dispatch(setUser(response.data));
			});
			setCurrentPassword(INITIAL_USER);
			dispatch(setIsAuthUser(!isAuth));
			console.log("entrou");
			createNotification(
				TYPES_NOTIFICATION.success,
				"Succefull Loggin...",
			);
			setCurrentPassword(INITIAL_USER);
		} catch (e) {
			console.log(e);
			createNotification(
				TYPES_NOTIFICATION.warning,
				"Wrong Password",
				"Please Try Again"
			);
			console.log("password errado");
			setCurrentPassword(INITIAL_USER);
		}
	};

	return (
		<div className="grid h-screen place-items-center">
			<div className="flex flex-col items-center justify-center w-2/3 bg-gray-300 m-10 p-10 rounded-lg">
				<h1 className="mb-10">Login</h1>
				<Stack spacing={2} direction="column" className="w-3/5">
					<TextField
						id="outlined-username-input"
						label="Username"
						type="text"
						// autoComplete="current-password"
						name="username"
						value={currentPassword["username"]}
						onChange={handlerInput}
						onKeyPress={handlePress}
					/>
					<TextField
						id="outlined-password-input"
						label="Password"
						type="password"
						autoComplete="current-password"
						name="password"
						value={currentPassword["password"]}
						onChange={handlerInput}
						onKeyPress={handlePress}
					/>
					<Button onClick={handleAuth} variant="contained">
						Enter
					</Button>
				</Stack>
			</div>
		</div>
	);
};

export default AuthPage;
