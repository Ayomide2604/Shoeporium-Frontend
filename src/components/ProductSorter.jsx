const ProductSorter = ({ onChange }) => {
	return (
		<div className=" shop__product__option__right ">
			<p className="mr-2">Sort by:</p>
			<select onChange={onChange} className="">
				<option value="-date_created">Newest</option>
				<option value="date_created">Oldest</option>
				<option value="price">Price: Low to High</option>
				<option value="-price">Price: High to Low</option>
				<option value="name">Name: A–Z</option>
				<option value="-name">Name: Z–A</option>
			</select>
		</div>
	);
};

export default ProductSorter;
