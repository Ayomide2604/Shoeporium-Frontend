import { useState } from "react";
import {
	MdOutlineKeyboardArrowRight,
	MdOutlineKeyboardArrowDown,
} from "react-icons/md";

import cartIcon from "../assets/img/icon/cart.png";
import searchIcon from "../assets/img/icon/search.png";
import heartIcon from "../assets/img/icon/heart.png";
const OffCanvas = ({ menuOpen }) => {
	const [dropDownOpen, setDropDownOpen] = useState(false);
	return (
		<>
			<div
				className={
					menuOpen ? "offcanvas-menu-wrapper active" : "offcanvas-menu-wrapper"
				}
			>
				<div className="offcanvas__option">
					<div className="offcanvas__links">
						<a href="#">Sign in</a>
						<a href="#">FAQs</a>
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
				<div id="mobile-menu-wrap">
					<nav className="mobile-menu">
						<ul>
							<li className="active">
								<a href="#">Home</a>
							</li>
							<li>
								<a href="#">Shop</a>
							</li>
							<li>
								<a onClick={() => setDropDownOpen(!dropDownOpen)}>
									Pages{" "}
									{dropDownOpen ? (
										<MdOutlineKeyboardArrowDown />
									) : (
										<MdOutlineKeyboardArrowRight />
									)}
								</a>
								<ul className={dropDownOpen ? "dropdown" : "dropdown d-none"}>
									<li>
										<a href="#">About Us</a>
									</li>
									<li>
										<a href="#">Shop Details</a>
									</li>
									<li>
										<a href="#">Shopping Cart</a>
									</li>
									<li>
										<a href="#">Check Out</a>
									</li>
									<li>
										<a href="#">Blog Details</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="#">Blog</a>
							</li>
							<li>
								<a href="#">Contacts</a>
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
