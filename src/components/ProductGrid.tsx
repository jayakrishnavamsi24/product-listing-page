import React from 'react';
import { Product } from '../hooks/useProducts';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
  loading: boolean;
  onProductQuickView: (product: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, loading, onProductQuickView }) => {
  // Skeleton loader component
  const SkeletonCard = () => (
    <div className="bg-white animate-pulse">
      <div className="w-full h-64 sm:h-72 lg:h-80 bg-gray-200" />
      <div className="p-4">
        <div className="h-4 bg-gray-200 rounded mb-2" />
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-3" />
        <div className="h-6 bg-gray-200 rounded w-1/3" />
      </div>
    </div>
  );

  // Loading state
  if (loading) {
    return (
      <section className="w-full" aria-label="Loading products">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
          {Array.from({ length: 12 }, (_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      </section>
    );
  }

  // Empty state
  if (products.length === 0) {
    return (
      <section className="w-full py-16" aria-label="No products found">
        <div className="text-center">
          <div className="mb-6">
            <svg
              className="mx-auto h-24 w-24 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
          <p className="text-gray-500 mb-6">
            Try adjusting your filters or search terms to find what you're looking for.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Reset filters
          </button>
        </div>
      </section>
    );
  }

  // Products grid
  return (
    <section className="w-full" aria-label={`${products.length} products`}>
      {/* Screen reader announcement */}
      <div className="sr-only" aria-live="polite">
        Showing {products.length} product{products.length !== 1 ? 's' : ''}
      </div>

      {/* Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onQuickView={onProductQuickView} />
        ))}
      </div>

      {/* Load more indicator (for future pagination) */}
      {products.length > 0 && products.length % 12 === 0 && (
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">Showing {products.length} products</p>
        </div>
      )}
    </section>
  );
};

export default ProductGrid;
