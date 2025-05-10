import { Routes, Route } from "react-router-dom";

import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import ProductDetailScreen from "./screens/ProductDetailScreen";
import useScrollToTop from "./hooks/useScrollToTop";
import CheckoutScreen from "./screens/CheckoutScreen";
import ContactScreen from "./screens/ContactScreen";
import LoginScreen from "./components/LoginScreen";
import RegisterScreen from "./components/RegisterScreen";
import AccountScreen from "./screens/AccountScreen";
import OrderDetail from "./components/OrderDetail";
import OrderList from "./components/OrderList";

function App() {
	useScrollToTop();
	return (
		<div className="app">
			<Header />
			<Routes>
				<Route path="/" element={<HomeScreen />} />
				<Route path="/products" element={<ProductScreen />} />
				<Route path="/products/:id" element={<ProductDetailScreen />} />
				<Route path="/cart" element={<CartScreen />} />
				<Route path="/checkout/:id" element={<CheckoutScreen />} />
				<Route path="/contact" element={<ContactScreen />} />
				<Route path="/login" element={<LoginScreen />} />
				<Route path="/signup" element={<RegisterScreen />} />
				<Route path="/account" element={<AccountScreen />}>
					<Route path="orders/" element={<OrderList />} />
					<Route path="orders/:id" element={<OrderDetail />} />
				</Route>
			</Routes>

			<Footer />
		</div>
	);
}

export default App;
