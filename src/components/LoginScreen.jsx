import { Link } from "react-router-dom";

const LoginScreen = () => {
	return (
		<section className="d-flex align-items-center justify-content-center my-5">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-6 col-lg-5">
						<div className="card p-4 shadow-sm">
							<h3 className="text-center mb-4">Login to Your Account</h3>
							<form className="contact__form">
								<div className="form-group">
									<label htmlFor="email">Email address:</label>
									<input
										type="email"
										className=" w-100"
										id="email"
										placeholder="Enter email"
										required
									/>
								</div>
								<div className="form-group">
									<label htmlFor="password">Password:</label>
									<input
										type="password"
										className=" w-100"
										id="password"
										placeholder="Password"
										required
									/>
								</div>
								<div className="form-group d-flex justify-content-between align-items-center">
									<div className="form-check d-flex align-items-center">
										<input
											type="checkbox"
											className="form-check-input position-relative h-100"
											id="remember"
										/>
										<label
											className="form-check-label small "
											htmlFor="remember"
										>
											Remember me
										</label>
									</div>
									<a href="#" className="small">
										Forgot password?
									</a>
								</div>
								<button type="submit" className="btn site-btn btn-block mt-3">
									Login
								</button>
							</form>
							<p className="text-center mt-3 mb-0">
								Don't have an account? <Link to="/signup">Sign up</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LoginScreen;
