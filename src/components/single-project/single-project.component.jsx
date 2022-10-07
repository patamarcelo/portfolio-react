import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { Projects } from "../data-json/data-json";

import { useNavigate } from "react-router-dom";

import IconButton from "@mui/material/IconButton";
// import Button from "@mui/material/Button";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { amber } from '@mui/material/colors';


import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./single-project.styles.css";

import SingleDescription from './single-project-description.component'


const SingleProject = () => {
	const { index } = useParams();
	const [project, setSingleProject] = useState();
	const [picLinks, setPicLinks] = useState([]);
	const navigate = useNavigate();

	const filterProject = () => {
		const isNameProject = project => project.name === index;
		const indexProject = Projects.findIndex(isNameProject);
		return Projects[indexProject];
	};
	const handleUrl = (projectName, index) => {
		return `https://storageapi.fleek.co/7d351ace-1fcf-4bc2-be39-c54631049d11-bucket/projects/${projectName}/f${index}.png`;
	};

	const createArrPictures = (name, number) => {
		const links = [];
		for (let i = 1; i < number; i++) {
			const link = handleUrl(name, i);
			links.push(link);
		}
		console.log(links);
		return links;
	};

	const handlerHome = () => navigate("/");

	useEffect(
		() => {
			const newFilterProject = filterProject();
			setSingleProject(newFilterProject.project);
			setPicLinks(
				createArrPictures(
					newFilterProject.name,
					newFilterProject.project.pictures
				)
			);
		},
		[index]
	);

	return (
		<Fragment>
			{project
				? <Fragment>
						<div className="mr-auto ml-4 top-0 left-4 absolute">
							<IconButton
								onClick={handlerHome}
								color="primary"
								size="large"
								style={{ fontSize: 40, fill: 'green' }}
							>
								<HomeOutlinedIcon fontSize="inherit" sx={{ color: amber[500] }}/>
							</IconButton>
						</div>
						<div className="flex flex-col items-center justify-center w-full min-h-[100vh] single-card-container pb-4">
							<div className="title flex mb-5">
								<h1 className="text-white mt-5">
									{project.title}
								</h1>
							</div>
							<div className="flex justify-center w-4/5">
								<Carousel showArrows={true} autoPlay={true}>
									{picLinks.map((link, i) => {
										return (
											<div>
												<img src={link} alt={i} />
											</div>
										);
									})}
								</Carousel>
							</div>
							<SingleDescription project={project} />
						</div>
					</Fragment>
				: <div className="flex justify-center w-full min-h-[100vh]">
						<div>empty project</div>
					</div>}
		</Fragment>
	);
};

export default SingleProject;
