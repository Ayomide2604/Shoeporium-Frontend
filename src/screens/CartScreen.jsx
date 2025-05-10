import { useEffect } from "react";
import CartTable from "../components/CartTable";
import BreadCrumb from "./../components/BreadCrumb";
import Coupon from "./../components/Coupon";
import useCartStore from "../store/useCartStore";
import CartSummary from "../components/CartSummary";
import { Link } from "react-router-dom";
import EmptyCart from "../components/EmptyCart";

const CartScreen = () => {
	const { fetchUserCart, removeFromCart, totalPrice, items, cartLoading } =
		useCartStore();

	useEffect(() => {
		fetchUserCart();
	}, [fetchUserCart]);
	return (
		<>
			<BreadCrumb title="Cart" />

			{cartLoading ? (
				<div id="preloder">
					<div className="loader"></div>
				</div>
			) : null}

			<section className="shopping-cart spad">
				<div className="container">
					<div className="row">
						<div className="col-lg-8">
							{items?.length > 0 ? (
								<CartTable items={items} onDelete={removeFromCart} />
							) : (
								<EmptyCart />
							)}
							<div className="row d-flex align-items-center">
								<div className="col-lg-6 ">
									<div className="continue__btn">
										<Link to="/products">Continue Shopping</Link>
									</div>
								</div>
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
