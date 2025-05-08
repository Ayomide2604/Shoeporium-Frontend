import { Link } from "react-router-dom";
import formatter from "../utils/currencyFormatter";
const CartSummary = ({ total }) => {
	return (
		<div className="cart__total">
			<h6>Cart total</h6>
			<ul>
				<li>
					Subtotal <span>{formatter.format(total)}</span>
				</li>
				<li>
					Total <span>{formatter.format(total)}</span>
				</li>
			</ul>
			<Link to="/checkout" className="primary-btn">
				Proceed to checkout
			</Link>
		</div>
	);
};

export default CartSummary;
