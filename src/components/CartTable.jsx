import { MdOutlineClose } from "react-icons/md";
import cart1 from "../assets/img/shopping-cart/cart-1.jpg";
import cart2 from "../assets/img/shopping-cart/cart-2.jpg";
import cart3 from "../assets/img/shopping-cart/cart-3.jpg";
import cart4 from "../assets/img/shopping-cart/cart-4.jpg";
const CartTable = () => {
	return (
		<div className="shopping__cart__table">
			<table>
				<thead>
					<tr>
						<th>Product</th>
						<th>Quantity</th>
						<th>Total</th>
						<th />
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className="product__cart__item">
							<div className="product__cart__item__pic">
								<img src={cart1} alt="" />
							</div>
							<div className="product__cart__item__text">
								<h6>T-shirt Contrast Pocket</h6>
								<h5>$98.49</h5>
							</div>
						</td>
						<td className="quantity__item">
							<div className="quantity">
								<div className="pro-qty-2">
									<input type="text" defaultValue={1} />
								</div>
							</div>
						</td>
						<td className="cart__price">$ 30.00</td>
						<td className="cart__close">
							<MdOutlineClose />
						</td>
					</tr>
					<tr>
						<td className="product__cart__item">
							<div className="product__cart__item__pic">
								<img src={cart2} alt="" />
							</div>
							<div className="product__cart__item__text">
								<h6>Diagonal Textured Cap</h6>
								<h5>$98.49</h5>
							</div>
						</td>
						<td className="quantity__item">
							<div className="quantity">
								<div className="pro-qty-2">
									<input type="text" defaultValue={1} />
								</div>
							</div>
						</td>
						<td className="cart__price">$ 32.50</td>
						<td className="cart__close">
							<MdOutlineClose />
						</td>
					</tr>
					<tr>
						<td className="product__cart__item">
							<div className="product__cart__item__pic">
								<img src={cart3} alt="" />
							</div>
							<div className="product__cart__item__text">
								<h6>Basic Flowing Scarf</h6>
								<h5>$98.49</h5>
							</div>
						</td>
						<td className="quantity__item">
							<div className="quantity">
								<div className="pro-qty-2">
									<input type="text" defaultValue={1} />
								</div>
							</div>
						</td>
						<td className="cart__price">$ 47.00</td>
						<td className="cart__close">
							<MdOutlineClose />
						</td>
					</tr>
					<tr>
						<td className="product__cart__item">
							<div className="product__cart__item__pic">
								<img src={cart4} alt="" />
							</div>
							<div className="product__cart__item__text">
								<h6>Basic Flowing Scarf</h6>
								<h5>$98.49</h5>
							</div>
						</td>
						<td className="quantity__item">
							<div className="quantity">
								<div className="pro-qty-2">
									<input type="text" defaultValue={1} />
								</div>
							</div>
						</td>
						<td className="cart__price">$ 30.00</td>
						<td className="cart__close">
							<MdOutlineClose />
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default CartTable;
