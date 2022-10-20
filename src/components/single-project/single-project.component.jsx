import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { Projects } from "../data-json/data-json";

import { useNavigate } from "react-router-dom";

import IconButton from "@mui/material/IconButton";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { amber } from '@mui/material/colors';

import { selectIsLoading } from '../../store/system/system.selector'
import { setIsLoading } from '../../store/system/system.action'
import { useSelector, useDispatch } from 'react-redux';


import "./single-project.styles.css";

import SingleDescription from './single-project-description.component'
import SingleProjectCarousel from './single-project-carousel.component'
import CardSkeleton from '../skeleton/skeleton-card.component'


const SingleProject = () => {
	const dispatch = useDispatch();
	const isLoading = useSelector(selectIsLoading)

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
		for (let i = 1; i < number + 1; i++) {
			const link = handleUrl(name, i);
			links.push(link);
		}
		return links;
	};

	const handlerPrevproject = () => {
		const maxProjects = Projects.length - 1
		const isNameProject = project => project.name === index;
		const currentProject = Projects.findIndex(isNameProject)
		let param = currentProject
		if(currentProject > 0) {
			param = currentProject - 1
		} else {
			param = maxProjects
		}
		const nextParam = Projects[param].name
		return navigate(`/${nextParam}`)
	}
	
		const handlerNextproject = () => {
		const maxProjects = Projects.length
		const isNameProject = project => project.name === index;
		const currentProject = Projects.findIndex(isNameProject)
		let param = currentProject
		if(currentProject < maxProjects - 1) {
			param = currentProject + 1 
		} else {
			param = 0
		}
		let nextParam = Projects[param].name
		return navigate(`/${nextParam}`)

	}

	const handlerHome = () => navigate("/");
	
	
	useEffect(() => {
		dispatch(setIsLoading(true))
		console.log('set true is loading....', isLoading)
		setTimeout(() => {
			dispatch(setIsLoading(false))
			console.log('take true of inside setTimeout...', isLoading)
		},2000)
	},[])
	

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
			{
				isLoading && 
				<CardSkeleton />
			}
			{project && !isLoading &&
				<Fragment>
					<div className="lg:mb-0 mb-20">
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
						<div className="ml-auto mr-4 top-0 right-4 absolute">
							<div className="flex justify-between items-end">
							<IconButton
								onClick={handlerPrevproject}
								color="primary"
								size="large"
								style={{ fontSize: 40, fill: 'green' }}
								>
								<KeyboardDoubleArrowLeftIcon fontSize="inherit" sx={{ color: amber[500] }}/>
							</IconButton>
								<p className="text text-white text-sm pb-[10px]">Projects</p>
							{
								handlerNextproject &&
								<IconButton
								onClick={handlerNextproject}
								color="primary"
								size="large"
								style={{ fontSize: 40, fill: 'green' }}
								>
									<KeyboardDoubleArrowRightIcon fontSize="inherit" sx={{ color: amber[500] }}/>
							</IconButton>
								}
								</div>
						</div>
						</div>	
						<div className="flex flex-col items-center justify-center w-full min-h-[100vh] single-card-container pb-0 rounded-bl-lg rounded-br-lg
						md:rounded-none  md:pb-4">
							<div className="title flex mb-5 sm:justify-center text-center">
								<h1 className="text-white mt-5 text-sm md:text-3xl">
									{project.title}
								</h1>
							</div>
							<SingleProjectCarousel picLinks={picLinks} />
							<SingleDescription project={project} />
						</div>
					</Fragment>
				}
				{ !project && isLoading &&
					<div className="flex justify-center w-full min-h-[100vh]">
						<div>empty project</div>
					</div>
				}
				
		</Fragment>
	);
};

export default SingleProject;
