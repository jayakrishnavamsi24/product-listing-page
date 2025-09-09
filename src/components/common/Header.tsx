import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import AuthModal from '../Auth/AuthModal';

const Header = () => {
  const { user, signOut, loading } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const handleAuthClick = (mode: 'signin' | 'signup') => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      setUserMenuOpen(false);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <>
      <header className="w-full bg-background-primary">
        {/* Top Banner */}
        <div className="w-full bg-background-dark">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-row justify-center lg:justify-between items-center py-1.5 gap-4 lg:gap-10 overflow-x-auto lg:overflow-x-visible">
              {/* Banner Items */}
              <div className="flex flex-row gap-2 lg:gap-10 items-center flex-shrink-0">
                <div className="flex flex-row gap-2 items-center">
                  <img src="/images/img_element_4.svg" className="w-4 h-4" alt="" />
                  <span className="text-xs font-normal leading-tight tracking-[1px] text-text-accent whitespace-nowrap">
                    Free shipping on orders over $50
                  </span>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <img src="/images/img_element_4.svg" className="w-4 h-4" alt="" />
                  <span className="text-xs font-normal leading-tight tracking-[1px] text-text-accent whitespace-nowrap">
                    30-day returns & exchanges
                  </span>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <img src="/images/img_element_4.svg" className="w-4 h-4" alt="" />
                  <span className="text-xs font-normal leading-tight tracking-[1px] text-text-accent whitespace-nowrap">
                    Premium customer support
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="w-full border-b border-border-primary">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-8 lg:gap-15 py-6">
              {/* Logo and Actions Row */}
              <div className="flex flex-row justify-between items-center w-full">
                {/* Logo */}
                <div className="flex items-center">
                  <img src="/images/img_logo.svg" className="w-9 h-9" alt="Company logo" />
                </div>

                {/* Center Logo Text - Hidden on mobile */}
                <h1 className="hidden lg:block text-4xl font-extrabold leading-2xl tracking-[1px] text-text-primary">
                  StyleCraft
                </h1>

                {/* Action Icons */}
                <div className="flex flex-row justify-between items-center gap-3 lg:gap-12">
                  {/* Hamburger Menu (Mobile only) */}
                  <button
                    className="block lg:hidden p-2"
                    aria-label="Open menu"
                    onClick={() => setMenuOpen(!menuOpen)}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>

                  {/* Search Icon */}
                  <button aria-label="Search">
                    <img src="/images/img_search_normal.svg" className="w-6 h-6" alt="Search" />
                  </button>

                  {/* Wishlist Icon */}
                  <button aria-label="Wishlist">
                    <img src="/images/img_heart.svg" className="w-6 h-6" alt="Wishlist" />
                  </button>

                  {/* Cart Icon */}
                  <button aria-label="Shopping cart">
                    <img src="/images/img_shopping_bag.svg" className="w-6 h-6" alt="Cart" />
                  </button>

                  {/* User Account Section */}
                  {user ? (
                    <div className="relative">
                      <button
                        onClick={() => setUserMenuOpen(!userMenuOpen)}
                        className="flex items-center gap-2 p-1 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        aria-label="User menu"
                        aria-expanded={userMenuOpen}
                      >
                        {user.photoURL ? (
                          <img
                            src={user.photoURL}
                            alt="Profile"
                            className="w-8 h-8 rounded-full object-cover"
                          />
                        ) : (
                          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-medium">
                              {user.displayName?.charAt(0) || user.email?.charAt(0) || 'U'}
                            </span>
                          </div>
                        )}
                      </button>

                      {/* User Dropdown Menu */}
                      {userMenuOpen && (
                        <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-20">
                          <div className="py-1">
                            <div className="px-4 py-2 text-sm text-gray-700 border-b">
                              <p className="font-medium truncate">{user.displayName || 'User'}</p>
                              <p className="text-gray-500 truncate">{user.email}</p>
                            </div>
                            <button
                              onClick={() => setUserMenuOpen(false)}
                              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              Account Settings
                            </button>
                            <button
                              onClick={() => setUserMenuOpen(false)}
                              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              Order History
                            </button>
                            <hr className="my-1" />
                            <button
                              onClick={handleSignOut}
                              className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                              disabled={loading}
                            >
                              {loading ? 'Signing out...' : 'Sign Out'}
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleAuthClick('signin')}
                        className="text-sm font-medium text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 px-2 py-1 rounded"
                      >
                        Sign In
                      </button>
                      <span className="text-gray-300">|</span>
                      <button
                        onClick={() => handleAuthClick('signup')}
                        className="text-sm font-medium text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 px-2 py-1 rounded"
                      >
                        Sign Up
                      </button>
                    </div>
                  )}

                  {/* Language Selector */}
                  <div className="hidden lg:flex flex-row gap-1 items-center">
                    <span className="text-base font-bold leading-normal tracking-[1px] text-text-secondary">
                      ENG
                    </span>
                    <img
                      src="/images/img_arrow_left.svg"
                      className="w-4 h-4"
                      alt="Language dropdown"
                    />
                  </div>
                </div>
              </div>

              {/* Navigation Menu */}
              <nav
                className={`${menuOpen ? 'block' : 'hidden'} lg:block`}
                role="navigation"
                aria-label="Main navigation"
              >
                <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-8">
                  <a
                    href="/shop"
                    className="text-xl font-bold leading-loose tracking-[1px] text-text-secondary hover:text-text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                  >
                    SHOP
                  </a>
                  <a
                    href="/skills"
                    className="text-xl font-bold leading-loose tracking-[1px] text-text-secondary hover:text-text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                  >
                    SKILLS
                  </a>
                  <a
                    href="/stories"
                    className="text-xl font-bold leading-loose tracking-[1px] text-text-secondary hover:text-text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                  >
                    STORIES
                  </a>
                  <a
                    href="/about"
                    className="text-xl font-bold leading-loose tracking-[1px] text-text-secondary hover:text-text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                  >
                    ABOUT
                  </a>
                  <a
                    href="/contact"
                    className="text-xl font-bold leading-loose tracking-[1px] text-text-secondary hover:text-text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                  >
                    CONTACT US
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        mode={authMode}
        onClose={() => setAuthModalOpen(false)}
        onSwitchMode={setAuthMode}
      />
    </>
  );
};

export default Header;
