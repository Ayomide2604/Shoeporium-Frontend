import { create } from "zustand";
import api from "../utils/api";

const useCollectionStore = create((set) => ({
	collections: [],
	loading: false,
	error: null,

	fetchCollections: async () => {
		set((state) => ({ ...state, loading: true, error: null }));
		try {
			const response = await api.get("/collections/");
			set((state) => ({
				...state,
				collections: response.data,
				loading: false,
			}));
		} catch (error) {
			set((state) => ({ ...state, loading: false, error: error.message }));
		}
	},
}));

export default useCollectionStore;
