import { useState } from "react";
import {
	MdOutlineMenu,
	MdOutlineKeyboardArrowDown,
	MdOutlineClose,
	MdOutlineSearch,
	MdOutlineShoppingCart,
} from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";

import { Link, useLocation } from "react-router-dom";

import logo from "../assets/img/logo.png";
import OffCanvas from "./OffCanvas";
import useAuthStore from "../store/useAuthStore";

const Header = () => {
	const { user, logout } = useAuthStore();
	const [menuOpen, setMenuOpen] = useState(false);
	const currentPath = useLocation().pathname;

	return (
		<header className="header sticky-top">
			<div className="header__top">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-7">
							<div className="header__top__left m-0">
								<p>Free shipping, 30-day return or refund guarantee.</p>
							</div>
						</div>
						<div className="col-lg-6 col-md-5">
							<div className="header__top__right">
								<div className="header__top__links">
									{user ? (
										<>
											<div className="header__top__hover ">
												<span className="mr-3">
													Welcome {user?.username}
													<MdOutlineKeyboardArrowDown className="arrow_carrot-down" />
												</span>
												<ul className="">
													<li className="d-flex justify-content-center align-items-center my-2">
														Profile
													</li>
													<li className="d-flex justify-content-center align-items-center my-2">
														Orders
													</li>
													<li className="d-flex justify-content-center align-items-center my-2">
														Settings
													</li>
												</ul>
											</div>
											<div className="header__top__hover ">
												<span onClick={logout}>Logout</span>
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
						<div className="header__logo">
							<Link to="/">
								<img src={logo} />
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
