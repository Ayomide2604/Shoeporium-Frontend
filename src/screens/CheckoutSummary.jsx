import formatter from "../utils/currencyFormatter";
const CheckoutSummary = ({ items, totalPrice }) => {
	return (
		<div className="col-lg-4 col-md-6">
			<div className="checkout__order">
				<h4 className="order__title">Your order</h4>
				<div className="checkout__order__products">
					Product <span>Total</span>
				</div>
				<ul className="checkout__total__products">
					{items?.map((item, index) => (
						<li key={item.id}>
							{index + 1}. {item.product?.name}
							<span>{formatter.format(item.product?.price)}</span>
						</li>
					))}
				</ul>
				<ul className="checkout__total__all">
					<li>
						Total <span>{formatter.format(totalPrice)}</span>
					</li>
				</ul>
				<p>
					Lorem ipsum dolor sit amet, consectetur adip elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua.
				</p>
				<div className="checkout__input__checkbox">
					<label htmlFor="payment">
						Check Payment
						<input type="checkbox" id="payment" />
						<span className="checkmark" />
					</label>
				</div>
				<div className="checkout__input__checkbox">
					<label htmlFor="paypal">
						Paypal
						<input type="checkbox" id="paypal" />
						<span className="checkmark" />
					</label>
				</div>
				<button type="submit" className="site-btn">
					Make Payment
				</button>
			</div>
		</div>
	);
};

export default CheckoutSummary;
