import heartIcon from "../assets/img/icon/heart.png";
import compareIcon from "../assets/img/icon/compare.png";
import searchIcon from "../assets/img/icon/search.png";
import Rating from "./Rating";
const Product = ({ image, title, price, rating }) => {
	return (
		<div className="product__item">
			<div
				className="product__item__pic set-bg"
				style={{
					backgroundImage: `url(${image})`,
				}}
			>
				<span className="label">New</span>
				<ul className="product__hover">
					<li>
						<a href="#">
							<img src={heartIcon} alt="" />
						</a>
					</li>
					<li>
						<a href="#">
							<img src={compareIcon} alt="" /> <span>Compare</span>
						</a>
					</li>
					<li>
						<a href="#">
							<img src={searchIcon} alt="" />
						</a>
					</li>
				</ul>
			</div>
			<div className="product__item__text">
				<h6>{title}</h6>
				<a href="#" className="add-cart">
					+ Add To Cart
				</a>
				<div className="rating">
					<Rating rating={rating} />
				</div>
				<h5>${price}</h5>
			</div>
		</div>
	);
};

export default Product;
