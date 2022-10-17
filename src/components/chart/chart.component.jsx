import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
} from "chart.js";
import { Line } from "react-chartjs-2";
// import faker from "faker";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

export const options = {
	responsive: true,
	plugins: {
		legend: {
			position: "top"
		},
		title: {
			display: true,
			text: "Chart Data"
		}
	}
};

const Charts = ({ newData }) => {
	const reversedData = newData.reverse()
	const labels = reversedData.map(data => {
		return data.x;
	});
	const dataRisk = reversedData.map(data => {
		return data.y;
	});

	const data = {
		labels,
		datasets: [
			{
				label: "Brazil Risk",
				data: dataRisk,
				borderColor: "rgb(255, 99, 132)",
				backgroundColor: "rgba(255, 99, 132, 0.5)"
			}
		]
	};
	return (
		<>
		{
			newData.length > 0 ? 
			<div className="!bg-white !rounded-xl">
				<Line options={options} data={data} />
			</div>
			: null
		}
		</>
	);
};

export default Charts;
