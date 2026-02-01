import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/cart/CartProvider";
import Header from "./components/Header";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<ProductListPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
          </Routes>
        </main>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
