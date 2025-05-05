import { Link } from "react-router-dom";
import CartTable from "../components/CartTable";
import BreadCrumb from "./../components/BreadCrumb";
import Coupon from "./../components/Coupon";

const CartScreen = () => {
	return (
		<>
			<BreadCrumb title="Cart" />

			<section className="shopping-cart spad">
				<div className="container">
					<div className="row">
						<div className="col-lg-8">
							<CartTable />
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
							<div className="cart__total">
								<h6>Cart total</h6>
								<ul>
									<li>
										Subtotal <span>$ 169.50</span>
									</li>
									<li>
										Total <span>$ 169.50</span>
									</li>
								</ul>
								<Link to="/checkout" className="primary-btn">
									Proceed to checkout
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default CartScreen;
