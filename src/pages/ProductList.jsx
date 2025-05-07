import Product from "../components/Product";
import ProductTabs from "../components/ProductTabs";

const ProductList = ({ products }) => {
	const handleActiveTab = (category) => {
		if (!activeTab) setActiveTab(category);
	};

	return (
		<section className="product spad mt-5">
			<div className="container">
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
