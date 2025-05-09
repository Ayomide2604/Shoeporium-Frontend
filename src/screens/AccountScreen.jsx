import { useEffect, useState } from "react";
import useOrderStore from "../store/useOrderStore";
import useAuthStore from "./../store/useAuthStore";
import { titleCase } from "title-case";
import formatter from "../utils/currencyFormatter";
import formatTimestamp from "../utils/formatTimestamp";
import EditProfileImage from "./../components/EditProfileImage";
import { MdFileUpload } from "react-icons/md";

const AccountScreen = () => {
	const { user, editProfileImage } = useAuthStore();
	const { fetchOrders, count, orders } = useOrderStore();
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);

	useEffect(() => {
		fetchOrders();
	}, [fetchOrders]);

	const handleImageClick = () => {
		setIsEditModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsEditModalOpen(false);
	};

	const getBadgeClass = (status) => {
		const statusToClass = {
			pending: "btn-warning",
			completed: "btn-success",
			failed: "btn-danger",
			refunded: "btn-info",
		};

		return statusToClass[status.toLowerCase()];
	};

	return (
		<div className="container my-4">
			<div className="row">
				<div className="col-lg-4 col-md-12 col-sm-12 mb-4">
					<div className="card p-4">
						<div className="image d-flex flex-column justify-content-center align-items-center">
							<div className="profile-image-container">
								<img
									onClick={() => editProfileImage(user?.profile_image?.id)}
									src={user?.profile_image?.image_url}
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
									{/* <p>Change Image</p> */}
								</button>
							</div>
							<h2 className="name mt-3 text-center">
								{user?.first_name} {user?.last_name}
							</h2>
							<div className="d-flex flex-row justify-content-center align-items-center gap-2">
								<span className="idd1 text-center">{user?.email}</span>
								<span>
									<i className="fa fa-copy" />
								</span>
							</div>
							<div className="d-flex flex-row justify-content-center align-items-center mt-3">
								<span className="number">
									{count} <span className="follow">Orders</span>
								</span>
							</div>
							<div className="d-flex justify-content-center mt-2">
								<button className="btn btn-dark btn-lg">Edit Profile</button>
							</div>
							<div className="px-2 rounded mt-4 date text-center">
								<span className="join">Joined May, 2021</span>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-8 col-md-12 col-sm-12">
					<div className="table-responsive">
						<table className="table table-borderless main">
							<thead>
								<tr className="head">
									<th></th>
									<th scope="col">Customer</th>
									<th scope="col">Status</th>
									<th scope="col">Total</th>
									<th scope="col">Created</th>
								</tr>
							</thead>
							<tbody>
								{orders?.map((order) => (
									<tr key={order.id} className="align-middle">
										<td>
											<div className="form-check">
												<input
													className="form-check-input"
													type="checkbox"
													defaultValue=""
													id={`flexCheckDefault-${order.id}`}
												/>
											</div>
										</td>
										<td className="d-flex justify-content-start align-items-center mr-2">
											<img
												src="https://i.imgur.com/C4egmYM.jpg"
												className="rounded-circle mr-2"
												width={25}
												alt="Customer"
											/>
											<span>
												{order?.user?.first_name} {order?.user?.last_name}
											</span>
										</td>
										<td>
											<span
												className={`btn badge ${getBadgeClass(
													order.payment_status
												)}`}
											>
												{titleCase(order?.payment_status)}
											</span>
										</td>
										<td>{formatter.format(order?.total_price)}</td>
										<td>{formatTimestamp(order?.date_created)}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
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
