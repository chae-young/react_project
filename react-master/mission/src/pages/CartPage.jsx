import ProductList from "../components/ProductList";
import ToastAlert from "../components/ToastAlert";
import AlertProvider from "../context/AlertProvider";

export default function CartPage() {

    return (
        <AlertProvider>
            <ProductList/>
            <ToastAlert/>
        </AlertProvider>
    );
  }
  