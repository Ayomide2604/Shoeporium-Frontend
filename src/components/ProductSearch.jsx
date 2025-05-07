import { useState } from "react";
import { MdOutlineSearch } from "react-icons/md";

const ProductSearch = ({ onSearch }) => {
	const [searchInput, setSearchInput] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		onSearch(searchInput);
	};

	return (
		<div className="shop__sidebar__search">
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Search"
					onChange={(e) => setSearchInput(e.target.value)}
					value={searchInput}
				/>
				<button type="submit">
					<MdOutlineSearch
						className="icon_search"
						style={{ cursor: "pointer" }}
					/>
				</button>
			</form>
		</div>
	);
};

export default ProductSearch;
