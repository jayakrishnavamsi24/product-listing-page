import { useState, useEffect, useCallback } from 'react';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  badge?: string;
}

export interface ProductFilters {
  category: string[];
  minPrice: number;
  maxPrice: number;
  minRating: number;
  search: string;
}

export interface SortOption {
  key: 'price-low' | 'price-high' | 'rating' | 'default';
  label: string;
}

const SORT_OPTIONS: SortOption[] = [
  { key: 'default', label: 'RECOMMENDED' },
  { key: 'price-low', label: 'Price: Low to High' },
  { key: 'price-high', label: 'Price: High to Low' },
  { key: 'rating', label: 'Rating' },
];

const DEFAULT_FILTERS: ProductFilters = {
  category: [],
  minPrice: 0,
  maxPrice: 1000,
  minRating: 0,
  search: '',
};

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<ProductFilters>(DEFAULT_FILTERS);
  const [sortBy, setSortBy] = useState<SortOption['key']>('default');
  const [categories, setCategories] = useState<string[]>([]);

  // Load products data
  const loadProducts = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      // Try to fetch from API first
      const response = await fetch('https://fakestoreapi.com/products');

      if (!response.ok) {
        throw new Error('Failed to fetch from API');
      }

      const apiData = await response.json();

      // Add badges to some products for visual variety
      const enhancedData = apiData.map((product: Product, index: number) => ({
        ...product,
        badge:
          index % 4 === 0 ? 'New' : index % 5 === 0 ? 'Sale' : index % 7 === 0 ? 'Premium' : '',
      }));

      setProducts(enhancedData);

      // Extract unique categories
      const uniqueCategories = [
        ...new Set(enhancedData.map((p: Product) => p.category)),
      ] as string[];
      setCategories(uniqueCategories);
    } catch (err) {
      console.warn('API fetch failed, using fallback data:', err);

      try {
        // Fallback to local JSON
        const fallbackResponse = await fetch('/products-fallback.json');

        if (!fallbackResponse.ok) {
          throw new Error('Failed to load fallback data');
        }

        const fallbackData = await fallbackResponse.json();
        setProducts(fallbackData);

        // Extract unique categories from fallback data
        const uniqueCategories = [
          ...new Set(fallbackData.map((p: Product) => p.category)),
        ] as string[];
        setCategories(uniqueCategories);
      } catch (fallbackErr) {
        setError('Failed to load product data');
        console.error('Both API and fallback failed:', fallbackErr);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  // Apply filters and sorting
  const applyFiltersAndSort = useCallback(() => {
    let filtered = [...products];

    // Apply category filter
    if (filters.category.length > 0) {
      filtered = filtered.filter((product) => filters.category.includes(product.category));
    }

    // Apply price range filter
    filtered = filtered.filter(
      (product) => product.price >= filters.minPrice && product.price <= filters.maxPrice
    );

    // Apply rating filter
    filtered = filtered.filter((product) => product.rating.rate >= filters.minRating);

    // Apply search filter
    if (filters.search.trim()) {
      const searchTerm = filters.search.toLowerCase();
      filtered = filtered.filter(
        (product) =>
          product.title.toLowerCase().includes(searchTerm) ||
          product.description.toLowerCase().includes(searchTerm) ||
          product.category.toLowerCase().includes(searchTerm)
      );
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating.rate - a.rating.rate);
        break;
      default:
        // Keep original order for recommended
        break;
    }

    setFilteredProducts(filtered);
  }, [products, filters, sortBy]);

  // Update filters
  const updateFilters = useCallback((newFilters: Partial<ProductFilters>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  }, []);

  // Clear all filters
  const clearFilters = useCallback(() => {
    setFilters(DEFAULT_FILTERS);
  }, []);

  // Load products on mount
  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  // Apply filters when products or filters change
  useEffect(() => {
    applyFiltersAndSort();
  }, [applyFiltersAndSort]);

  return {
    products: filteredProducts,
    allProducts: products,
    loading,
    error,
    filters,
    sortBy,
    categories,
    sortOptions: SORT_OPTIONS,
    updateFilters,
    clearFilters,
    setSortBy,
    reload: loadProducts,
  };
};
