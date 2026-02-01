import { HashRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/cart/CartProvider";
import { ToastProvider } from "./context/toast/ToastProvider";
import { useToast } from "./context/toast/useToast";
import Header from "./components/Header";
import ToastContainer from "./components/ToastContainer";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import "./App.css";

const AppContent = () => {
  const toast = useToast();

  return (
    <>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<ProductListPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <ToastContainer toasts={toast.toasts} removeToast={toast.removeToast} />
    </>
  );
};

function App() {
  return (
    <HashRouter>
      <CartProvider>
        <ToastProvider>
          <AppContent />
        </ToastProvider>
      </CartProvider>
    </HashRouter>
  );
}

export default App;
