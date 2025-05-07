import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { titleCase } from "title-case";

const ProductFilter = ({ title, items, selectedItem, onSelect }) => {
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const toggleDropdown = () => {
		setDropdownOpen(!dropdownOpen);
	};

	const getTitle = () => {
		if (!selectedItem) return `All ${title}`;
		const item = items.find((item) => item.id === selectedItem);
		return item ? titleCase(item.name) : `All ${title}`;
	};

	return (
		<>
			<div className="card">
				<div
					className="d-flex card-heading text-uppercase align-items-center mb-2"
					onClick={toggleDropdown}
				>
					<a className="mr-1 ">{getTitle()}</a>
					<MdOutlineKeyboardArrowDown />
				</div>
				<div
					id="collapseOne"
					className={dropdownOpen ? "collapse show" : "collapse "}
				>
					<div className="card-body w-100 border rounded">
						<div className="shop__sidebar__categories">
							<ul
								className="nice-scroll "
								onClick={() => toggleDropdown(!dropdownOpen)}
							>
								<li>
									<span
										className={
											!selectedItem ? "text-black p-3" : "text-muted p-3 "
										}
										style={{ cursor: "pointer" }}
										onClick={() => onSelect(null)}
									>
										All {title}
									</span>
								</li>
								<br />
								{items.map((item) => (
									<div key={item.id}>
										<li value={selectedItem}>
											<span
												className={
													selectedItem === item.id
														? "text-black p-3"
														: "text-muted p-3 "
												}
												onClick={() => onSelect(item.id)}
												style={{ cursor: "pointer" }}
											>
												{titleCase(item.name)}
											</span>
										</li>
										<br />
									</div>
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
