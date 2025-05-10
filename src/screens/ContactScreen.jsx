import BreadCrumb from "../components/BreadCrumb";
import ContactForm from "../components/ContactForm";

const ContactScreen = () => {
	return (
		<div>
			<BreadCrumb title="Contact" />
			<section className="contact spad">
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<div className="contact__text">
								<div className="section-title">
									<span>Information</span>
									<h2>Contact Us</h2>
									<p>
										As you might expect of a company that began as a high-end
										interiors contractor, we pay strict attention.
									</p>
								</div>
								<ul>
									<li>
										<h4>Lagos</h4>
										<p>
											195 E Parker Square Dr, Parker, CO 801 <br />
											+43 982-314-0958
										</p>
									</li>
									<li>
										<h4>Ibadan</h4>
										<p>
											109 Avenue Léon, 63 Clermont-Ferrand <br />
											+12 345-423-9893
										</p>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-md-6 justify-content-center">
							<ContactForm />
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default ContactScreen;
