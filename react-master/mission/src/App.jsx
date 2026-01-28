import OrderContent from "./components/OrderContent";
import PrdList from "./components/PrdList";
import { ProductProvider } from "./context/ProductContext";
import CartPage from "./pages/CartPage";
import SignupPage from "./pages/SignupPage";



function App() {
	return (
		<ProductProvider>
			<PrdList/>
		</ProductProvider>
	);
}

export default App;
