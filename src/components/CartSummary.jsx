import { Link, useNavigate } from "react-router-dom";
import formatter from "../utils/currencyFormatter";
import useOrderStore from "./../store/useOrderStore";
const CartSummary = ({ total }) => {
	const navigate = useNavigate();
	const { createOrder } = useOrderStore();

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
			<li
				style={{ cursor: "pointer" }}
				className="primary-btn"
				onClick={() => {
					createOrder(navigate);
				}}
			>
				Proceed to checkout
			</li>
		</div>
	);
};

export default CartSummary;
