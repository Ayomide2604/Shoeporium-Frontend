import { create } from "zustand";
import api from "../utils/api";

const useCartStore = create((set, get) => ({
	cart: JSON.parse(localStorage.getItem("cart")) || null,
	items: null,
	totalItems: 0,
	totalPrice: 0,

	fetchUserCart: async () => {
		try {
			const response = await api.get("/carts/me");
			localStorage.setItem("cart", JSON.stringify(response.data));
			set((state) => ({
				...state,
				cart: JSON.stringify(response.data),
				items: response.data.items,
				totalItems: response.data.total_items,
				totalPrice: response.data.total_price,
			}));
		} catch (error) {
			console.error(error.message);
		}
	},

	addToCart: async (productId, quantity = 1) => {
		try {
			const response = await api.post("/cart-items/", {
				product_id: productId,
				quantity,
			});
			alert("product added successfully");
			await get().fetchUserCart();
		} catch (error) {
			console.error(error.message);
		}
	},

	removeFromCart: async (id) => {
		try {
			const response = await api.delete(`/cart-items/${id}/`);
			await get().fetchUserCart();
			// alert("product removed from cart");
		} catch (error) {
			console.error(error.message);
		}
	},
}));

export default useCartStore;
