import { titleCase } from "title-case";

const ProductTabs = ({ items, selectedItem, onSelect }) => {
	return (
		<div className="row my-5">
			<div className="col-lg-12">
				<ul className="filter__controls">
					<li
						className={selectedItem === null ? "active" : ""}
						onClick={() => onSelect(null)}
					>
						All
					</li>
					{items?.map((item) => (
						<li
							value={selectedItem}
							key={item.id}
							className={selectedItem === item.id ? "active" : ""}
							onClick={() => onSelect(item.id)}
						>
							{titleCase(item.name)}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default ProductTabs;
