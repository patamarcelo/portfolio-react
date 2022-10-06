import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Img from './sample.jpg'
export default function MediaCard(props) {
		const {project, description, photoUrl} = props;
		const maxLength = 165
	return (
		<div className="w-full  text-white p-6 card-media-container-main">
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
				<Button size="small">See More...</Button>
			</CardActions>
			</div>
		</div>
	);
}
