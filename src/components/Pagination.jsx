import {
	MdOutlineKeyboardArrowLeft,
	MdOutlineKeyboardArrowRight,
} from "react-icons/md";
const Pagination = () => {
	return (
		<div className="col-lg-12">
			<div className="product__pagination">
				<a className="active mr-1">
					<MdOutlineKeyboardArrowLeft />
				</a>
				<span className=" mr-1">1</span>
				<a className=" mr-1 align-items-center active">
					<MdOutlineKeyboardArrowRight />
				</a>
			</div>
		</div>
	);
};

export default Pagination;
