import { beforeEach, afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock Firebase
const mockFirebase = {
  auth: {
    currentUser: null,
    onAuthStateChanged: () => () => {},
  },
  initializeApp: () => ({}),
  getAuth: () => mockFirebase.auth,
};

// Mock Firebase modules
vi.mock('../lib/firebase', () => ({
  auth: mockFirebase.auth,
  googleProvider: {},
}));

// Cleanup after each test
afterEach(() => {
  cleanup();
});
