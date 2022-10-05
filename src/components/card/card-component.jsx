import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Img from './sample.jpg'
export default function MediaCard(props) {
	const { name } = props;
	
	return (
		<div className="w-full  p-0 bg-black text-white">
			<CardMedia
				component="img"
				height="140"
				image={Img}
				alt="green iguana"
                className="text-center"
			/>
			<div className="">
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{name}
				</Typography>
				<Typography variant="body2" color="text.white">
					Lizards are a widespread group of squamate reptiles, with
					over 6,000 species, ranging across all continents except
					Antarctica
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">See More...</Button>
			</CardActions>
			</div>
		</div>
	);
}
