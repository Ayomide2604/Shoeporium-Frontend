import React, { useState } from "react";
import useAuthStore from "../store/useAuthStore";

const EditProfileImage = ({ imageId, isOpen, onClose, user }) => {
	const [selectedFile, setSelectedFile] = useState(null);
	const {
		editProfileImage,
		createProfileImage,
		loading,
		uploadSuccess,
		uploadError,
	} = useAuthStore();

	const handleFileChange = (event) => {
		setSelectedFile(event.target.files[0]);
	};

	const handleUpload = (id, selectedFile) => {
		if (id && selectedFile)
			editProfileImage(user?.profile_image?.id, selectedFile);
		createProfileImage(selectedFile);
	};

	if (!isOpen) return null;

	return (
		<div
			className="modal"
			style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
		>
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Edit Profile Image</h5>
						<button type="button" className="close" onClick={onClose}>
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">
						<div className="file-input-container">
							<input
								type="file"
								id="fileInput"
								className="file-input"
								onChange={handleFileChange}
								accept="image/*"
							/>
							<label htmlFor="fileInput" className="file-input-label">
								Choose a file
							</label>
							{loading && <p>Uploading...</p>}
							{uploadSuccess && <p>Upload successful!</p>}
							{uploadError && <p>Error: {uploadError}</p>}
						</div>
					</div>
					<div className="modal-footer">
						<button
							type="button"
							className="btn btn-secondary"
							onClick={onClose}
						>
							Close
						</button>
						<button
							type="button"
							className="btn btn-primary"
							onClick={() => {
								handleUpload(imageId, selectedFile);
							}}
						>
							Upload
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EditProfileImage;
