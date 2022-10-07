import "./home-page.styles.css";
import MediaCard from "../card/card.component";
import { Projects } from "../data-json/data-json";


const HomePage = () => {
	const handleUrl = (projectName, index) => {
		return `https://storageapi.fleek.co/7d351ace-1fcf-4bc2-be39-c54631049d11-bucket/projects/${projectName}/f${index}.png`;
	};

	const toTitleCase = str => {
		return str.replace(/\w\S*/g, function(txt) {
			return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
		});
	};

	return (
		<div className="rounded  p-2 home-page-container">
			<div className="my-1 flex flex-column w-full items-center justify-center">
				<h1 className="title text-white">PORTFOLIO</h1>
			</div>
			<div>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-2 ">
					{Projects.map((project, index) => {
						return (
							<div
								key={project.name}
								className="flex flex-col mt-5"
							>
								<MediaCard
									className="media-card-container"
									project={toTitleCase(project.project.title)}
									description={project.project.problem}
									photoUrl={handleUrl(project.name, 1)}
									indexProject={index}
									projectName={project.name}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default HomePage;
