import { useEffect, useState } from "react";
import useAuthStore from "./../store/useAuthStore";
import EditProfileImage from "./../components/EditProfileImage";
import { Outlet } from "react-router-dom";
import EditProfileForm from "../components/EditProfileForm";
import ProfileCard from "../components/ProfileCard";

const AccountScreen = () => {
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);
	const { user, editProfileImage, fetchCurrentUser } = useAuthStore();

	useEffect(() => {
		fetchCurrentUser();
	}, [fetchCurrentUser]);

	const handleCloseModal = () => {
		setIsEditModalOpen(false);
	};

	return (
		<div className="container my-4">
			<div className="row">
				<div className="col-lg-4 col-md-12 col-sm-12 mb-4">
					<ProfileCard
						user={user}
						editProfileImage={editProfileImage}
						onEditModalOpen={setIsEditModalOpen}
					/>
				</div>
				<div className="col-lg-8 col-md-12 col-sm-12">
					{/* <EditProfileForm /> */}
					<Outlet />
				</div>
			</div>

			<EditProfileImage
				isOpen={isEditModalOpen}
				onClose={handleCloseModal}
				user={user}
			/>
		</div>
	);
};

export default AccountScreen;
