import Product from "../components/Product";

const RelatedProducts = ({ products }) => {
	return (
		<section className="related spad">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<h3 className="related-title">Related Products</h3>
					</div>
				</div>
				<div className="row">
					{products.map((product) => (
						<div
							key={product.id}
							className="col-lg-3 col-md-6 col-sm-6 col-sm-6"
						>
							<Product
								id={product.id}
								title={product.title}
								price={product.price}
								image={product.image}
								rating={product.rating}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default RelatedProducts;
