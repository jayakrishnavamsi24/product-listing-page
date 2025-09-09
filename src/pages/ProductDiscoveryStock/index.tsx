import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Button from '../../components/ui/Button';
import FilterSection from './FilterSection';
import ProductList from './ProductList';

const ProductDiscoveryStock = () => {
  return (
    <>
      <Helmet>
        <title>Product Discovery with Stock Status | ShopSphere - Find Available Products</title>
        <meta
          name="description"
          content="Browse our complete product catalog with real-time stock status. Discover available backpacks, toys, and accessories with instant inventory updates and advanced filtering options."
        />
        <meta
          property="og:title"
          content="Product Discovery with Stock Status | ShopSphere - Find Available Products"
        />
        <meta
          property="og:description"
          content="Browse our complete product catalog with real-time stock status. Discover available backpacks, toys, and accessories with instant inventory updates and advanced filtering options."
        />
      </Helmet>

      <main className="w-full bg-background-primary">
        <Header />

        {/* Hero Section */}
        <section className="w-full">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-start items-center gap-15 py-8 lg:py-16">
              {/* Title Section */}
              <div className="flex flex-col justify-start items-center text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal leading-tight sm:leading-snug md:leading-3xl tracking-[1px] uppercase text-text-secondary mb-4">
                  DISCOVER OUR PRODUCTS
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl font-normal leading-loose text-text-secondary w-full sm:w-4/5 md:w-3/5 mt-4">
                  Browse our complete inventory with real-time stock updates. Discover premium
                  fashion, electronics, and lifestyle products with instant availability information
                  and smart filtering options.
                </p>
              </div>

              {/* Filter and Sort Bar */}
              <div className="flex flex-col gap-8 w-full mt-18">
                <div className="flex flex-col lg:flex-row justify-center items-start w-full border-t border-border-primary pt-6 pb-6">
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full gap-4 lg:gap-0">
                    {/* Items Count */}
                    <div className="flex items-center">
                      <span className="text-lg font-bold leading-relaxed uppercase text-text-secondary mt-1.5">
                        2,847 Items
                      </span>
                    </div>

                    {/* Center Section with Filter Button */}
                    <div className="flex flex-row justify-center items-center flex-1 px-0 lg:px-9">
                      <Button
                        text="HIDE FILTER"
                        text_font_size="16px"
                        text_font_family="Adobe Caslon Pro"
                        text_font_weight="400"
                        text_line_height="20px"
                        text_text_align="right"
                        text_text_decoration_line="underline"
                        text_color="#878691"
                        fill_background_color="#ffffff"
                        layout_gap="8px"
                        padding="8px"
                        className="flex items-center gap-2"
                      >
                        <img
                          src="/images/img_arrow_left_blue_gray_900.svg"
                          className="w-4 h-4"
                          alt="filter"
                        />
                        HIDE FILTER
                      </Button>
                    </div>

                    {/* Sort Section */}
                    <div className="flex flex-row justify-end items-center gap-2">
                      <span className="text-lg font-bold leading-relaxed uppercase text-text-secondary">
                        RECOMMENDED
                      </span>
                      <img src="/images/img_arrow_left.svg" className="w-4 h-4 ml-2" alt="sort" />
                    </div>
                  </div>
                </div>

                {/* Main Content Area */}
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-4 w-full">
                  {/* Filter Sidebar */}
                  <div className="w-full lg:w-1/4">
                    <FilterSection />
                  </div>

                  {/* Product Grid */}
                  <div className="w-full lg:w-3/4 ml-0 lg:ml-4">
                    <ProductList />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default ProductDiscoveryStock;
