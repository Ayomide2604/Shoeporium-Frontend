import { Link, useNavigate } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import defaultProduct from "../assets/img/default_product.jpg";
import Rating from "./Rating";
import { FaRegHeart, FaRegEye } from "react-icons/fa";
import useCartStore from "../store/useCartStore";
import formatter from "../utils/currencyFormatter";
const Product = ({ id, image, name, price, rating }) => {
	const navigate = useNavigate();
	const { addToCart } = useCartStore();
	return (
		<div className="product__item">
			<div
				className="product__item__pic set-bg"
				style={{
					backgroundImage: `url(${image}) ` || defaultProduct,
					backgroundSize: "contain",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					cursor: "pointer",
				}}
			>
				<span
					className="label text-white"
					style={{ backgroundColor: "#F7941D" }}
				>
					New
				</span>
				<ul className="product__hover">
					<li>
						<button className="btn bg-light ">
							<FaRegHeart /> <span>Wishlist</span>
						</button>
					</li>
					<Link to={`/products/${id}`}>
						<li>
							<button className="btn bg-light">
								<FaRegEye /> <span>View</span>
							</button>
						</li>
					</Link>
				</ul>
			</div>

			<div className="product__item__text">
				<h6>{name}</h6>
				<a
					onClick={() => addToCart(id)}
					style={{ cursor: "pointer", color: "#e53637" }}
				>
					<MdOutlineShoppingCart />
					Add To Cart
				</a>
				<div className="rating">
					<Rating rating={rating} />
				</div>
				<h5>{formatter.format(price)}</h5>
			</div>
		</div>
	);
};

export default Product;
