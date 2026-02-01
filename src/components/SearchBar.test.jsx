import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('renders search input', () => {
    render(<SearchBar onSearch={() => {}} />);
    const input = screen.getByPlaceholderText(/search by brand or model/i);
    expect(input).toBeInTheDocument();
  });

  it('calls onSearch when typing', () => {
    const mockOnSearch = vi.fn();
    render(<SearchBar onSearch={mockOnSearch} />);
    
    const input = screen.getByPlaceholderText(/search by brand or model/i);
    fireEvent.change(input, { target: { value: 'iPhone' } });
    
    expect(mockOnSearch).toHaveBeenCalledWith('iPhone');
  });

  it('updates input value when typing', () => {
    render(<SearchBar onSearch={() => {}} />);
    
    const input = screen.getByPlaceholderText(/search by brand or model/i);
    fireEvent.change(input, { target: { value: 'Samsung' } });
    
    expect(input.value).toBe('Samsung');
  });
});
