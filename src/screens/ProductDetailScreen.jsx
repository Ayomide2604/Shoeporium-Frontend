import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";

import BreadCrumb from "../components/BreadCrumb";
import productJson from "../data/productJson";
import Rating from "../components/Rating";
import RelatedProducts from "./RelatedProducts";

const ProductDetailScreen = () => {
	const { id } = useParams();
	const product = productJson.find((product) => product.id === parseInt(id));
	const relatedProducts = productJson.filter(
		(related) => related.category == product.category
	);
	console.log(relatedProducts);
	const [quantity, setQuantity] = useState(1);
	const [liked, setLiked] = useState(false);

	const onQuantityChange = (e) => {
		setQuantity(e.target.value);
	};

	return (
		<>
			<section className="shop-details">
				<div className="product__details__pic">
					<div className="container">
						<BreadCrumb title={product.title} />
						<div className="row d-flex justify-content-center align-items-center">
							<div className="col-lg-6 col-md-6">
								<div className="tab-content">
									<div className="">
										<div className="product__details__pic__item">
											<img
												src={product.image}
												alt=""
												height="100%"
												width="100%"
												className="mb-3"
											/>
										</div>
									</div>
								</div>
							</div>

							<div className=" product__details__content col-lg-6 col-md-6">
								<div className="  product__details__text">
									<p className="text-left">{product.description}</p>
									<h3 className="text-left">${product.price}</h3>
									<div className="rating d-flex align-items-center">
										<Rating rating={product.rating} />
										<span> - 5 Reviews</span>
									</div>

									<div className="product__details__cart__option text-left">
										<div className="quantity mr-3 ">
											<div className="pro-qty w-100 h-100">
												<button
													onClick={() => {
														setQuantity(quantity - 1);
													}}
													className="btn primary-btn mr-2"
													disabled={quantity < 1 ? true : false}
												>
													-
												</button>
												<input
													type="number"
													min={1}
													value={quantity}
													onChange={onQuantityChange}
													className="mr-2"
													style={{ height: "100%", overflow: "hidden" }}
												/>
												<button
													className="btn primary-btn "
													onClick={() => {
														setQuantity(quantity + 1);
													}}
												>
													+
												</button>
											</div>
										</div>
										<Link className="btn primary-btn">add to cart</Link>
									</div>
									<div
										onClick={() => setLiked(!liked)}
										className="product__details__btns__option text-left d-flex align-items-center"
									>
										{liked ? (
											<IoMdHeart className="mr-2" />
										) : (
											<IoMdHeartEmpty className="mr-2" />
										)}

										<Link>
											{liked ? "Remove from wishlist" : "Add to wishlist"}
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<RelatedProducts products={relatedProducts} />
		</>
	);
};

export default ProductDetailScreen;
