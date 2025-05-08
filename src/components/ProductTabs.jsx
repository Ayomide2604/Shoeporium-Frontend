import { useState } from "react";
import { titleCase } from "title-case";

const ProductTabs = ({ items, selectedItem, onSelect }) => {
	const [activeTab, setActiveTab] = useState(null);
	return (
		<div className="row my-5">
			<div className="col-lg-12">
				<ul className="filter__controls">
					<li
						className={selectedItem === null ? "active" : ""}
						onClick={() => onSelect(null)}
					>
						<p
							className={
								activeTab === null
									? "bg-dark text-white px-2 py-1 rounded mr-2"
									: "mr-2"
							}
							onClick={() => setActiveTab(null)}
						>
							All
						</p>
					</li>
					{items?.map((item) => (
						<li
							value={selectedItem}
							key={item.id}
							className={selectedItem === item.id ? "active" : ""}
							onClick={() => onSelect(item.id)}
						>
							<p
								className={
									activeTab === item.id
										? "bg-dark text-white px-2 py-1 rounded mr-2"
										: "mr-2"
								}
								onClick={() => setActiveTab(item.id)}
							>
								{titleCase(item.name)}
							</p>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default ProductTabs;
