import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/cart/useCart";
import "./Header.css";

const Header = () => {
  const { cartCount, currentProduct } = useCart();
  const location = useLocation();

  // Function to generate breadcrumbs based on the current path
  const getBreadcrumbs = () => {
    const path = location.pathname;

    if (path === "/") {
      return "Home";
    }

    if (path.startsWith("/product/")) {
      return (
        <>
          <Link to="/">Home</Link>
          <span> &gt; </span>
          <span>
            {currentProduct
              ? `${currentProduct.brand} ${currentProduct.model}`
              : "Product"}
          </span>
        </>
      );
    }

    return "Home";
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <Link to="/" className="header-logo">
            Phone Shop
          </Link>
        </div>

        <div className="header-center">
          <nav className="breadcrumbs">{getBreadcrumbs()}</nav>
        </div>

        <div className="header-right">
          <div className="cart-icon">
            🛒 <span className="cart-count">{cartCount}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
