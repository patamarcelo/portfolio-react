import { useSelector, useDispatch } from "react-redux";
import { selectIsAuthUser } from "../../store/user/user.selector";
import { setIsAuthUser } from "../../store/user/user.action";

import { useState } from "react";

import TextField from "@mui/material/TextField";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";


import { createNotification } from '../../utils/notifications/notififications.utils'

const AuthPage = () => {
	

	const [currentPassword, setCurrentPassword] = useState("");

	const dispatch = useDispatch();
	const isAuth = useSelector(selectIsAuthUser);
	const handleAuth = () => {
		if (currentPassword === "#!/devmp") {
			dispatch(setIsAuthUser(!isAuth));
		} else {
			createNotification("warning", "Wrong Password", "Please Try Again");
			console.log("password errado");
			setCurrentPassword("");
		}
	};
	const handlerInput = e => {
		const currentValue = e.target.value;
		setCurrentPassword(currentValue);
	};
	const handlePress = e => {
		if (e.key === "Enter") {
			handleAuth();
		}
	};

	return (
		<div className="grid h-screen place-items-center">
			<div className="flex flex-col items-center justify-center w-1/3 bg-gray-300 m-10 p-10 rounded-lg">
				<h1 className="mb-10">Login</h1>
				<Stack spacing={2} direction="column">
					<TextField
						id="outlined-password-input"
						label="Password"
						type="password"
						autoComplete="current-password"
						name="password"
						value={currentPassword}
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
