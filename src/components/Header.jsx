import { useState } from "react";
import {
	MdOutlineMenu,
	MdOutlineKeyboardArrowDown,
	MdOutlineClose,
	MdOutlineSearch,
	MdOutlineShoppingCart,
	MdDeliveryDining,
} from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";

import { Link, useLocation, useNavigate } from "react-router-dom";

import logo from "../assets/img/site-logo.png";
import OffCanvas from "./OffCanvas";
import useAuthStore from "../store/useAuthStore";
import useCartStore from "./../store/useCartStore";

const Header = () => {
	const { user, logout } = useAuthStore();
	const [menuOpen, setMenuOpen] = useState(false);
	const currentPath = useLocation().pathname;
	const { totalItems } = useCartStore();
	const navigate = useNavigate();

	return (
		<header className="header sticky-top">
			<div className="header__top">
				<div className="container">
					<div className="row d-flex align-items-center">
						<div className="col-lg-6 col-md-6">
							<div className="header__top__left d-flex align-items-center">
								<MdDeliveryDining color="white" className="mr-2" />
								<p>Free Delivery Within Lagos</p>
							</div>
						</div>
						<div className="col-lg-6 col-md-6">
							<div className="header__top__right">
								<div className="header__top__links">
									{user ? (
										<>
											<div className="header__top__hover ">
												<span className="mr-3">
													Welcome ({user?.first_name})
													<MdOutlineKeyboardArrowDown className="arrow_carrot-down" />
												</span>
												<ul>
													<li className="d-flex justify-content-center align-items-center my-2">
														<Link to="/account" className="text-dark">
															Profile
														</Link>
													</li>
													<li className="d-flex justify-content-center align-items-center my-2">
														<Link to="account/orders" className="text-dark">
															Orders
														</Link>
													</li>
													<li className="d-flex justify-content-center align-items-center my-2">
														<Link className="text-dark">Settings</Link>
													</li>
												</ul>
											</div>
											<div className="header__top__hover ">
												<span
													onClick={() => {
														logout(navigate);
													}}
												>
													Logout
												</span>
											</div>
										</>
									) : (
										<>
											<Link to="/login">Sign in</Link>
											<Link to="/signup">Register</Link>
										</>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row d-flex align-items-center">
					<div className="col-lg-3 col-md-3">
						<div className="header__logo ">
							<Link to="/">
								<img
									src={logo}
									style={{
										height: "40px",
										width: "80px",
										objectFit: "cover",
									}}
								/>
							</Link>
						</div>
					</div>
					<div className="col-lg-6 col-md-6">
						<nav className="header__menu mobile-menu ">
							<ul>
								<li className={currentPath === "/" ? "active" : ""}>
									<Link to="/">Home</Link>
								</li>
								<li className={currentPath === "/products" ? "active" : ""}>
									<Link to="/products">Shop</Link>
								</li>
								<li>
									<Link to="#">About</Link>
								</li>
								<li>
									<Link to="#">Blog</Link>
								</li>
								<li>
									<Link to="/contact">Contact</Link>
								</li>
							</ul>
						</nav>
					</div>
					<div className="col-lg-3 col-md-3">
						<div className="header__nav__option">
							<a href="#" className="search-switch ">
								<MdOutlineSearch color="black" />
							</a>
							<a href="#">
								<IoMdHeartEmpty color="black" />
							</a>
							<Link to="/cart">
								<MdOutlineShoppingCart color="black" />
								<span
									className="badge"
									style={{
										position: "relative",
										top: "-10px",
										backgroundColor: "black",
										color: "white",
									}}
								>
									{totalItems}
								</span>
							</Link>
						</div>
					</div>
				</div>
				<div className="canvas__open">
					{menuOpen ? (
						<MdOutlineClose onClick={() => setMenuOpen(!menuOpen)} />
					) : (
						<MdOutlineMenu onClick={() => setMenuOpen(!menuOpen)} />
					)}
				</div>
				<div
					className={
						menuOpen
							? "offcanvas-menu-overlay active"
							: "offcanvas-menu-overlay"
					}
				>
					<OffCanvas menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
				</div>
			</div>
		</header>
	);
};

export default Header;
