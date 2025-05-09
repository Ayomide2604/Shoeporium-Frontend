import { create } from "zustand";
import api from "../utils/api";

const useOrderStore = create((set) => ({
	orders: [],
	count: 0,
	loading: false,

	fetchOrders: async () => {
		try {
			const response = await api.get("/orders/");
			set((state) => ({
				...state,
				orders: response.data.results,
				count: response.data.count,
			}));
		} catch (error) {
			console.error(error.message);
		}
	},
}));

export default useOrderStore;
