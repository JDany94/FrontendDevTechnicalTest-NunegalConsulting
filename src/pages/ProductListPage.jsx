import { useState, useEffect } from "react";
import { api } from "../services/api";
import SearchBar from "../components/SearchBar";
import ProductCard from "../components/ProductCard";
import ProductCardSkeleton from "../components/ProductCardSkeleton";
import "./ProductListPage.css";

const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await api.getProducts();
        setProducts(data);
        setFilteredProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Function to filter products based on search term
  const handleSearch = (searchTerm) => {
    if (!searchTerm.trim()) {
      setFilteredProducts(products);
      return;
    }

    const term = searchTerm.toLowerCase();
    const filtered = products.filter(
      (product) =>
        product.brand.toLowerCase().includes(term) ||
        product.model.toLowerCase().includes(term),
    );

    setFilteredProducts(filtered);
  };

  if (loading) {
    return (
      <div className="product-list-page">
        <div className="page-header">
          <h1 className="page-title">Product List</h1>
          <SearchBar onSearch={() => {}} />
        </div>

        <div className="products-grid">
          {[...Array(8)].map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="product-list-page">
      <div className="page-header">
        <h1 className="page-title">Product List</h1>
        <SearchBar onSearch={handleSearch} />
      </div>

      {filteredProducts.length === 0 ? (
        <p className="no-results">No results found</p>
      ) : (
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductListPage;
