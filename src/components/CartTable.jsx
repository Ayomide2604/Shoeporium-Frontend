import React from "react";
import { MdOutlineClose } from "react-icons/md";
import formatter from "./../utils/currencyFormatter";

const CartTable = ({ items, onDelete }) => {
	return (
		<div className="shopping__cart__table table-responsive">
			<table className="table table-borderless">
				<thead>
					<tr>
						<th className="d-md-table-cell">Product</th>
						<th className=" d-md-table-cell">Quantity</th>
						<th className=" d-md-table-cell">Total</th>
						<th className=" d-md-table-cell"></th>
					</tr>
				</thead>
				<tbody>
					{items?.map((item) => (
						<tr key={item.id} className="align-middle">
							<td className="product__cart__item">
								<div className="d-flex align-items-center">
									<div className="product__cart__item__pic">
										<img
											src={item.product?.images[0].image_url}
											alt={item.product?.name}
											className="img-fluid rounded mr-2"
											style={{ maxWidth: "80px", maxHeight: "80px" }}
										/>
									</div>
									<div className="product__cart__item__text">
										<h6 className="mb-2">{item.product?.name}</h6>
										<h5 className="mb-0">
											{formatter.format(item.product?.price)}
										</h5>
									</div>
								</div>
							</td>
							<td className="quantity__item">
								<div className="quantity">
									<div className="pro-qty-2">
										<input
											type="text"
											className="form-control"
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
									onClick={() => onDelete(item.id)}
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
