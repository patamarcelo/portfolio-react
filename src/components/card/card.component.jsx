import * as React from "react";
// import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useNavigate } from 'react-router-dom'
import './card.styles.css'

export default function MediaCard(props) {
		const {project, description, photoUrl, projectName} = props;
		const maxLength = 104
		const navigation = useNavigate()
		const handlerNavigation = () => {
			navigation(`/${projectName}`)
		}	
	return (
		<div className="w-full  text-white p-6 card-media-container-main min-h-[48vh]">
			<CardMedia
				component="img"
				height="100"
				image={photoUrl}
				alt="green iguana"
                className="text-center max-h-[20vh]"
			/>
			<div className="">
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{project}
				</Typography>
				<Typography variant="body2" color="text.white" className="project-problem text-justify">
					{description.substring(0, maxLength) + '...'}
				</Typography>
			</CardContent>
			<CardActions>
				<div className="flex justify-start cursor-pointer pt-4 mt-2">
					<RemoveRedEyeIcon color="secondary" size="small" onClick={handlerNavigation}>More...</RemoveRedEyeIcon>
				</div>
			</CardActions>
			</div>
		</div>
	);
}
