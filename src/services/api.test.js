import { describe, it, expect, beforeEach } from "vitest";
import { api } from "./api";

describe("API Service", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe("Cache functionality", () => {
    it("getCartCount returns 0 by default", () => {
      const count = api.getCartCount();
      expect(count).toBe(0);
    });

    it("getCartCount returns stored value", () => {
      localStorage.setItem("cartCount", "5");
      const count = api.getCartCount();
      expect(count).toBe(5);
    });
  });

  describe("API methods", () => {
    it("getProducts is defined", () => {
      expect(api.getProducts).toBeDefined();
      expect(typeof api.getProducts).toBe("function");
    });

    it("getProductById is defined", () => {
      expect(api.getProductById).toBeDefined();
      expect(typeof api.getProductById).toBe("function");
    });

    it("addToCart is defined", () => {
      expect(api.addToCart).toBeDefined();
      expect(typeof api.addToCart).toBe("function");
    });
  });
});
