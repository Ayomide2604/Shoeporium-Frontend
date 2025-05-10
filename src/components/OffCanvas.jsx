import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
	MdOutlineKeyboardArrowRight,
	MdOutlineKeyboardArrowDown,
	MdOutlineSearch,
	MdOutlineShoppingCart,
} from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import useAuthStore from "./../store/useAuthStore";
import logo from "../assets/img/site-logo.png";

const OffCanvas = ({ menuOpen, setMenuOpen }) => {
	const { user, logout } = useAuthStore();
	const navigate = useNavigate();

	return (
		<>
			<div
				className={
					menuOpen ? "offcanvas-menu-wrapper active" : "offcanvas-menu-wrapper"
				}
			>
				<div className="header__logo">
					<Link
						to="/"
						onClick={() => {
							setMenuOpen(!menuOpen);
						}}
						className="d-flex justify-content-center align-items-center"
					>
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
				<div className="offcanvas__option">
					<div className="offcanvas__links">
						{user ? (
							<>
								<div className="offcanvas__top__hover">
									<span className="mr-3">
										Welcome {user?.first_name}
										<MdOutlineKeyboardArrowDown className="arrow_carrot-down" />
									</span>
									<ul>
										<ul
											onClick={() => {
												setMenuOpen(!menuOpen);
											}}
										>
											<li className="d-flex justify-content-center align-items-center my-2">
												<Link to="/account" className="text-white">
													Profile
												</Link>
											</li>
											<li className="d-flex justify-content-center align-items-center my-2">
												<Link to="account/orders" className="text-white">
													Orders
												</Link>
											</li>
											<li className="d-flex justify-content-center align-items-center my-2">
												<Link className="text-white">Settings</Link>
											</li>
										</ul>
									</ul>
								</div>
								<div onClick={() => setMenuOpen(!menuOpen)}>
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
							<div
								onClick={() => {
									setMenuOpen(!menuOpen);
								}}
							>
								<Link to="/login">Sign in</Link>
								<Link to="/signup">Register</Link>
							</div>
						)}
					</div>
				</div>
				<div className="offcanvas__nav__option">
					<Link to="#" className="search-switch">
						<MdOutlineSearch color="black" />
					</Link>
					<Link to="#">
						<IoMdHeartEmpty color="black" />
					</Link>
					<Link to="/cart">
						<MdOutlineShoppingCart
							color="black"
							onClick={() => setMenuOpen(!menuOpen)}
						/>
					</Link>
				</div>
				<div id="mobile-menu-wrap">
					<nav className="mobile-menu">
						<ul onClick={() => setMenuOpen(!menuOpen)}>
							<li className="active">
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/about">About</Link>
							</li>
							<li>
								<Link to="/products">Shop</Link>
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
				<div className="offcanvas__text">
					<p>Free shipping, 30-day return or refund guarantee.</p>
				</div>
			</div>
		</>
	);
};

export default OffCanvas;
