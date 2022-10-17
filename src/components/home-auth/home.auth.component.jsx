import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { setIsAuthUser } from "../../store/user/user.action";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import Avatar from "react-avatar";

import RiskData from '../risk-data/risk-data.component'

const HomeAuth = () => {
	const dispatch = useDispatch();
	const handlerLogout = () => dispatch(setIsAuthUser(false));
	const currentUser = useSelector(selectCurrentUser);
	
	return (
		<div className="flex flex-col w-full">
			<div className="flex justify-between w-full px-10">
				{currentUser && currentUser.image
					? <Avatar
							name="Foo Bar"
							src={currentUser.image}
							round={true}
							size="75"
						/>
					: null}
				<h1 className="text-white text-3xl mt-10">LOGGED USER AREA</h1>
				<Button
					onClick={handlerLogout}
					variant="contained"
					color="error"
					size="small"
					className="h-10 !pt-0 !px-4"
				>
					Log Out
				</Button>
			</div>

			<RiskData />
		
		</div>
	);
};

export default HomeAuth;
