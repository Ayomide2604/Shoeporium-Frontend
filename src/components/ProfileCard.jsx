import { MdFileUpload } from "react-icons/md";
import { Link } from "react-router-dom";
import profilePic from "../assets/img/default_profile.png";
const ProfileCard = ({ user, onEditModalOpen }) => {
	const handleImageClick = () => {
		onEditModalOpen(true);
	};

	return (
		<div className="card shadow-sm p-4">
			<div className="image d-flex flex-column justify-content-center align-items-center">
				<div className="profile-image-container">
					<img
						src={user?.profile_image?.image_url || profilePic}
						height={100}
						width={100}
						alt="Profile"
						className="rounded-circle"
						style={{
							objectFit: "cover",
							overflow: "hidden",
							backgroundColor: "#000",
						}}
					/>
					<button
						onClick={handleImageClick}
						className="upload-icon"
						style={{
							border: "none",
							background: "none",
							cursor: "pointer",
						}}
					>
						<MdFileUpload color="#fffff" />
					</button>
				</div>
				<h2 className="name mt-3 text-center">
					{user?.first_name} {user?.last_name}
				</h2>
				<div className="d-flex flex-row justify-content-center align-items-center gap-2">
					<span className="idd1 text-center">{user?.email}</span>
				</div>
				<div className="d-flex flex-row justify-content-center align-items-center mt-3">
					<Link to="/account/orders" className="">
						View Orders
					</Link>
				</div>
				<div className="d-flex justify-content-center mt-2">
					<button className="btn btn-dark ">Edit Profile</button>
				</div>
				<div className="px-2 rounded mt-4 date text-center">
					<span className="join">Joined May, 2021</span>
				</div>
			</div>
		</div>
	);
};

export default ProfileCard;
