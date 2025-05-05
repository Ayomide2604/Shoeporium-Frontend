import { MdSearch, MdOutlineSearch } from "react-icons/md";

const ProductSearch = () => {
	return (
		<div className="shop__sidebar__search">
			<form>
				<input type="text" placeholder="Search..." />
				<button type="submit">
					<MdSearch className="icon_search" style={{ cursor: "pointer" }} />
				</button>
			</form>
		</div>
	);
};

export default ProductSearch;
