import { create } from "zustand";
import api from "../utils/api";
import { toast } from "react-toastify";

const useOrderStore = create((set) => ({
	orders: [],
	ordersLoading: false,
	orderLoading: false,
	order: null,
	count: 0,
	loading: false,

	fetchOrders: async () => {
		try {
			set((state) => ({ ...state, ordersLoading: true }));
			const response = await api.get("/orders/");
			set((state) => ({
				...state,
				orders: response.data.results,
				count: response.data.count,
				ordersLoading: false,
			}));
		} catch (error) {
			toast.error(error.message);
		}
	},

	fetchOrderById: async (id) => {
		try {
			set((state) => ({ ...state, orderLoading: true }));
			const response = await api.get(`/orders/${id}/`);
			set((state) => ({ ...state, order: response.data, orderLoading: false }));
		} catch (error) {
			toast.error(error.message);
		}
	},

	createOrder: async (navigate) => {
		try {
			const response = await api.post("/orders/");
			toast.success("Order Placed Successfully");
			set((state) => ({ ...state, order: response.data }));
			if (navigate) {
				navigate(`/checkout/${response.data.id}`);
			}
		} catch (error) {
			console.error(error);
		}
	},
}));

export default useOrderStore;
