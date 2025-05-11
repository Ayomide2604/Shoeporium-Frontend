import Product from "../components/Product";
import defaultProduct from "../assets/img/default_product.jpg";

const ProductList = ({ products }) => {
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
			</div>
		</section>
	);
};

export default ProductList;
