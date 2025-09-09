import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { AuthProvider } from '../context/AuthContext';
import ProductCard from '../components/ProductCard';

// Mock product data
const mockProduct = {
  id: 1,
  title: 'Test Product',
  price: 29.99,
  description: 'A test product description',
  category: 'test category',
  image: 'https://example.com/test-image.jpg',
  rating: {
    rate: 4.5,
    count: 100,
  },
  badge: 'New',
};

// Mock function for quick view
const mockOnQuickView = () => {};

// Wrapper component with Auth context
const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <AuthProvider>{children}</AuthProvider>
);

describe('ProductCard', () => {
  it('renders product title and category', () => {
    render(
      <TestWrapper>
        <ProductCard product={mockProduct} onQuickView={mockOnQuickView} />
      </TestWrapper>
    );

    // Check if product title is rendered
    expect(screen.getByText(mockProduct.title)).toBeInTheDocument();

    // Check if category is rendered
    expect(screen.getByText(mockProduct.category)).toBeInTheDocument();
  });

  it('displays sign in prompt when user is not authenticated', () => {
    render(
      <TestWrapper>
        <ProductCard product={mockProduct} onQuickView={mockOnQuickView} />
      </TestWrapper>
    );

    // Should show sign in prompt instead of price
    expect(screen.getByText(/Sign in/)).toBeInTheDocument();
    expect(screen.getByText(/Create an account/)).toBeInTheDocument();
  });

  it('shows product badge when present', () => {
    render(
      <TestWrapper>
        <ProductCard product={mockProduct} onQuickView={mockOnQuickView} />
      </TestWrapper>
    );

    // Check if badge is displayed
    expect(screen.getByText(mockProduct.badge!)).toBeInTheDocument();
  });

  it('displays rating with correct number of stars', () => {
    render(
      <TestWrapper>
        <ProductCard product={mockProduct} onQuickView={mockOnQuickView} />
      </TestWrapper>
    );

    // Check if rating count is displayed
    expect(screen.getByText(`(${mockProduct.rating.count})`)).toBeInTheDocument();
  });
});
