import { create } from "zustand";
import api from "../utils/api";

const useProductStore = create((set) => ({
	products: [],
	count: 0,
	product: null,
	loading: false,
	error: null,
	next: null,
	previous: null,

	fetchProducts: async (
		collectionId = null,
		ordering = "-date_created",
		page = 1,
		search = "",
		pageSize = 10
	) => {
		set((state) => ({ ...state, loading: false, error: null }));
		try {
			const params = new URLSearchParams();
			if (collectionId) params.append("collection", collectionId);
			if (ordering) params.append("ordering", ordering);
			if (page) params.append("page", page);
			if (search) params.append("search", search);
			if (pageSize) params.append("page_size", pageSize);

			const response = await api.get(`products/?${params.toString()}`);
			set((state) => ({
				...state,
				products: response.data.results,
				count: response.data.count,
				next: response.data.next,
				previous: response.data.previous,
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
