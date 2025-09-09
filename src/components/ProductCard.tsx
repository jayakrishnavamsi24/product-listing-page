import React, { useState } from 'react';
import { Product } from '../hooks/useProducts';
import { useAuth } from '../context/AuthContext';
import { addToWishlist, removeFromWishlist, isInWishlist } from '../utils/localStorage';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const { user } = useAuth();
  const [isLiked, setIsLiked] = useState(() => isInWishlist(product.id, user?.uid));
  const [imageLoaded, setImageLoaded] = useState(false);

  // Toggle wishlist
  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (!user) {
      // Show sign-in prompt or modal
      alert('Please sign in to add items to your wishlist');
      return;
    }

    if (isLiked) {
      removeFromWishlist(product.id, user.uid);
      setIsLiked(false);
    } else {
      addToWishlist(product.id, user.uid);
      setIsLiked(true);
    }
  };

  // Generate star rating display
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <span key={i} className="text-yellow-400 text-sm">
            ★
          </span>
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <span key={i} className="text-yellow-400 text-sm relative">
            <span className="absolute inset-0 overflow-hidden w-1/2">★</span>
            <span className="text-gray-300">★</span>
          </span>
        );
      } else {
        stars.push(
          <span key={i} className="text-gray-300 text-sm">
            ★
          </span>
        );
      }
    }

    return stars;
  };

  const handleQuickView = () => {
    onQuickView(product);
  };

  return (
    <article className="group relative bg-white transition-all duration-300 hover:shadow-lg">
      {/* Product Image Container */}
      <div className="relative w-full h-64 sm:h-72 lg:h-80 overflow-hidden">
        {/* Skeleton loader */}
        {!imageLoaded && <div className="absolute inset-0 bg-gray-200 animate-pulse" />}

        {/* Product Image */}
        <img
          src={product.image}
          alt={product.title}
          className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-105 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          onError={(e) => {
            // Fallback to placeholder if image fails
            const target = e.target as HTMLImageElement;
            target.src = '/images/img_rectangle_29438.png';
            setImageLoaded(true);
          }}
        />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 z-10">
            <span
              className={`px-2 py-1 text-xs font-bold uppercase rounded-sm ${
                product.badge === 'Sale'
                  ? 'bg-red-500 text-white'
                  : product.badge === 'New'
                    ? 'bg-green-500 text-white'
                    : product.badge === 'Premium'
                      ? 'bg-purple-500 text-white'
                      : 'bg-gray-800 text-white'
              }`}
            >
              {product.badge}
            </span>
          </div>
        )}

        {/* Wishlist Button */}
        <button
          onClick={handleToggleWishlist}
          className="absolute top-3 right-3 z-10 p-2 bg-white bg-opacity-80 rounded-full transition-all duration-200 hover:bg-opacity-100 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-pink-400"
          aria-label={isLiked ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <svg
            className={`w-5 h-5 transition-colors duration-200 ${
              isLiked ? 'text-pink-500 fill-current' : 'text-gray-600'
            }`}
            fill={isLiked ? 'currentColor' : 'none'}
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>

        {/* Hover overlay with quick view */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <button
            onClick={handleQuickView}
            className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white text-black px-6 py-2 font-medium hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label={`Quick view ${product.title}`}
          >
            Quick View
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Product Title */}
        <h3 className="text-base lg:text-lg font-medium text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {product.title}
        </h3>

        {/* Category */}
        <p className="text-sm text-gray-500 mb-2 capitalize">{product.category}</p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">{renderStars(product.rating.rate)}</div>
          <span className="text-sm text-gray-500">({product.rating.count})</span>
        </div>

        {/* Price and Sign-in prompt */}
        <div className="flex items-center justify-between">
          {user ? (
            <span className="text-lg lg:text-xl font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
          ) : (
            <div className="flex-1">
              <p className="text-sm text-gray-600">
                <button className="text-blue-600 underline hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  Sign in
                </button>{' '}
                or{' '}
                <button className="text-blue-600 underline hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  Create an account
                </button>{' '}
                to see pricing
              </p>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
