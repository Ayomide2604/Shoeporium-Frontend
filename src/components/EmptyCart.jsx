import emptyCart from "../assets/img/empty_cart.jpg";

const EmptyCart = () => {
	return (
		<div className="mb-5">
			<div
				style={{
					textAlign: "center",
				}}
			>
				<img
					src={emptyCart}
					alt="Empty Cart"
					className="img-fluid"
					height={200}
					width={200}
				/>
				<h3 className="mb-3">Your Cart is Empty</h3>
				<span className="">
					Looks like you haven't added anything to your cart yet.
				</span>
			</div>
		</div>
	);
};

export default EmptyCart;
