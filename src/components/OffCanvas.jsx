import { useState } from "react";
import {
	MdOutlineKeyboardArrowRight,
	MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { Link } from "react-router-dom";

import cartIcon from "../assets/img/icon/cart.png";
import searchIcon from "../assets/img/icon/search.png";
import heartIcon from "../assets/img/icon/heart.png";
const OffCanvas = ({ menuOpen, setMenuOpen }) => {
	const [dropDownOpen, setDropDownOpen] = useState(false);
	return (
		<>
			<div
				className={
					menuOpen ? "offcanvas-menu-wrapper active" : "offcanvas-menu-wrapper"
				}
				onClick={() => setMenuOpen(!menuOpen)}
			>
				<div className="offcanvas__option">
					<div className="offcanvas__links">
						<Link to="#">Sign in</Link>
						<Link to="#">FAQs</Link>
					</div>
					<div className="offcanvas__top__hover">
						<span>
							Usd <i className="arrow_carrot-down" />
						</span>
						<ul>
							<li>USD</li>
							<li>EUR</li>
							<li>USD</li>
						</ul>
					</div>
				</div>
				<div className="offcanvas__nav__option">
					<Link to="#" className="search-switch">
						<img src={searchIcon} alt="" />
					</Link>
					<Link to="#">
						<img src={heartIcon} alt="" />
					</Link>
					<Link to="/cart">
						<img src={cartIcon} alt="" /> <span>0</span>
					</Link>
					<div className="price">$0.00</div>
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
								<Link to="#">Contacts</Link>
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
