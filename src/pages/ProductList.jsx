import { useEffect, useState } from "react";

import Product from "../components/Product";
import productJson from "./../data/productJson";
import useProductStore from "../store/useProductstore";

const ProductList = () => {
	const { products, loading, error, fetchProducts } = useProductStore();
	const [activeTab, setActiveTab] = useState("all");

	useEffect(() => {
		fetchProducts();
	}, [fetchProducts]);

	const handleFilterProducts = (category) => {
		setActiveTab(category);
		if (category === "all") {
			setProducts(productJson);
		} else {
			const filteredProducts = productJson.filter(
				(product) => product.category === category
			);
			setProducts(filteredProducts);
		}
	};

	return (
		<section className="product spad mt-5">
			<div className="container">
				{loading ? (
					<div id="preloder">
						<div class="loader"></div>
					</div>
				) : null}
				<div className="row">
					<div className="col-lg-12">
						<ul className="filter__controls">
							<li
								className={activeTab === "all" ? "active" : ""}
								onClick={() => handleFilterProducts("all")}
							>
								All
							</li>
							<li
								className={activeTab === "shoes" ? "active" : ""}
								onClick={() => handleFilterProducts("shoes")}
							>
								Shoes
							</li>
							<li
								className={activeTab === "clothes" ? "active" : ""}
								onClick={() => handleFilterProducts("clothes")}
							>
								Clothes
							</li>
							<li
								className={activeTab === "accessories" ? "active" : ""}
								onClick={() => handleFilterProducts("accessories")}
							>
								Accessories
							</li>
						</ul>
					</div>
				</div>
				<div className="row product__filter">
					{products.map((product) => (
						<div
							key={product.id}
							className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix"
						>
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
			</div>
		</section>
	);
};

export default ProductList;
