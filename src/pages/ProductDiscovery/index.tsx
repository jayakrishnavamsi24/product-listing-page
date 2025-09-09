import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import FiltersPanel from '../../components/FiltersPanel';
import SortBar from '../../components/SortBar';
import ProductGrid from '../../components/ProductGrid';
import ProductModal from '../../components/ProductModal';
import { useProducts, Product } from '../../hooks/useProducts';

const ProductDiscovery = () => {
  const {
    products,
    allProducts,
    loading,
    error,
    filters,
    sortBy,
    categories,
    sortOptions,
    updateFilters,
    clearFilters,
    setSortBy,
  } = useProducts();

  const [filtersVisible, setFiltersVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductQuickView = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
  };

  const toggleFiltersVisibility = () => {
    setFiltersVisible(!filtersVisible);
  };

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            We're experiencing some technical difficulties
          </h2>
          <p className="text-gray-600 mb-6">
            Don't worry! Our team is working to resolve this issue. Please try again in a moment.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Refresh Page
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Discover Our Products | Premium Fashion & Accessories Collection</title>
        <meta
          name="description"
          content="Explore our curated collection of premium fashion items, accessories, and lifestyle products. Filter by category, price, and style to find your perfect match. Shop customizable options for men, women, and kids."
        />
        <meta
          property="og:title"
          content="Discover Our Products | Premium Fashion & Accessories Collection"
        />
        <meta
          property="og:description"
          content="Explore our curated collection of premium fashion items, accessories, and lifestyle products. Filter by category, price, and style to find your perfect match."
        />
      </Helmet>

      <main className="w-full bg-background-primary">
        {/* Header */}
        <Header />

        {/* Hero Section */}
        <section className="w-full">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-4 lg:gap-15 py-8 lg:py-12">
              {/* Hero Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight lg:leading-3xl text-text-secondary text-center uppercase tracking-[1px]">
                Discover our products
              </h1>

              {/* Hero Description */}
              <p className="text-lg sm:text-xl lg:text-2xl font-normal leading-loose text-text-secondary text-center max-w-4xl">
                Explore our carefully curated collection of premium fashion, electronics, jewelry,
                and lifestyle products. Find exactly what you're looking for with advanced filtering
                and personalized recommendations.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="w-full">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Filters Sidebar */}
              <div className="lg:w-80 flex-shrink-0">
                <FiltersPanel
                  filters={filters}
                  categories={categories}
                  onFiltersChange={updateFilters}
                  onClearFilters={clearFilters}
                  isVisible={filtersVisible}
                  onToggleVisibility={toggleFiltersVisibility}
                />
              </div>

              {/* Product List Area */}
              <div className="flex-1">
                {/* Sort Bar */}
                <SortBar
                  sortBy={sortBy}
                  sortOptions={sortOptions}
                  onSortChange={setSortBy}
                  totalItems={allProducts.length}
                  showingItems={products.length}
                />

                {/* Product Grid */}
                <div className="mt-6">
                  <ProductGrid
                    products={products}
                    loading={loading}
                    onProductQuickView={handleProductQuickView}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="mt-16">
          <Footer />
        </div>
      </main>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={closeProductModal}
      />
    </>
  );
};

export default ProductDiscovery;
