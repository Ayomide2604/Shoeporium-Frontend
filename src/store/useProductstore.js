import { create } from "zustand";
import api from "../utils/api";

const useProductStore = create((set) => ({
	products: [],
	product: null,
	loading: false,
	error: null,

	fetchProducts: async () => {
		set((state) => ({ ...state, loading: true, error: null }));
		try {
			const response = await api.get("products/");
			set((state) => ({
				...state,
				products: response.data,
				loading: false,
			}));
		} catch (error) {
			set((state) => ({ ...state, error, loading: false }));
			console.error("Error fetching products:", error.message);
		}
	},

	fetchProductById: async (id) => {
		set((state) => {
			const found = state.products.find(
				(p) => p.id.toString() === id.toString()
			);
			if (found) {
				return { ...state, product: found };
			}
			return state;
		});

		const state = useProductStore.getState();
		if (!state.product || state.product.id.toString() !== id.toString()) {
			try {
				const response = await api.get(`products/${id}`);
				set((state) => ({
					...state,
					product: response.data,
				}));
			} catch (error) {
				console.error("Error fetching product by ID:", error.message);
			}
		}
	},
}));

export default useProductStore;
