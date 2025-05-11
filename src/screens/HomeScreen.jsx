import { useEffect, useState } from "react";
import Hero from "../pages/Hero";
import ProductList from "../pages/ProductList";
import useCollectionStore from "../store/useCollectionStore";
import useProductStore from "./../store/useProductstore";
import ProductTabs from "../components/ProductTabs";
import defaultProduct from "../assets/img/default_product.jpg";

const HomeScreen = () => {
	const { products, productsLoading, fetchProducts } = useProductStore();
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
			{productsLoading ? (
				<div id="preloder">
					<div className="loader"></div>
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
