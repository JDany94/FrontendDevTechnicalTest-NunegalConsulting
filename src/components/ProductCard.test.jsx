import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProductCard from './ProductCard';

const mockProduct = {
  id: '1',
  brand: 'Apple',
  model: 'iPhone 13',
  price: 799,
  imgUrl: 'https://example.com/iphone.jpg'
};

describe('ProductCard', () => {
  it('renders product information', () => {
    render(
      <BrowserRouter>
        <ProductCard product={mockProduct} />
      </BrowserRouter>
    );
    
    expect(screen.getByText('Apple')).toBeInTheDocument();
    expect(screen.getByText('iPhone 13')).toBeInTheDocument();
    expect(screen.getByText('799€')).toBeInTheDocument();
  });

  it('renders product image with correct alt text', () => {
    render(
      <BrowserRouter>
        <ProductCard product={mockProduct} />
      </BrowserRouter>
    );
    
    const image = screen.getByAltText('Apple iPhone 13');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', mockProduct.imgUrl);
  });

  it('links to product detail page', () => {
    render(
      <BrowserRouter>
        <ProductCard product={mockProduct} />
      </BrowserRouter>
    );
    
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/product/1');
  });
});
