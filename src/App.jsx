import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./pages/Hero";
import ProductList from "./pages/ProductList";

function App() {
	return (
		<div className="app">
			<Header />
			<Hero />
			<ProductList />
			<Footer />
		</div>
	);
}

export default App;
