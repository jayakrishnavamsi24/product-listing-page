// Local storage utilities for persisting filter state

export const STORAGE_KEYS = {
  FILTERS: 'product-filters',
  SORT: 'product-sort',
  WISHLIST: 'user-wishlist',
} as const;

// Generic storage functions with error handling
export const getFromStorage = <T>(key: string, defaultValue: T): T => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.warn(`Error reading from localStorage key "${key}":`, error);
    return defaultValue;
  }
};

export const saveToStorage = <T>(key: string, value: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn(`Error saving to localStorage key "${key}":`, error);
  }
};

export const removeFromStorage = (key: string): void => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.warn(`Error removing from localStorage key "${key}":`, error);
  }
};

// Specific functions for filter persistence
export const saveFilters = (filters: any): void => {
  saveToStorage(STORAGE_KEYS.FILTERS, filters);
};

export const loadFilters = (defaultFilters: any): any => {
  return getFromStorage(STORAGE_KEYS.FILTERS, defaultFilters);
};

export const saveSortPreference = (sortBy: string): void => {
  saveToStorage(STORAGE_KEYS.SORT, sortBy);
};

export const loadSortPreference = (defaultSort: string): string => {
  return getFromStorage(STORAGE_KEYS.SORT, defaultSort);
};

// Wishlist management (user-specific)
export const getWishlistKey = (userId?: string): string => {
  return userId ? `${STORAGE_KEYS.WISHLIST}-${userId}` : STORAGE_KEYS.WISHLIST;
};

export const saveWishlist = (productIds: number[], userId?: string): void => {
  const key = getWishlistKey(userId);
  saveToStorage(key, productIds);
};

export const loadWishlist = (userId?: string): number[] => {
  const key = getWishlistKey(userId);
  return getFromStorage(key, []);
};

export const addToWishlist = (productId: number, userId?: string): void => {
  const current = loadWishlist(userId);
  if (!current.includes(productId)) {
    const updated = [...current, productId];
    saveWishlist(updated, userId);
  }
};

export const removeFromWishlist = (productId: number, userId?: string): void => {
  const current = loadWishlist(userId);
  const updated = current.filter((id) => id !== productId);
  saveWishlist(updated, userId);
};

export const isInWishlist = (productId: number, userId?: string): boolean => {
  const current = loadWishlist(userId);
  return current.includes(productId);
};
