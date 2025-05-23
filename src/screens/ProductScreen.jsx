import { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Product from "../components/Product";
import Pagination from "../components/Pagination";
import ProductFilter from "./../components/ProductFilter";
import ProductSearch from "../components/ProductSearch";
import useProductStore from "../store/useProductstore";
import useCollectionStore from "../store/useCollectionStore";
import ProductSorter from "../components/ProductSorter";
import PageSize from "../components/PageSize";
import defaultProduct from "../assets/img/default_product.jpg";

const ProductScreen = () => {
	const { products, productsLoading, fetchProducts, count } = useProductStore();
	const { fetchCollections, collections } = useCollectionStore();
	const [selectedCollection, setSelectedCollection] = useState(null);
	const [selectedOrder, setSelectedOrder] = useState("name");
	const [page, setPage] = useState(1);
	const [pageSize, setPageSize] = useState(10);

	const [search, setSearch] = useState("");

	useEffect(() => {
		fetchCollections();
	}, [fetchCollections]);

	useEffect(() => {
		fetchProducts({
			collectionId: selectedCollection,
			ordering: selectedOrder,
			page,
			search,
			pageSize,
		});
	}, [selectedCollection, selectedOrder, page, search, pageSize]);

	const handleSortChange = (e) => {
		setSelectedOrder(e.target.value);
	};

	const handleOnSearch = (e) => {
		setSearch(e);
	};

	const handlePageSize = (e) => {
		setPageSize(Number(e.target.value));
		setPage(1);
	};

	return (
		<div>
			<BreadCrumb title="Products" />

			{productsLoading ? (
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
									<div className="accordion ">
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
									<div className="col-lg-6">
										<div className="shop__product__option__left">
											<h5 className="d-flex">
												Showing All {products.length} results
											</h5>
										</div>
									</div>
									<div className="d-flex justify-content-between align-items-center col-lg-6 mx-2 my-3">
										<ProductSorter onChange={handleSortChange} />
										<div className="">
											<PageSize
												pageSize={pageSize}
												handlePageSize={handlePageSize}
											/>
										</div>
									</div>
								</div>
							</div>
							<div className="row">
								{products.map((product) => (
									<div key={product.id} className="col-lg-4 col-md-6 col-sm-6">
										<Product
											id={product.id}
											name={product?.name}
											price={product?.price}
											image={
												product?.images?.length > 0
													? product.images[0].image_url
													: defaultProduct
											}
											rating={4}
										/>
									</div>
								))}
							</div>
							<div className="row">
								<Pagination
									page={page}
									count={count}
									pageSize={pageSize}
									onPageChange={(newPage) => setPage(newPage)}
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default ProductScreen;
