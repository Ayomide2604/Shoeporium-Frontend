import { useEffect } from "react";
import CartTable from "../components/CartTable";
import BreadCrumb from "./../components/BreadCrumb";
import Coupon from "./../components/Coupon";
import useCartStore from "../store/useCartStore";
import CartSummary from "../components/CartSummary";
import { Link } from "react-router-dom";

const CartScreen = () => {
	const { fetchUserCart, removeFromCart, totalPrice, items } = useCartStore();

	useEffect(() => {
		fetchUserCart();
	}, [fetchUserCart]);
	return (
		<>
			<BreadCrumb title="Cart" />

			<section className="shopping-cart spad">
				<div className="container">
					<div className="row">
						<div className="col-lg-8">
							{items?.length > 0 ? (
								<CartTable items={items} onDelete={removeFromCart} />
							) : (
								<h2 className="mb-3">No Products Yet</h2>
							)}
							<div className="row d-flex">
								<div className="col-12 my-3">
									<div className="continue__btn">
										<Link to="/products">Continue Shopping</Link>
									</div>
								</div>
								{items?.length > 0 && (
									<div className="col-lg-6 col-md-6 col-sm-6">
										<div className="continue__btn update__btn">
											<a href="#">
												<i className="fa fa-spinner" /> Update cart
											</a>
										</div>
									</div>
								)}
							</div>
						</div>
						<div className="col-lg-4">
							<Coupon />
							{items?.length > 0 && <CartSummary total={totalPrice} />}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default CartScreen;
