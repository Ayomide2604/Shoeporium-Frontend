import "./App.css";
import Header from "./components/Header";
import Hero from "./pages/Hero";
import ProductList from "./pages/ProductList";

function App() {
	return (
		<div className="app">
			<Header />
			<Hero />
			<ProductList />
		</div>
	);
}

export default App;
