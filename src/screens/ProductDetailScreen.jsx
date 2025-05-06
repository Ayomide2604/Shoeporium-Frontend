import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";

import BreadCrumb from "../components/BreadCrumb";
import Rating from "../components/Rating";
import RelatedProducts from "../pages/RelatedProducts";
import useProductStore from "../store/useProductstore";

const ProductDetailScreen = () => {
	const { id } = useParams();
	const { product, products, fetchProducts, fetchProductById } =
		useProductStore();

	const [quantity, setQuantity] = useState(1);
	const [liked, setLiked] = useState(false);

	useEffect(() => {
		if (products.length === 0) {
			fetchProducts().then(() => fetchProductById(id));
		} else {
			fetchProductById(id);
		}
	}, [id]);

	const relatedProducts = products.filter(
		(p) => p.collection.id === product?.collection.id && p.id !== product?.id
	);

	if (!product) return <div>Loading product...</div>;

	return (
		<>
			<section className="shop-details">
				<div className="product__details__pic">
					<div className="container">
						<BreadCrumb title={product?.name} />
						<div className="row d-flex justify-content-center align-items-center">
							<div className="col-lg-6 col-md-6">
								<div className="tab-content">
									<div>
										<div className="product__details__pic__item">
											<img
												src={product?.images?.[0]?.image_url}
												alt={product?.name}
												height="auto"
												className="mb-3"
												style={{ objectFit: "contain" }}
											/>
										</div>
									</div>
								</div>
							</div>

							<div className=" product__details__content col-lg-6 col-md-6">
								<div className="product__details__text">
									<p className="text-left">{product?.description}</p>
									<h3 className="text-left">${product?.price}</h3>
									<div className="rating d-flex align-items-center">
										<Rating rating={4} />
										<span> - 5 Reviews</span>
									</div>

									<div className="product__details__cart__option text-left">
										<div className="quantity mr-3">
											<div className="pro-qty w-100 h-100">
												<button
													onClick={() => setQuantity((q) => Math.max(1, q - 1))}
													className="btn primary-btn mr-2"
												>
													-
												</button>
												<input
													type="number"
													min={1}
													value={quantity}
													onChange={(e) => setQuantity(Number(e.target.value))}
													className="mr-2"
												/>
												<button
													className="btn primary-btn"
													onClick={() => setQuantity(quantity + 1)}
												>
													+
												</button>
											</div>
										</div>
										<Link className="btn primary-btn">Add to cart</Link>
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

			<RelatedProducts products={relatedProducts.slice(0, 8)} />
		</>
	);
};

export default ProductDetailScreen;
