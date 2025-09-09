import React, { useState, useEffect } from 'react';
import { ProductFilters } from '../hooks/useProducts';

interface FiltersPanelProps {
  filters: ProductFilters;
  categories: string[];
  onFiltersChange: (filters: Partial<ProductFilters>) => void;
  onClearFilters: () => void;
  isVisible: boolean;
  onToggleVisibility: () => void;
}

const FiltersPanel: React.FC<FiltersPanelProps> = ({
  filters,
  categories,
  onFiltersChange,
  onClearFilters,
  isVisible,
  onToggleVisibility,
}) => {
  const [localMinPrice, setLocalMinPrice] = useState(filters.minPrice.toString());
  const [localMaxPrice, setLocalMaxPrice] = useState(filters.maxPrice.toString());
  const [searchTerm, setSearchTerm] = useState(filters.search);

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      onFiltersChange({ search: searchTerm });
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm, onFiltersChange]);

  // Update local state when filters change externally
  useEffect(() => {
    setLocalMinPrice(filters.minPrice.toString());
    setLocalMaxPrice(filters.maxPrice.toString());
    setSearchTerm(filters.search);
  }, [filters]);

  const handleCategoryChange = (category: string) => {
    const newCategories = filters.category.includes(category)
      ? filters.category.filter((c) => c !== category)
      : [...filters.category, category];

    onFiltersChange({ category: newCategories });
  };

  const handlePriceChange = () => {
    const minPrice = Math.max(0, parseInt(localMinPrice) || 0);
    const maxPrice = Math.max(minPrice, parseInt(localMaxPrice) || 1000);

    onFiltersChange({
      minPrice,
      maxPrice,
    });
  };

  const handleRatingChange = (rating: number) => {
    onFiltersChange({ minRating: rating });
  };

  const activeFiltersCount =
    filters.category.length +
    (filters.minPrice > 0 ? 1 : 0) +
    (filters.maxPrice < 1000 ? 1 : 0) +
    (filters.minRating > 0 ? 1 : 0) +
    (filters.search.length > 0 ? 1 : 0);

  return (
    <>
      {/* Mobile toggle button */}
      <div className="lg:hidden mb-4">
        <button
          onClick={onToggleVisibility}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z"
            />
          </svg>
          Filters
          {activeFiltersCount > 0 && (
            <span className="bg-blue-600 text-white text-xs rounded-full px-2 py-1">
              {activeFiltersCount}
            </span>
          )}
        </button>
      </div>

      {/* Filters panel */}
      <aside
        className={`${
          isVisible ? 'block' : 'hidden'
        } lg:block w-full lg:w-80 bg-white border border-gray-200 rounded-lg p-6`}
        aria-label="Product filters"
      >
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
            {activeFiltersCount > 0 && (
              <button
                onClick={onClearFilters}
                className="text-sm text-blue-600 hover:text-blue-800 underline focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Clear all ({activeFiltersCount})
              </button>
            )}
          </div>

          {/* Search */}
          <div>
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
              Search Products
            </label>
            <input
              id="search"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name or description..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3">Categories</h3>
            <div className="space-y-2">
              {categories.map((category) => {
                const isSelected = filters.category.includes(category);
                return (
                  <label key={category} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => handleCategoryChange(category)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-700 capitalize">
                      {category.replace(/['-]/g, ' ')}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3">Price Range</h3>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="minPrice" className="block text-xs text-gray-500 mb-1">
                  Min Price
                </label>
                <input
                  id="minPrice"
                  type="number"
                  min="0"
                  value={localMinPrice}
                  onChange={(e) => setLocalMinPrice(e.target.value)}
                  onBlur={handlePriceChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="maxPrice" className="block text-xs text-gray-500 mb-1">
                  Max Price
                </label>
                <input
                  id="maxPrice"
                  type="number"
                  min="0"
                  value={localMaxPrice}
                  onChange={(e) => setLocalMaxPrice(e.target.value)}
                  onBlur={handlePriceChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <div className="mt-2 text-xs text-gray-500">
              ${filters.minPrice} - ${filters.maxPrice}
            </div>
          </div>

          {/* Rating Filter */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3">Minimum Rating</h3>
            <div className="space-y-2">
              {[4, 3, 2, 1].map((rating) => (
                <label key={rating} className="flex items-center">
                  <input
                    type="radio"
                    name="rating"
                    checked={filters.minRating === rating}
                    onChange={() => handleRatingChange(rating)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <span className="ml-2 flex items-center">
                    {Array.from({ length: rating }, (_, i) => (
                      <span key={i} className="text-yellow-400">
                        ★
                      </span>
                    ))}
                    {Array.from({ length: 5 - rating }, (_, i) => (
                      <span key={i} className="text-gray-300">
                        ★
                      </span>
                    ))}
                    <span className="ml-1 text-sm text-gray-600">& up</span>
                  </span>
                </label>
              ))}
              <label className="flex items-center">
                <input
                  type="radio"
                  name="rating"
                  checked={filters.minRating === 0}
                  onChange={() => handleRatingChange(0)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <span className="ml-2 text-sm text-gray-600">All ratings</span>
              </label>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default FiltersPanel;
