import { useState } from "react";
import product1 from "../assets/img/product/product-1.jpg";
import product2 from "../assets/img/product/product-2.jpg";
import product3 from "../assets/img/product/product-3.jpg";
import product4 from "../assets/img/product/product-4.jpg";
import product5 from "../assets/img/product/product-5.jpg";
import product6 from "../assets/img/product/product-6.jpg";
import product7 from "../assets/img/product/product-7.jpg";
import product8 from "../assets/img/product/product-8.jpg";

import Product from "../components/Product";

const productJson = [
	{
		id: 1,
		title: "Piqué Biker Jacket",
		price: 67.24,
		image: product1,
		category: "clothes",
	},
	{
		id: 2,
		title: "Piqué Biker Jacket",
		price: 67.24,
		image: product2,
		category: "clothes",
	},
	{
		id: 3,
		title: "Multi-pocket Chest Bag",
		price: 43.48,
		image: product3,
		category: "accessories",
	},
	{
		id: 4,
		title: "Diagonal Textured Shoe",
		price: 60.9,
		image: product4,
		category: "shoes",
	},
	{
		id: 5,
		title: "Lether Backpack",
		price: 31.37,
		image: product5,
		category: "accessories",
	},
	{
		id: 6,
		title: "Ankle Boots",
		price: 98.49,
		image: product6,
		category: "shoes",
	},
	{
		id: 7,
		title: "Basic Flowing Scarf",
		price: 98.49,
		image: product7,
		category: "clothes",
	},
	{
		id: 8,
		title: "Brown Bag",
		price: 98.49,
		image: product8,
		category: "accessories",
	},
];

const ProductList = () => {
	const [products, setProducts] = useState(productJson);
	const [activeTab, setActiveTab] = useState("all");

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
						<Product
							key={product.id}
							title={product.title}
							price={product.price}
							image={product.image}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default ProductList;
