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

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const currentPath = useLocation().pathname;
	return (
		<header className="header">
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
									<Link to="/login">Sign in</Link>
									<a href="#">FAQs</a>
								</div>
								<div className="header__top__hover">
									<span>
										Usd
										<MdOutlineKeyboardArrowDown className="arrow_carrot-down" />
									</span>
									<ul>
										<li>USD</li>
										<li>EUR</li>
										<li>USD</li>
									</ul>
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
									<a href="/">Home</a>
								</li>
								<li className={currentPath === "/products" ? "active" : ""}>
									<a href="/products">Shop</a>
								</li>
								<li>
									<a href="#">About</a>
									<ul className="dropdown">
										<li>
											<Link to="./about.html">About Us</Link>
										</li>
										<li>
											<Link to="./shop-details.html">Shop Details</Link>
										</li>
										<li>
											<Link to="./shopping-cart.html">Shopping Cart</Link>
										</li>
										<li>
											<Link to="./checkout.html">Check Out</Link>
										</li>
										<li>
											<Link to="./blog-details.html">Blog Details</Link>
										</li>
									</ul>
								</li>
								<li>
									<a href="./blog.html">Blog</a>
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
							<div className="price">$0.00</div>
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
