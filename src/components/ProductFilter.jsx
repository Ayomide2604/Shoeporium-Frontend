import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { titleCase } from "title-case";

const ProductFilter = ({ title, items }) => {
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const toggleDropdown = () => {
		setDropdownOpen(!dropdownOpen);
	};
	return (
		<>
			<div className="card">
				<div
					className="d-flex card-heading text-uppercase  align-items-center"
					onClick={toggleDropdown}
				>
					<a className="mr-2">{title}</a>
					<MdOutlineKeyboardArrowDown />
				</div>
				<div
					id="collapseOne"
					className={dropdownOpen ? "collapse show" : "collapse "}
				>
					<div className="card-body">
						<div className="shop__sidebar__categories">
							<ul className="nice-scroll">
								{items.map((item) => (
									<li key={item}>
										<a href="#">{titleCase(item)}</a>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductFilter;
