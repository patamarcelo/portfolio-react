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
			text: "Chart.js Line Chart"
		}
	}
};

const Charts = ({ newData }) => {
	const labels = newData.map(data => {
		return data.x;
	});
	const dataRisk = newData.map(data => {
		return data.y;
	});

	const data = {
		labels,
		datasets: [
			{
				label: "Dataset 1",
				data: dataRisk,
				borderColor: "rgb(255, 99, 132)",
				backgroundColor: "rgba(255, 99, 132, 0.5)"
			}
		]
	};
	return (
		<div className="!bg-gray-300 !mt-10 !rounded-xl">
			<Line options={options} data={data} />
		</div>
	);
};

export default Charts;
