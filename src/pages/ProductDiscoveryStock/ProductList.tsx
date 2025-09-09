import React, { useState } from 'react';

interface Product {
  id: string;
  name: string;
  image: string;
  hoverImage?: string;
  isNew?: boolean;
  isOutOfStock?: boolean;
  pricing: string;
  isFavorite?: boolean;
}

interface ProductListProps {
  className?: string;
}

const ProductList = ({ className = '' }: ProductListProps) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (productId: string) => {
    setFavorites((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  const products: Product[] = [
    {
      id: '1',
      name: 'PPXOC Milkyway dress in pressed flowers',
      image: '/images/img_hover_pic.png',
      hoverImage: '/images/img_front_pic.png',
      isNew: true,
      pricing: 'Sign in or Create an account to see pricing',
    },
    {
      id: '2',
      name: 'PPXOC Milkyway dress in pressed flowers',
      image: '/images/img_hover_pic_398x300.png',
      hoverImage: '/images/img_front_pic_398x300.png',
      isOutOfStock: true,
      pricing: 'Sign in or Create an account to see pricing',
    },
    {
      id: '3',
      name: 'Elegant Silk Scarf in Midnight Blue',
      image: '/images/img_rectangle_29438.png',
      pricing: 'Sign in or Create an account to see pricing',
      isFavorite: true,
    },
    {
      id: '4',
      name: 'Classic Denim Jacket with Embroidered Details',
      image: '/images/img_rectangle_29438_398x300.png',
      pricing: 'Sign in or Create an account to see pricing',
    },
    {
      id: '5',
      name: 'Artisan Ceramic Vase Collection',
      image: '/images/img_rectangle_29438_1.png',
      pricing: 'Sign in or Create an account to see pricing',
    },
    {
      id: '6',
      name: 'Minimalist Gold Chain Necklace',
      image: '/images/img_hover_pic_398x300.png',
      pricing: 'Sign in or Create an account to see pricing',
    },
    {
      id: '7',
      name: 'Handcrafted Leather Crossbody Bag',
      image: '/images/img_rectangle_29438_2.png',
      pricing: 'Sign in or Create an account to see pricing',
    },
    {
      id: '8',
      name: 'Organic Cotton Striped T-Shirt',
      image: '/images/img_rectangle_29438_3.png',
      pricing: 'Sign in or Create an account to see pricing',
    },
    {
      id: '9',
      name: 'Vintage-Inspired Wide Leg Trousers',
      image: '/images/img_rectangle_29438_4.png',
      pricing: 'Sign in or Create an account to see pricing',
    },
    {
      id: '10',
      name: 'Sustainable Bamboo Sunglasses',
      image: '/images/img_rectangle_29438_5.png',
      pricing: 'Sign in or Create an account to see pricing',
    },
    {
      id: '11',
      name: 'Cozy Alpaca Wool Sweater in Cream',
      image: '/images/img_rectangle_29438_6.png',
      pricing: 'Sign in or Create an account to see pricing',
    },
    {
      id: '12',
      name: 'Statement Pearl Drop Earrings',
      image: '/images/img_rectangle_29438_7.png',
      pricing: 'Sign in or Create an account to see pricing',
    },
    {
      id: '13',
      name: 'Modern Canvas Tote Bag',
      image: '/images/img_rectangle_29438.png',
      pricing: 'Sign in or Create an account to see pricing',
    },
    {
      id: '14',
      name: 'Floral Print Midi Skirt',
      image: '/images/img_front_pic_398x300.png',
      pricing: 'Sign in or Create an account to see pricing',
    },
    {
      id: '15',
      name: 'Premium Cashmere Blend Cardigan',
      image: '/images/img_rectangle_29438_398x300.png',
      pricing: 'Sign in or Create an account to see pricing',
    },
    {
      id: '16',
      name: 'Geometric Print Silk Blouse',
      image: '/images/img_rectangle_29438_4.png',
      pricing: 'Sign in or Create an account to see pricing',
    },
    {
      id: '17',
      name: 'Artisan Silver Bracelet with Turquoise',
      image: '/images/img_rectangle_29438_1.png',
      pricing: 'Sign in or Create an account to see pricing',
    },
    {
      id: '18',
      name: 'Eco-Friendly Linen Dress in Sage Green',
      image: '/images/img_rectangle_29438_7.png',
      pricing: 'Sign in or Create an account to see pricing',
    },
  ];

  return (
    <div className={`w-full ${className}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col w-full">
            {/* Product Image Container */}
            <div className="relative w-full h-[300px] sm:h-[350px] md:h-[398px] mb-4">
              {product.hoverImage ? (
                <div className="relative w-full h-full">
                  <img
                    src={product.hoverImage}
                    className="w-full h-full object-cover"
                    alt={product.name}
                  />
                  <img
                    src={product.image}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-300"
                    alt={product.name}
                  />
                  {product.isNew && (
                    <div className="absolute top-2 left-5">
                      <span className="text-sm font-bold leading-snug uppercase text-text-primary">
                        new product
                      </span>
                    </div>
                  )}
                  {product.isOutOfStock && (
                    <div className="absolute inset-0 bg-background-primary bg-opacity-50 flex items-center justify-center">
                      <button className="px-8 py-5 bg-background-primary text-xl font-bold leading-loose uppercase text-text-secondary">
                        out of stock
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <img
                  src={product.image}
                  className="w-full h-full object-cover"
                  alt={product.name}
                />
              )}
            </div>

            {/* Product Info */}
            <div className="bg-background-primary flex flex-row justify-start items-end w-full">
              <div className="flex flex-col justify-start items-start w-full mt-4">
                <h3 className="text-lg font-bold leading-relaxed uppercase text-text-secondary w-4/5 mb-2">
                  {product.name}
                </h3>
                <div className="flex flex-row gap-6 justify-start items-center w-auto">
                  <p className="text-sm font-normal leading-snug text-text-muted self-end">
                    <span className="underline">Sign in</span>
                    <span> or Create an account to see pricing</span>
                  </p>
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className="w-6 h-6"
                    aria-label="Add to favorites"
                  >
                    <img
                      src={
                        favorites.includes(product.id) || product.isFavorite
                          ? '/images/img_heart_pink_400.svg'
                          : '/images/img_heart.svg'
                      }
                      className="w-6 h-6"
                      alt="favorite"
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
