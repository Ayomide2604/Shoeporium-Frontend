import { MdOutlineClose } from "react-icons/md";
import formatter from "./../utils/currencyFormatter";

const CartTable = ({ items, onDelete }) => {

	return (
		<div className="shopping__cart__table">
			<table>
				<thead>
					<tr className="">
						<th>Product</th>
						<th>Quantity</th>
						<th>Total</th>
						<th />
					</tr>
				</thead>
				<tbody>
					{items?.map((item) => (
						<tr key={item.id}>
							<td className="product__cart__item">
								<div className="product__cart__item__pic">
									<img src={item.product?.images[0].image_url} alt="" />
								</div>
								<div className="product__cart__item__text">
									<h6>{item.product?.name}</h6>
									<h5>{formatter.format(item.product?.price)}</h5>
								</div>
							</td>
							<td className="quantity__item ">
								<div className="quantity">
									<div className="pro-qty-2">
										<input
											type="text"
											value={item.quantity}
											onChange={() => console.log(item.quantity)}
										/>
									</div>
								</div>
							</td>
							<td className="cart__price">{formatter.format(item.subtotal)}</td>
							<td className="cart__close">
								<MdOutlineClose
									style={{ cursor: "pointer" }}
									onClick={() => {
										onDelete(item.id);
									}}
								/>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default CartTable;
