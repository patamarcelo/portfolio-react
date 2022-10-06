import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { Projects } from "../data-json/data-json";

import { useNavigate } from "react-router-dom";

import IconButton from '@mui/material/IconButton';
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./single-project.styles.css";

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
				? <div className="flex flex-col items-center justify-center w-full min-h-[100vh]">
						<div className="mr-auto ml-4">
							<IconButton
								onClick={handlerHome}
								color="success"
								size="large"
							>
								<HomeIcon fontSize="inherit"/>
								</IconButton>
						</div>
						<div className="title flex mb-5">
							<h1 className="text-white">
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
					</div>
				: <div className="flex justify-center w-full min-h-[100vh]">
						<div>empty project</div>
					</div>}
		</Fragment>
	);
};

export default SingleProject;
