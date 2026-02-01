const API_BASE_URL = "https://itx-frontend-test.onrender.com";
const CACHE_DURATION = 3600000; // 1h

// Cache utility
const cache = {
  get(key) {
    const item = localStorage.getItem(key);
    if (!item) return null;

    const { data, timestamp } = JSON.parse(item);
    const isExpired = Date.now() - timestamp > CACHE_DURATION;

    if (isExpired) {
      localStorage.removeItem(key);
      return null;
    }

    return data;
  },

  set(key, data) {
    const item = {
      data,
      timestamp: Date.now(),
    };
    localStorage.setItem(key, JSON.stringify(item));
  },
};

// API Methods
export const api = {
  // Get products
  async getProducts() {
    const CACHE_KEY = "products";

    // Check cache
    const cached = cache.get(CACHE_KEY);
    if (cached) {
      return cached;
    }

    // Fetch from API
    const response = await fetch(`${API_BASE_URL}/api/product`);
    if (!response.ok) throw new Error("Error fetching products");

    const data = await response.json();
    cache.set(CACHE_KEY, data);

    return data;
  },

  // Get product by ID
  async getProductById(id) {
    const CACHE_KEY = `product_${id}`;

    // Check cache
    const cached = cache.get(CACHE_KEY);
    if (cached) {
      return cached;
    }

    // Fetch from API
    const response = await fetch(`${API_BASE_URL}/api/product/${id}`);
    if (!response.ok) throw new Error(`Error fetching product ${id}`);

    const data = await response.json();
    cache.set(CACHE_KEY, data);

    return data;
  },

  // Add to cart
  async addToCart(id, colorCode, storageCode) {
    const response = await fetch(`${API_BASE_URL}/api/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        colorCode,
        storageCode,
      }),
    });

    if (!response.ok) throw new Error("Error adding to cart");

    const data = await response.json();

    // Update cart count in localStorage
    localStorage.setItem("cartCount", data.count);

    return data;
  },

  // Get cart count
  getCartCount() {
    return parseInt(localStorage.getItem("cartCount") || "0", 10);
  },
};
