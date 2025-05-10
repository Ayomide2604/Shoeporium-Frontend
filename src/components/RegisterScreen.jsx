import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuthStore from "../store/useAuthStore";

const RegisterScreen = () => {
	const { register } = useAuthStore();
	const [email, setEmail] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [username, setUsername] = useState("");
	const [password1, setPassword1] = useState("");
	const [password2, setPassword2] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData();
		if (password1 === password2) {
			formData.append("first_name", firstName);
			formData.append("last_name", lastName);
			formData.append("email", email);
			formData.append("username", username);
			formData.append("password", password1);

			register(formData, navigate);
		} else {
			alert("Passwords Do not match");
		}
	};

	return (
		<section className="d-flex align-items-center justify-content-center my-5 ">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-6 col-lg-5">
						<div className="card p-4 shadow-lg">
							<h3 className="text-center mb-4 ">Login to Your Account</h3>
							<form className="contact__form" onSubmit={handleSubmit}>
								<div className="row">
									<div className="form-group col-6">
										<label htmlFor="first-name">First Name:</label>
										<input
											type="text"
											className=" w-100"
											id="first-name"
											placeholder="First Name"
											value={firstName}
											onChange={(e) => setFirstName(e.target.value)}
											required
										/>
									</div>
									<div className="form-group col-6">
										<label htmlFor="last-name">Last Name:</label>
										<input
											type="text"
											className=" w-100"
											id="last-name"
											placeholder="Last Name"
											value={lastName}
											onChange={(e) => setLastName(e.target.value)}
											required
										/>
									</div>
								</div>

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
									<label htmlFor="username">Username:</label>
									<input
										type="text"
										className=" w-100"
										id="username"
										placeholder="Enter username"
										value={username}
										onChange={(e) => setUsername(e.target.value)}
										required
									/>
								</div>
								<div className="form-group">
									<label htmlFor="password1">Password:</label>
									<input
										type="password"
										className=" w-100"
										id="password1"
										value={password1}
										placeholder="Password"
										onChange={(e) => setPassword1(e.target.value)}
										required
									/>
								</div>
								<div className="form-group">
									<label htmlFor="password2">Confirm Password:</label>
									<input
										type="password"
										className=" w-100"
										id="password2"
										value={password2}
										placeholder="Confirm Password"
										onChange={(e) => setPassword2(e.target.value)}
										required
									/>
								</div>

								<button type="submit" className="btn site-btn btn-block mt-3">
									Signup
								</button>
							</form>
							<p className="text-center mt-3 mb-0">
								Already have an account? <Link to="/login">Login</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default RegisterScreen;
