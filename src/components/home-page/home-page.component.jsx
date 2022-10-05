import "./home-page.styles.css";
import MediaCard from "../card/card-component";

const NAMES = [
	{ name: "ricefoods" },
	{ name: "binance" },
	{ name: "bot" },
	{ name: "vuejs" }
];
const HomePage = () => {
	return (
		<div className="rounded  p-2 home-page-container">
			<div className="my-1 flex flex-column w-full items-center justify-center">
				<h1 className="title text-white">PORTFOLIO</h1>
			</div>
			{/* <div className="flex justify-between w-full flex-wrap"> */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-2 ">
				{NAMES.map(names => {
					return (
						<div key={names.name} className="flex flex-col mt-5">
							<MediaCard
								className="media-card-container"
								name={names.name}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default HomePage;
