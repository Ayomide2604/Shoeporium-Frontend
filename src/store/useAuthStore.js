import { create } from "zustand";
import api from "../utils/api";
import { toast } from "react-toastify";

const useAuthStore = create((set, get) => ({
	user: JSON.parse(localStorage.getItem("user")) || null,
	accessToken: localStorage.getItem("accessToken") || null,
	refreshToken: localStorage.getItem("refreshToken") || null,
	error: null,
	loading: false,
	uploadSuccess: false,
	uploadError: null,

	login: async (email, password, navigate) => {
		try {
			const res = await api.post("auth/jwt/create/", { email, password });
			localStorage.setItem("accessToken", res.data.access);
			localStorage.setItem("refreshToken", res.data.refresh);
			set((state) => ({
				...state,
				accessToken: res.data.access,
				refreshToken: res.data.refresh,
			}));

			const userRes = await api.get("auth/users/me/");
			localStorage.setItem("user", JSON.stringify(userRes.data));
			set((state) => ({ ...state, user: userRes.data }));
			toast.success("Login Successful");
			navigate("/");
		} catch (err) {
			set((state) => ({ ...state, error: "Invalid login credentials" }));
		}
	},

	register: async (formData, navigate) => {
		try {
			const response = await api.post("/auth/users/", formData);
			toast.success("User Registered Successfully");
			navigate("/login");
		} catch (error) {
			console.error(error.message);
		}
	},

	logout: (navigate) => {
		localStorage.removeItem("accessToken");
		localStorage.removeItem("refreshToken");
		localStorage.removeItem("user");
		localStorage.removeItem("cart");
		set((state) => ({
			...state,
			user: null,
			accessToken: null,
			refreshToken: null,
		}));
		navigate("/");
		toast.error("logged out successfully ");
	},

	fetchCurrentUser: async () => {
		try {
			const response = await api.get("auth/users/me/");
			set((state) => ({ ...state, user: response.data }));
			localStorage.setItem("user", JSON.stringify(response.data));
		} catch (err) {
			console.log("Not authenticated");
		}
	},

	createProfileImage: async (file) => {
		set({ loading: true, uploadError: null, uploadSuccess: false });
		try {
			const formData = new FormData();
			formData.append("image", file);

			const response = await api.post(`/profile/profile-images/`, formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});

			if (response.status === 200) {
				set({ uploadSuccess: true });
				get().fetchCurrentUser();
			}
		} catch (error) {
			set({ uploadError: error.message, loading: false });
		}
	},
	editProfileImage: async (id, file) => {
		set({ loading: true, uploadError: null, uploadSuccess: false });
		try {
			const formData = new FormData();
			formData.append("image", file);

			const response = await api.put(
				`/profile/profile-images/${id}/`,
				formData,
				{
					headers: {
						"Content-Type": "multipart/form-data",
					},
				}
			);

			if (response.status === 200) set({ uploadSuccess: true });
			get().fetchCurrentUser();
		} catch (error) {
			set({ uploadError: error.message, loading: false });
		}
	},
}));

export default useAuthStore;
