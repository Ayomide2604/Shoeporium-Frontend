import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import BackButton from "./BackButton";
const BreadCrumb = ({ title }) => {
	return (
		<section className="breadcrumb-option">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="d-flex justify-content-evenly">
							<BackButton />
						</div>
						<div className="breadcrumb__text">
							<h4>{title}</h4>
							<div className="breadcrumb__links">
								<a href="/" className="mr-1">
									Home
								</a>
								<MdOutlineKeyboardArrowRight />
								<span>{title}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BreadCrumb;
