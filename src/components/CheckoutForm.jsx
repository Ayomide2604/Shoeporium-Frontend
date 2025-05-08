const CheckoutForm = () => {
	return (
		<div className="col-lg-8 col-md-6 ">
			<form action="#">
				<h6 className="checkout__title">Billing Details</h6>
				<div className="row">
					<div className="col-lg-6">
						<div className="checkout__input">
							<p>
								Fist Name<span>*</span>
							</p>
							<input type="text" />
						</div>
					</div>
					<div className="col-lg-6">
						<div className="checkout__input">
							<p>
								Last Name<span>*</span>
							</p>
							<input type="text" />
						</div>
					</div>
				</div>
				<div className="checkout__input">
					<p>
						Country<span>*</span>
					</p>
					<input type="text" />
				</div>
				<div className="checkout__input">
					<p>
						Address<span>*</span>
					</p>
					<input
						type="text"
						placeholder="Street Address"
						className="checkout__input__add"
					/>
				</div>
				<div className="checkout__input">
					<p>
						Town/City<span>*</span>
					</p>
					<input type="text" />
				</div>
				<div className="checkout__input">
					<p>
						State<span>*</span>
					</p>
					<input type="text" />
				</div>
				<div className="checkout__input">
					<p>
						Postcode / ZIP<span>*</span>
					</p>
					<input type="text" />
				</div>
				<div className="row">
					<div className="col-lg-6">
						<div className="checkout__input">
							<p>
								Phone<span>*</span>
							</p>
							<input type="text" />
						</div>
					</div>
					<div className="col-lg-6">
						<div className="checkout__input">
							<p>
								Email<span>*</span>
							</p>
							<input type="text" />
						</div>
					</div>
				</div>

				<div className="checkout__input__checkbox">
					<label htmlFor="diff-acc">
						Note about your order, e.g, special note for delivery
						<input type="checkbox" id="diff-acc" />
						<span className="checkmark" />
					</label>
				</div>
				<div className="checkout__input">
					<p>
						Order notes<span>*</span>
					</p>
					<input
						type="text"
						placeholder="Notes about your order, e.g. special notes for delivery."
					/>
				</div>
			</form>
		</div>
	);
};

export default CheckoutForm;
