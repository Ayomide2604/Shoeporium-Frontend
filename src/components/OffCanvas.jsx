import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
	MdOutlineKeyboardArrowRight,
	MdOutlineKeyboardArrowDown,
	MdOutlineSearch,
	MdOutlineShoppingCart,
} from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import useAuthStore from "./../store/useAuthStore";
import logo from "../assets/img/logo.png";

const OffCanvas = ({ menuOpen, setMenuOpen }) => {
	const [dropDownOpen, setDropDownOpen] = useState(false);
	const { user, logout } = useAuthStore();

	return (
		<>
			<div
				className={
					menuOpen ? "offcanvas-menu-wrapper active" : "offcanvas-menu-wrapper"
				}
			>
				<div className="header__logo">
					<Link to="/">
						<img src={logo} />
					</Link>
				</div>
				<div className="offcanvas__option">
					<div className="offcanvas__links">
						{user ? (
							<>
								<div className="offcanvas__top__hover">
									<span className="mr-3">
										Welcome {user?.username}
										<MdOutlineKeyboardArrowDown className="arrow_carrot-down" />
									</span>
									<ul>
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
									</ul>
								</div>
								<span onClick={logout}>Logout</span>
							</>
						) : (
							<>
								<Link to="/login">Sign in</Link>
								<Link to="#">Register</Link>
							</>
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
						<MdOutlineShoppingCart color="black" />
					</Link>
				</div>
				<div id="mobile-menu-wrap">
					<nav className="mobile-menu">
						<ul>
							<li className="active">
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="products">Shop</Link>
							</li>
							<li>
								<Link onClick={() => setDropDownOpen(!dropDownOpen)}>
									Pages{" "}
									{dropDownOpen ? (
										<MdOutlineKeyboardArrowDown />
									) : (
										<MdOutlineKeyboardArrowRight />
									)}
								</Link>
								<ul className={dropDownOpen ? "dropdown" : "dropdown d-none"}>
									<li>
										<Link to="#">About Us</Link>
									</li>
									<li>
										<Link to="#">Shop Details</Link>
									</li>
									<li>
										<Link to="#">Shopping Cart</Link>
									</li>
									<li>
										<Link to="#">Check Out</Link>
									</li>
									<li>
										<Link to="#">Blog Details</Link>
									</li>
								</ul>
							</li>
							<li>
								<Link to="#">Blog</Link>
							</li>
							<li>
								<Link to="/contact">Contacts</Link>
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
