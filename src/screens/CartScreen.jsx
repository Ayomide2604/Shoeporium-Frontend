import { useEffect } from "react";
import CartTable from "../components/CartTable";
import BreadCrumb from "./../components/BreadCrumb";
import Coupon from "./../components/Coupon";
import useCartStore from "../store/useCartStore";
import CartSummary from "../components/CartSummary";

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
								<h2>No Products Yet</h2>
							)}
							<div className="row">
								<div className="col-lg-6 col-md-6 col-sm-6">
									<div className="continue__btn">
										<a href="#">Continue Shopping</a>
									</div>
								</div>
								<div className="col-lg-6 col-md-6 col-sm-6">
									<div className="continue__btn update__btn">
										<a href="#">
											<i className="fa fa-spinner" /> Update cart
										</a>
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
