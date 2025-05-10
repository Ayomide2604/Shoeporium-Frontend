import { useEffect } from "react";
import useOrderStore from "./../store/useOrderStore";
import { Link, useParams } from "react-router-dom";
import formatter from "../utils/currencyFormatter";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const OrderDetail = () => {
	const { id } = useParams();
	const { order, fetchOrderById, orderLoading } = useOrderStore();

	useEffect(() => {
		fetchOrderById(id);
	}, [id]);

	return (
		<>
			{orderLoading ? (
				<div id="preloder">
					<div className="loader"></div>
				</div>
			) : null}
			<div className="container">
				<article className="card">
					<header className="card-header"> My Orders / Tracking </header>
					<div className="card-body">
						<h6 className="mb-3">Order ID: {order?.id}</h6>
						{/* <article className="card">
						<div className="card-body row">
							<div className="col">
								<strong>Estimated Delivery time:</strong> <br />
								29 nov 2019
							</div>
							<div className="col">
								<strong>Shipping BY:</strong> <br /> BLUEDART, |
								<i className="fa fa-phone" /> +1598675986
							</div>
							<div className="col">
								<strong>Status:</strong> <br /> Picked by the courier
							</div>
							<div className="col">
								<strong>Tracking #:</strong> <br /> BD045903594059
							</div>
						</div>
					</article> */}
						{/* <div className="track">
						<div className="step active">
							<span className="icon">
								<i className="fa fa-check" />
							</span>
							<span className="text">Order confirmed</span>
						</div>
						<div className="step active">
							<span className="icon">
								<i className="fa fa-user" />
							</span>
							<span className="text"> Picked by courier</span>
						</div>
						<div className="step">
							<span className="icon">
								<i className="fa fa-truck" />
							</span>
							<span className="text"> On the way </span>
						</div>
						<div className="step">
							<span className="icon">
								<i className="fa fa-box" />
							</span>
							<span className="text">Ready for pickup</span>
						</div>
					</div> */}
						{/* <hr /> */}
						<ul className="row">
							{order?.items.map((item) => (
								<li className="col-md-4">
									<figure className="mb-3">
										<div className="">
											<img
												src={item?.product?.images[0].image_url}
												className="img-fluid"
											/>
										</div>
										<p className="title">{item.product.name}</p>
										<span className="text-muted">
											{formatter.format(item.price)}
										</span>
									</figure>
								</li>
							))}
						</ul>
						<hr />
						<div className="d-flex justify-content-between">
							<Link to="/account/orders" className="btn btn-secondary">
								<FaChevronLeft /> Back to orders
							</Link>
							<Link to="#" className="btn btn-outline-dark">
								<FaChevronRight /> Make Payment
							</Link>
						</div>
					</div>
				</article>
			</div>
		</>
	);
};

export default OrderDetail;
