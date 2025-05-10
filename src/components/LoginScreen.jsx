import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuthStore from "../store/useAuthStore";

const LoginScreen = () => {
	const { login, error, loading } = useAuthStore();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		login(email, password, navigate);
	};

	return (
		<section className="d-flex align-items-center justify-content-center my-5">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-6 col-lg-5">
						<div className="card p-4 shadow-sm">
							<h3 className="text-center mb-4">Login to Your Account</h3>
							{error && <p style={{ color: "red" }}>{error}</p>}
							<form className="contact__form" onSubmit={handleSubmit}>
								<div className="form-group">
									<label htmlFor="email">Email address:</label>
									<input
										type="email"
										className=" w-100"
										id="email"
										placeholder="Enter email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										required
									/>
								</div>
								<div className="form-group">
									<label htmlFor="password">Password:</label>
									<input
										type="password"
										className=" w-100"
										id="password"
										value={password}
										placeholder="Password"
										onChange={(e) => setPassword(e.target.value)}
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
								<button
									type="submit"
									className="btn site-btn btn-block mt-3"
									disabled={loading}
								>
									{loading ? "Logging in ..." : "Login"}
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
