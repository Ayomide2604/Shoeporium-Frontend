import { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Product from "../components/Product";
import Pagination from "../components/Pagination";
import ProductFilter from "./../components/ProductFilter";
import ProductSearch from "../components/ProductSearch";
import useProductStore from "../store/useProductstore";
import useCollectionStore from "../store/useCollectionStore";
import ProductSorter from "../components/ProductSorter";

const ProductScreen = () => {
	const { products, loading, error, fetchProducts } = useProductStore();
	const { fetchCollections, collections } = useCollectionStore();
	const [selectedCollection, setSelectedCollection] = useState(null);
	const [selectedOrder, setSelectedOrder] = useState(null);
	const [page, setPage] = useState(1);
	const [search, setSearch] = useState("");

	useEffect(() => {
		fetchCollections();
	}, [fetchCollections]);

	useEffect(() => {
		fetchProducts(selectedCollection, selectedOrder, page, search);
	}, [selectedCollection, selectedOrder, page, search]);

	const handleSortChange = (e) => {
		setSelectedOrder(e.target.value);
	};

	const handleOnSearch = (e) => {
		setSearch(e);
		
	};

	return (
		<div>
			<BreadCrumb title="Products" />

			{loading ? (
				<div id="preloder">
					<div className="loader"></div>
				</div>
			) : null}

			<section className="shop spad">
				<div className="container">
					<div className="row">
						<div className="col-lg-3">
							<div className="shop__sidebar">
								<ProductSearch onSearch={handleOnSearch} />
								<div className="shop__sidebar__accordion">
									<div className="accordion" id="accordionExample">
										<ProductFilter
											title="Collections"
											items={collections}
											selectedItem={selectedCollection}
											onSelect={setSelectedCollection}
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-9">
							<div className="shop__product__option">
								<div className="row d-flex justify-content-between align-items-center">
									<div className="col-6">
										<div className="shop__product__option__left">
											<p className="mt-3">
												Showing All {products.length} results
											</p>
										</div>
									</div>
									<ProductSorter onChange={handleSortChange} />
								</div>
							</div>
							<div className="row">
								{products.map((product) => (
									<div key={product.id} className="col-lg-4 col-md-6 col-sm-6">
										<Product
											id={product.id}
											name={product.name}
											price={product.price}
											image={product.images[0].image_url}
											rating={4}
										/>
									</div>
								))}
							</div>
							<div className="row">
								<Pagination />
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default ProductScreen;
