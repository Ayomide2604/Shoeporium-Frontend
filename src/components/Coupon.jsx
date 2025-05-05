const Coupon = () => {
	return (
		<div className="cart__discount">
			<h6>Discount codes</h6>
			<form action="#">
				<input type="text" placeholder="Coupon code" />
				<button type="submit">Apply</button>
			</form>
		</div>
	);
};

export default Coupon;
