import React, { useState, useRef, useEffect } from 'react';
import { SortOption } from '../hooks/useProducts';

interface SortBarProps {
  sortBy: SortOption['key'];
  sortOptions: SortOption[];
  onSortChange: (sortKey: SortOption['key']) => void;
  totalItems: number;
  showingItems: number;
}

const SortBar: React.FC<SortBarProps> = ({
  sortBy,
  sortOptions,
  onSortChange,
  totalItems,
  showingItems,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentSort = sortOptions.find((option) => option.key === sortBy);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isDropdownOpen]);

  const handleSortSelect = (sortKey: SortOption['key']) => {
    onSortChange(sortKey);
    setIsDropdownOpen(false);
  };

  return (
    <div className="bg-white border-b border-gray-200 py-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        {/* Items count */}
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">
            Showing {showingItems.toLocaleString()} of {totalItems.toLocaleString()} products
          </span>
        </div>

        {/* Sort dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-expanded={isDropdownOpen}
            aria-haspopup="listbox"
            aria-label="Sort products"
          >
            <span>Sort by: {currentSort?.label}</span>
            <svg
              className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* Dropdown menu */}
          {isDropdownOpen && (
            <div
              className="absolute right-0 top-full mt-1 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-20"
              role="listbox"
              aria-label="Sort options"
            >
              <div className="py-1">
                {sortOptions.map((option) => {
                  const isSelected = option.key === sortBy;
                  return (
                    <button
                      key={option.key}
                      onClick={() => handleSortSelect(option.key)}
                      className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                        isSelected
                          ? 'bg-blue-50 text-blue-700 font-medium'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                      role="option"
                      aria-selected={isSelected}
                    >
                      <div className="flex items-center justify-between">
                        <span>{option.label}</span>
                        {isSelected && (
                          <svg
                            className="w-4 h-4 text-blue-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SortBar;
