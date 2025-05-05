import { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import productJson from "./../data/productJson";
import Product from "../components/Product";
import Pagination from "../components/Pagination";
import ProductFilter from "./../components/ProductFilter";

const categories = [
	{
		id: 1,
		title: "categories",
		items: ["shoes", "bags", "accessories", "caps", "kids", "gadgets"],
	},
];
const ProductScreen = () => {
	const [products, setProducts] = useState(productJson);

	return (
		<div>
			<BreadCrumb title="Products" />

			<section className="shop spad">
				<div className="container">
					<div className="row">
						<div className="col-lg-3">
							<div className="shop__sidebar">
								<div className="shop__sidebar__search">
									<form action="#">
										<input type="text" placeholder="Search..." />
										<button type="submit">
											<span className="icon_search" />
										</button>
									</form>
								</div>
								<div className="shop__sidebar__accordion">
									<div className="accordion" id="accordionExample">
										<ProductFilter
											title={categories[0].title}
											key={categories[0].id}
											items={categories[0].items}
										/>
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
											<p c>Sort by Price:</p>
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
											title={product.title}
											price={product.price}
											image={product.image}
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
