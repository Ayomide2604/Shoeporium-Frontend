import { useState } from "react";
import {
	MdOutlineMenu,
	MdOutlineKeyboardArrowDown,
	MdOutlineClose,
} from "react-icons/md";
import { Link } from "react-router-dom";

import logo from "../assets/img/logo.png";
import searchIcon from "../assets/img/icon/search.png";
import cartIcon from "../assets/img/icon/cart.png";
import heartIcon from "../assets/img/icon/heart.png";
import OffCanvas from "./OffCanvas";

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
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
									<a href="#">Sign in</a>
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
				<div className="row">
					<div className="col-lg-3 col-md-3">
						<div className="header__logo">
							<Link to="/">
								<img src={logo} alt="" />
							</Link>
						</div>
					</div>
					<div className="col-lg-6 col-md-6">
						<nav className="header__menu mobile-menu ">
							<ul>
								<li className="active">
									<a href="/">Home</a>
								</li>
								<li>
									<a href="/products">Shop</a>
								</li>
								<li>
									<a href="#">Pages</a>
									<ul className="dropdown">
										<li>
											<a href="./about.html">About Us</a>
										</li>
										<li>
											<a href="./shop-details.html">Shop Details</a>
										</li>
										<li>
											<a href="./shopping-cart.html">Shopping Cart</a>
										</li>
										<li>
											<a href="./checkout.html">Check Out</a>
										</li>
										<li>
											<a href="./blog-details.html">Blog Details</a>
										</li>
									</ul>
								</li>
								<li>
									<a href="./blog.html">Blog</a>
								</li>
								<li>
									<a href="./contact.html">Contacts</a>
								</li>
							</ul>
						</nav>
					</div>
					<div className="col-lg-3 col-md-3">
						<div className="header__nav__option">
							<a href="#" className="search-switch">
								<img src={searchIcon} alt="" />
							</a>
							<a href="#">
								<img src={heartIcon} alt="" />
							</a>
							<a href="#">
								<img src={cartIcon} alt="" /> <span>0</span>
							</a>
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
