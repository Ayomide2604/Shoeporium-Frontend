import { Routes, Route } from "react-router-dom";

import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
	return (
		<div className="app">
			<Header />
			<Routes>
				<Route path="/" element={<HomeScreen />} />
				<Route path="/products" element={<ProductScreen />} />
			</Routes>

			<Footer />
		</div>
	);
}

export default App;
