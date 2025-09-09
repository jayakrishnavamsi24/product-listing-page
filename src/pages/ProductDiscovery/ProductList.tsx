import React, { useState } from 'react';

interface Product {
  id: string;
  name: string;
  price?: string;
  image: string;
  hoverImage?: string;
  isLiked: boolean;
  requiresSignIn: boolean;
}

interface ProductListProps {
  products?: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState('RECOMMENDED');
  const [likedProducts, setLikedProducts] = useState<Set<string>>(new Set());

  const defaultProducts: Product[] = [
    {
      id: '1',
      name: 'PPXOC Milkyway dress in pressed flowers',
      image: '/images/img_hover_pic.png',
      hoverImage: '/images/img_front_pic.png',
      isLiked: false,
      requiresSignIn: true,
    },
    {
      id: '2',
      name: 'PPXOC Milkyway dress in pressed flowers',
      image: '/images/img_hover_pic_398x300.png',
      hoverImage: '/images/img_front_pic_398x300.png',
      isLiked: false,
      requiresSignIn: true,
    },
    {
      id: '3',
      name: 'Elegant Silk Scarf in Midnight Blue',
      image: '/images/img_rectangle_29438.png',
      isLiked: true,
      requiresSignIn: true,
    },
    {
      id: '4',
      name: 'Classic Denim Jacket with Embroidered Details',
      image: '/images/img_rectangle_29438_398x300.png',
      isLiked: false,
      requiresSignIn: true,
    },
    {
      id: '5',
      name: 'Artisan Ceramic Vase Collection',
      image: '/images/img_rectangle_29438_1.png',
      isLiked: false,
      requiresSignIn: true,
    },
    {
      id: '6',
      name: 'Minimalist Gold Chain Necklace',
      image: '/images/img_hover_pic_398x300.png',
      isLiked: false,
      requiresSignIn: true,
    },
    {
      id: '7',
      name: 'Handcrafted Leather Crossbody Bag',
      image: '/images/img_rectangle_29438_2.png',
      isLiked: false,
      requiresSignIn: true,
    },
    {
      id: '8',
      name: 'Organic Cotton Striped T-Shirt',
      image: '/images/img_rectangle_29438_3.png',
      isLiked: false,
      requiresSignIn: true,
    },
    {
      id: '9',
      name: 'Vintage-Inspired Wide Leg Trousers',
      image: '/images/img_rectangle_29438_4.png',
      isLiked: false,
      requiresSignIn: true,
    },
    {
      id: '10',
      name: 'Sustainable Bamboo Sunglasses',
      image: '/images/img_rectangle_29438_5.png',
      isLiked: false,
      requiresSignIn: true,
    },
    {
      id: '11',
      name: 'Cozy Alpaca Wool Sweater in Cream',
      image: '/images/img_rectangle_29438_6.png',
      isLiked: false,
      requiresSignIn: true,
    },
    {
      id: '12',
      name: 'Statement Pearl Drop Earrings',
      image: '/images/img_rectangle_29438_7.png',
      isLiked: false,
      requiresSignIn: true,
    },
    {
      id: '13',
      name: 'Modern Canvas Tote Bag',
      image: '/images/img_rectangle_29438.png',
      isLiked: false,
      requiresSignIn: true,
    },
    {
      id: '14',
      name: 'Floral Print Midi Skirt',
      image: '/images/img_front_pic_398x300.png',
      isLiked: false,
      requiresSignIn: true,
    },
    {
      id: '15',
      name: 'Premium Cashmere Blend Cardigan',
      image: '/images/img_rectangle_29438_398x300.png',
      isLiked: false,
      requiresSignIn: true,
    },
    {
      id: '16',
      name: 'Geometric Print Silk Blouse',
      image: '/images/img_rectangle_29438_4.png',
      isLiked: false,
      requiresSignIn: true,
    },
    {
      id: '17',
      name: 'Artisan Silver Bracelet with Turquoise',
      image: '/images/img_rectangle_29438_1.png',
      isLiked: false,
      requiresSignIn: true,
    },
    {
      id: '18',
      name: 'Eco-Friendly Linen Dress in Sage Green',
      image: '/images/img_rectangle_29438_7.png',
      isLiked: false,
      requiresSignIn: true,
    },
  ];

  const productList = products || defaultProducts;

  const sortOptions = [
    'RECOMMENDED',
    'Newest first',
    'popular',
    'Price : high to low',
    'Price : low to high',
  ];

  const toggleLike = (productId: string) => {
    setLikedProducts((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      return newSet;
    });
  };

  const handleSortSelect = (option: string) => {
    setSelectedSort(option);
    setSortDropdownOpen(false);
  };

  return (
    <div className="w-full lg:w-3/4">
      {/* Header Controls */}
      <div className="bg-background-primary border-t border-border-primary">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center py-6 gap-4">
          {/* Items Count and Filter Toggle */}
          <div className="flex flex-row items-center gap-4 lg:gap-20">
            <span className="text-lg font-bold leading-relaxed text-text-secondary uppercase">
              2,847 Items
            </span>
            <button className="flex flex-row items-center gap-2 px-2 py-3 bg-background-primary">
              <img
                src="/images/img_arrow_left_blue_gray_900.svg"
                className="w-4 h-4"
                alt="filter"
              />
              <span className="text-base font-normal leading-normal text-text-muted underline">
                HIDE FILTER
              </span>
            </button>
          </div>

          {/* Sort Dropdown */}
          <div className="relative">
            <button
              className="flex flex-row items-center gap-2 py-1.5"
              onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
            >
              <span className="text-lg font-bold leading-relaxed text-text-secondary uppercase">
                {selectedSort}
              </span>
              <img src="/images/img_arrow_left.svg" className="w-4 h-4" alt="dropdown" />
            </button>

            {/* Dropdown Menu */}
            {sortDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 bg-background-primary border border-border-primary shadow-lg rounded-sm z-10 min-w-[200px]">
                <div className="flex flex-col gap-7 p-6">
                  {sortOptions.map((option, index) => (
                    <button
                      key={option}
                      className={`text-lg font-normal leading-relaxed text-right uppercase transition-colors ${
                        index === 0
                          ? 'flex flex-row items-center gap-2 font-bold text-text-secondary'
                          : 'text-text-secondary hover:text-text-accent'
                      }`}
                      onClick={() => handleSortSelect(option)}
                    >
                      {index === 0 && (
                        <img
                          src="/images/img_material_symbol.svg"
                          className="w-6 h-6"
                          alt="recommended"
                        />
                      )}
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-0">
        {productList.map((product) => (
          <div key={product.id} className="flex flex-col">
            {/* Product Image */}
            <div className="relative w-full h-[300px] lg:h-[398px] group">
              {product.hoverImage ? (
                <>
                  <img
                    src={product.image}
                    className="absolute inset-0 w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-300"
                    alt={product.name}
                  />
                  <img
                    src={product.hoverImage}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    alt={product.name}
                  />
                </>
              ) : (
                <img
                  src={product.image}
                  className="w-full h-full object-cover"
                  alt={product.name}
                />
              )}
            </div>

            {/* Product Info */}
            <div className="bg-background-primary p-4">
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-bold leading-relaxed text-text-secondary uppercase line-clamp-2">
                  {product.name}
                </h3>

                <div className="flex flex-row justify-between items-center gap-6">
                  <div className="flex-1">
                    <span className="text-sm font-normal leading-snug text-text-muted">
                      <span className="underline">Sign in</span>
                      <span> or Create an account to see pricing</span>
                    </span>
                  </div>

                  <button onClick={() => toggleLike(product.id)} className="flex-shrink-0">
                    <img
                      src={
                        product.isLiked || likedProducts.has(product.id)
                          ? '/images/img_heart_pink_400.svg'
                          : '/images/img_heart_blue_gray_900.svg'
                      }
                      className="w-6 h-6"
                      alt="like"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
