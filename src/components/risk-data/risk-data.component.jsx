import Button from "@mui/material/Button";
import LoadingButton from '@mui/lab/LoadingButton';
import Charts from "../chart/chart.component";

import { useState } from 'react'
import { client } from "../../utils/axios/axios.utils";

import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";

import RiskDataTable from '../risk-data-table/risk-data-table.component'

const RiskData = () => {
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

    const clearData = () => {
        setRiskData([])
        setChartRiskData([])
    }

    return (
        <>
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
                    onClick={clearData}
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
            <div className="flex flex-col w-full mt-5">
                <div className="flex justify-between items-top w-full px-4 py-3">
                    <div className="w-4/5">
                        <Charts newData={chartRiskData} />
                    </div>
                    <div className="w-1/5 flex justify-end">
                        <RiskDataTable riskData={riskData}/>
                    </div>
                </div>
            </div>

                : null
            }
        </>
    )
}

export default RiskData;