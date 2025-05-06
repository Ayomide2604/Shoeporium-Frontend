import { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Product from "../components/Product";
import Pagination from "../components/Pagination";
import ProductFilter from "./../components/ProductFilter";
import ProductSearch from "../components/ProductSearch";
import useProductStore from "../store/useProductstore";
import useCollectionStore from "../store/useCollectionStore";

const ProductScreen = () => {
	const { products, loading, error, fetchProducts } = useProductStore();
	const fetchCollections = useCollectionStore(
		(state) => state.fetchCollections
	);
	const collections = useCollectionStore((state) => state.collections);

	useEffect(() => {
		fetchProducts();
		fetchCollections();
	}, [fetchProducts, fetchCollections]);

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
								<ProductSearch />
								<div className="shop__sidebar__accordion">
									<div className="accordion" id="accordionExample">
										<ProductFilter title="Collections" items={collections} />
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-9">
							<div className="shop__product__option">
								<div className="row">
									<div className="col-lg-6 col-md-6 col-sm-6">
										<div className="shop__product__option__left">
											<p>Showing All {products.length} results</p>
										</div>
									</div>
									<div className="col-lg-6 col-md-6 col-sm-6">
										<div className=" shop__product__option__right">
											<p>Sort by Price:</p>
											<select className="btn btn-sm">
												<option value="">Low To High</option>
												<option value="">$0 - $55</option>
												<option value="">$55 - $100</option>
											</select>
										</div>
									</div>
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
