import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const SingleProjectCarousel = ({picLinks}) => {
    return (
        <div className="flex justify-center w-4/5">
								<Carousel showArrows={true} autoPlay={true} infiniteLoop={true} >
									{picLinks.map((link, i) => {
										return (
											<div key={i}>
												<img src={link} alt={i} />
											</div>
										);
									})}
								</Carousel>
							</div>
    )
}

export default SingleProjectCarousel