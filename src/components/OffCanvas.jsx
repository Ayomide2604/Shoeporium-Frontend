import { useState } from "react";
import {
	MdOutlineKeyboardArrowRight,
	MdOutlineKeyboardArrowDown,
	MdOutlineSearch,
	MdOutlineShoppingCart,
} from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";

import { Link } from "react-router-dom";

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
						<Link to="/login">Sign in</Link>
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
						<MdOutlineSearch color="black" />
					</Link>
					<Link to="#">
						<IoMdHeartEmpty color="black" />
					</Link>
					<Link to="/cart">
						<MdOutlineShoppingCart color="black" />
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
