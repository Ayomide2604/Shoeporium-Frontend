const PageSize = ({ pageSize, handlePageSize }) => {
	return (
		<div className="accordion shop__product__option__right ml-3">
			<p className="mr-2">Page Size:</p>
			<select
				className="form-select w-auto"
				value={pageSize}
				onChange={(e) => {
					handlePageSize(e);
				}}
			>
				<option value={5}>5</option>
				<option value={10}>10</option>
				<option value={20}>20</option>
			</select>
		</div>
	);
};

export default PageSize;
