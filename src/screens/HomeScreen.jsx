import { useEffect, useState } from "react";
import Hero from "../pages/Hero";
import ProductList from "../pages/ProductList";
import useCollectionStore from "../store/useCollectionStore";
import useProductStore from "./../store/useProductstore";
import ProductTabs from "../components/ProductTabs";

const HomeScreen = () => {
	const { products, loading, error, fetchProducts } = useProductStore();
	const { fetchCollections, collections } = useCollectionStore();
	const [selectedCollection, setSelectedCollection] = useState(null);

	useEffect(() => {
		fetchCollections();
	}, [fetchCollections]);

	useEffect(() => {
		fetchProducts({ collectionId: selectedCollection, pageSize: 12 });
	}, [selectedCollection]);
	return (
		<>
			{loading ? (
				<div id="preloader">
					<div class="loader"></div>
				</div>
			) : null}
			<Hero />
			<ProductTabs
				items={collections}
				selectedItem={selectedCollection}
				onSelect={setSelectedCollection}
			/>
			<ProductList products={products} />
		</>
	);
};

export default HomeScreen;
