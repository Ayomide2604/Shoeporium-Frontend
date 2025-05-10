import { useEffect } from "react";
import useOrderStore from "../store/useOrderStore";
import { titleCase } from "title-case";
import formatter from "../utils/currencyFormatter";
import formatTimestamp from "../utils/formatTimestamp";
import profilePic from "../assets/img/default_profile.png";
import { useNavigate } from "react-router-dom";

const OrderList = () => {
	const { fetchOrders, orders, ordersLoading, count } = useOrderStore();
	const navigate = useNavigate();

	useEffect(() => {
		fetchOrders();
	}, [fetchOrders]);

	const getBadgeClass = (status) => {
		const statusToClass = {
			pending: "btn-warning",
			completed: "btn-success",
			failed: "btn-danger",
			refunded: "btn-info",
		};

		return statusToClass[status.toLowerCase()];
	};
	return (
		<>
			{ordersLoading ? (
				<div id="preloder">
					<div className="loader"></div>
				</div>
			) : null}
			<div className="table-responsive">
				<span className=" d-flex justify-content-end align-items-center mr-2">
					{count} Orders
				</span>
				<table className="table table-borderless main">
					<thead>
						<tr className="head">
							<th></th>
							<th scope="col">Customer</th>
							<th scope="col">Status</th>
							<th scope="col">Total</th>
							<th scope="col">Created</th>
							<th scope="col"></th>
						</tr>
					</thead>
					<tbody>
						{orders?.map((order) => (
							<tr key={order.id} className="align-middle">
								<td>
									<div className="form-check">
										<input
											className="form-check-input"
											type="checkbox"
											defaultValue=""
											id={`flexCheckDefault-${order.id}`}
										/>
									</div>
								</td>
								<td className="d-flex justify-content-start align-items-center mr-2">
									<img
										src={order?.user?.profile_image?.image_url || profilePic}
										className="rounded-circle mr-2"
										width={25}
										alt="Customer"
									/>
									<span>
										{order?.user?.first_name} {order?.user?.last_name}
									</span>
								</td>
								<td>
									<span
										className={`btn badge ${getBadgeClass(
											order.payment_status
										)}`}
									>
										{titleCase(order?.payment_status)}
									</span>
								</td>
								<td>{formatter.format(order?.total_price)}</td>
								<td>{formatTimestamp(order?.date_created)}</td>
								<td>
									<button
										className="btn btn-dark btn-sm"
										onClick={() => {
											navigate(`/account/orders/${order.id}`);
										}}
									>
										View
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default OrderList;
