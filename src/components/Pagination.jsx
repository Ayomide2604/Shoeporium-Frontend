import {
	MdOutlineKeyboardArrowLeft,
	MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const Pagination = ({ page, count, pageSize, onPageChange }) => {
	const totalPages = Math.ceil(count / pageSize);

	const goToPage = (newPage) => {
		if (newPage < 1 || newPage > totalPages) return;
		onPageChange(newPage);
	};

	return (
		<div className="col-lg-12">
			<div className="product__pagination d-flex align-items-center">
				<a onClick={() => goToPage(page - 1)} disabled={page <= 1}>
					<MdOutlineKeyboardArrowLeft />
				</a>

				{[...Array(totalPages)].map((_, i) => (
					<a
						key={i}
						className={`mx-1 ${page === i + 1 ? "active" : ""}`}
						onClick={() => goToPage(i + 1)}
					>
						{i + 1}
					</a>
				))}

				<a
					onClick={() => goToPage(page + 1)}
					disabled={page >= totalPages}
				>
					<MdOutlineKeyboardArrowRight />
				</a>
			</div>
		</div>
	);
};

export default Pagination;
