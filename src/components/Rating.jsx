import StarRatings from "react-star-ratings";

const Rating = ({ rating }) => {
	return (
		<StarRatings
			rating={rating}
			starRatedColor="#F7941D"
			starEmptyColor="#ccc"
			numberOfStars={5}
			starDimension="15px"
			starSpacing="0px"
		/>
	);
};

export default Rating;
