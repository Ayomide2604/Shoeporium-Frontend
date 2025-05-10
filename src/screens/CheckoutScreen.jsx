import { useEffect, useState } from "react";
import { CiShoppingTag } from "react-icons/ci";
import { MdOutlineClose } from "react-icons/md";
import BreadCrumb from "../components/BreadCrumb";
import Coupon from "../components/Coupon";
import useCartStore from "../store/useCartStore";
import CheckoutForm from "../components/CheckoutForm";
import CheckoutSummary from "./CheckoutSummary";
import useOrderStore from "../store/useOrderStore";
import { useParams } from "react-router-dom";

const CheckoutScreen = () => {
	const { order, fetchOrderById } = useOrderStore();
	const { id } = useParams();
	const [hasCoupon, setHasCoupon] = useState(false);

	useEffect(() => {
		fetchOrderById(id);
	}, [id]);
	return (
		<div>
			<BreadCrumb title="Checkout" />
			<section className="checkout spad">
				<div className="container">
					<div className="col-lg-8 col-md-6">
						<h6 className="coupon__code">
							<CiShoppingTag size={20} className="icon_tag_alt" /> Have a
							coupon?
							<span
								className="text-primary mx-1"
								style={{ cursor: "pointer" }}
								onClick={() => setHasCoupon(true)}
							>
								Click here
							</span>
							to enter your code
						</h6>

						<div
							className={
								hasCoupon
									? "d-flex justify-content-center align-items-center "
									: " d-none"
							}
						>
							<div className="w-100 mr-2">
								<Coupon />
							</div>
							<MdOutlineClose
								onClick={() => setHasCoupon(false)}
								className=""
							/>
						</div>
					</div>
					<div className="row">
						<CheckoutForm />
						<CheckoutSummary
							items={order?.items}
							totalPrice={order?.total_price}
						/>
					</div>
				</div>
			</section>
		</div>
	);
};

export default CheckoutScreen;
