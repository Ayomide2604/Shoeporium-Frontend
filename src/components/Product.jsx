import { Link } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import heartIcon from "../assets/img/icon/heart.png";
import compareIcon from "../assets/img/icon/compare.png";
import searchIcon from "../assets/img/icon/search.png";
import Rating from "./Rating";
const Product = ({ id, image, title, price, rating }) => {
	return (
		<div className="product__item">
			{/* <Link to={`/products/${id}`}> */}
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
							<img src={compareIcon} alt="" /> <span>Compare</span>
						</li>
						<li>
							<a href="#">
								<img src={searchIcon} alt="" />
							</a>
						</li>
					</ul>
				</div>
			{/* </Link> */}

			<div className="product__item__text">
				<h6>{title}</h6>
				<a href="#" className="add-cart ">
					<MdOutlineShoppingCart />
					Add To Cart
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
