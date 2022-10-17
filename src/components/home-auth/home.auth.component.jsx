import Button from "@mui/material/Button";
import LoadingButton from '@mui/lab/LoadingButton';
import { useDispatch } from "react-redux";
import { setIsAuthUser } from "../../store/user/user.action";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import Avatar from "react-avatar";
import { client } from "../../utils/axios/axios.utils";
import { useState } from "react";

import Charts from "../chart/chart.component";

const HomeAuth = () => {
	const dispatch = useDispatch();
	const handlerLogout = () => dispatch(setIsAuthUser(false));
	const currentUser = useSelector(selectCurrentUser);
	const [riskData, setRiskData] = useState([]);
	const [chartRiskData, setChartRiskData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


	const handlerRisks = async () => {
        setIsLoading(true)
		try{
            await client("api/valutech/get_risks", {
                headers: { Authorization: `Token ${currentUser.token}` }
            })
        .then(data => {
            const dataApi = data.data.dados.reverse();
            console.log(dataApi);
            setRiskData(dataApi);
			setChartRiskData(data.data.dados)
        })
        } catch(e){
            console.log(e)
        } finally {
            setIsLoading(false)
        }
	};

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
			<div className="flex mt-10 justify-center">
				{!riskData.length > 0
					? <LoadingButton
							onClick={handlerRisks}
							variant="contained"
							color="primary"
							size="small"
							className="h-10 !pt-0 !px-4 !mr-15 !w-[160px]"
                            loading={isLoading}
                            loadingPosition="end"
                            >
							Get Risks
						</LoadingButton>
					: <Button
                    onClick={() => setRiskData([])}
                    variant="contained"
                    color="warning"
							size="small"
							className="h-10 !pt-0 !px-4"
						>
							Clear Risks
						</Button>}
			</div>
            {
                riskData.length > 0 ?
                <Charts newData={chartRiskData} />
                : null
            }
			{riskData.length > 0
				? <div className="flex mt-10 justify-center max-h-[50vh] bg-gray-300 rounded-lg w-4/5 self-center overflow-scroll">
						<ul>
							{riskData.map((data, index) => {
								return (
									<li key={index}>
										Data: {data.x} - Valor: {data.y}
									</li>
								);
							})}
						</ul>
					</div>
				: null}
		</div>
	);
};

export default HomeAuth;
