import { useNavigate } from "react-router-dom";
import { MdOutlineKeyboardReturn } from "react-icons/md";

const BackButton = () => {
	const navigate = useNavigate();
	return (
		<div
			className="btn btn-outline-dark mb-3  d-flex justify-content-center align-items-center "
			onClick={() => navigate(-1)}
		>
			Back
			{/* <MdOutlineKeyboardReturn /> */}
		</div>
	);
};

export default BackButton;
