import React from 'react';
import EditText from '../ui/EditText';

import Star from '../ui/Star';
import Line from '../ui/Line';

const Footer = () => {
  return (
    <footer className="w-full bg-background-dark">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-9 py-6 lg:py-14">
          {/* Main Footer Content */}
          <div className="relative w-full">
            {/* Newsletter Section */}
            <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-16">
              {/* Left Column - Newsletter */}
              <div className="flex flex-col justify-start items-start w-full lg:w-2/5 gap-4 lg:gap-6">
                <h3 className="text-xl font-bold leading-loose text-text-white uppercase">
                  Stay Updated
                </h3>
                <p className="text-base font-normal leading-normal text-text-white mt-6">
                  Subscribe to our newsletter for exclusive offers, new arrivals, and style
                  inspiration.
                </p>

                {/* Newsletter Signup */}
                <div className="flex flex-col sm:flex-row gap-4 w-full mt-12">
                  <EditText
                    placeholder="Enter your e-mail..."
                    className="flex-1 px-6 py-3 bg-background-primary text-text-light"
                  />
                  <button className="px-8 py-3 bg-background-overlay border border-border-white rounded-sm text-lg font-medium leading-relaxed text-text-white uppercase hover:bg-opacity-90 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Right Column - Contact Info */}
              <div className="flex flex-col justify-start items-start w-full lg:w-1/5 gap-4 lg:gap-6">
                <h3 className="text-xl font-bold leading-loose text-text-white uppercase">
                  Contact Us
                </h3>
                <p className="text-base font-normal leading-normal text-text-white mt-9">
                  +44 221 133 5360
                </p>
                <p className="text-base font-normal leading-normal text-text-white mt-9">
                  customercare@mettamuse.com
                </p>

                {/* Currency Section */}
                <h3 className="text-xl font-bold leading-loose text-text-white uppercase mt-16">
                  Currency
                </h3>

                {/* Currency Selector */}
                <div className="flex flex-row gap-1 items-center mt-12">
                  <div className="w-6 h-6 rounded-md overflow-hidden">
                    <img
                      src="/images/img_group_red_700.svg"
                      className="w-full h-full object-cover"
                      alt="flag"
                    />
                  </div>
                  <Star size="small" fillColor="#ffffff" />
                  <span className="text-base font-bold leading-normal tracking-[1px] text-text-white ml-2">
                    USD
                  </span>
                </div>

                <p className="text-xs font-normal leading-tight text-text-white mt-10">
                  Transactions will be completed in Euros and a currency reference is available on
                  hover.
                </p>
              </div>
            </div>

            {/* Links Section */}
            <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-16 mt-16 lg:mt-8">
              {/* Company Links */}
              <div className="flex flex-col gap-4 lg:gap-5 w-full lg:w-2/5">
                <h3 className="text-3xl font-bold leading-xl text-text-white">StyleCraft</h3>
                <ul className="flex flex-col gap-4 lg:gap-5">
                  <li>
                    <a
                      href="/about"
                      className="text-lg font-normal leading-relaxed text-text-white hover:text-text-accent transition-colors"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/stories"
                      className="text-lg font-normal leading-relaxed text-text-white hover:text-text-accent transition-colors"
                    >
                      Stories
                    </a>
                  </li>
                  <li>
                    <a
                      href="/artisans"
                      className="text-lg font-normal leading-relaxed text-text-white hover:text-text-accent transition-colors"
                    >
                      Artisans
                    </a>
                  </li>
                  <li>
                    <a
                      href="/boutiques"
                      className="text-lg font-normal leading-relaxed text-text-white hover:text-text-accent transition-colors"
                    >
                      Boutiques
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className="text-lg font-normal leading-relaxed text-text-white hover:text-text-accent transition-colors"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/compliance"
                      className="text-lg font-normal leading-relaxed text-text-white hover:text-text-accent transition-colors"
                    >
                      EU Compliances Docs
                    </a>
                  </li>
                </ul>
              </div>

              {/* Quick Links */}
              <div className="flex flex-col gap-4 lg:gap-5 w-full lg:w-2/5">
                <h3 className="text-xl font-bold leading-loose text-text-white uppercase">
                  Quick Links
                </h3>
                <ul className="flex flex-col gap-4 lg:gap-5">
                  <li>
                    <a
                      href="/shipping"
                      className="text-lg font-normal leading-relaxed text-text-white hover:text-text-accent transition-colors"
                    >
                      Orders & Shipping
                    </a>
                  </li>
                  <li>
                    <a
                      href="/seller"
                      className="text-lg font-normal leading-relaxed text-text-white hover:text-text-accent transition-colors"
                    >
                      Join/Login as a Seller
                    </a>
                  </li>
                  <li>
                    <a
                      href="/payment"
                      className="text-lg font-normal leading-relaxed text-text-white hover:text-text-accent transition-colors"
                    >
                      Payment & Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="/returns"
                      className="text-lg font-normal leading-relaxed text-text-white hover:text-text-accent transition-colors"
                    >
                      Return & Refunds
                    </a>
                  </li>
                  <li>
                    <a
                      href="/faqs"
                      className="text-lg font-normal leading-relaxed text-text-white hover:text-text-accent transition-colors"
                    >
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a
                      href="/privacy"
                      className="text-lg font-normal leading-relaxed text-text-white hover:text-text-accent transition-colors"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="/terms"
                      className="text-lg font-normal leading-relaxed text-text-white hover:text-text-accent transition-colors"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                </ul>
              </div>

              {/* Follow Us & Payment Methods */}
              <div className="flex flex-col gap-4 lg:gap-6 w-full lg:w-1/5">
                <h3 className="text-xl font-bold leading-loose text-text-white uppercase">
                  Follow Us
                </h3>

                {/* Social Media Icons */}
                <div className="flex flex-row gap-4 items-center">
                  <img src="/images/img_insta.svg" className="w-8 h-8" alt="instagram" />
                  <img src="/images/img_mdi_linkedin.svg" className="w-6 h-6" alt="linkedin" />
                </div>

                {/* Payment Acceptance */}
                <div className="mt-8">
                  <p className="text-xl font-bold leading-loose text-text-white">
                    <span className="font-bold">StyleCraft </span>
                    <span className="uppercase">Accepts</span>
                  </p>
                </div>

                {/* Payment Methods */}
                <div className="flex flex-row gap-2 items-center mt-4 flex-wrap">
                  <div className="p-2 bg-background-primary border border-border-pink rounded-sm">
                    <img
                      src="/images/img_group_136187.svg"
                      className="w-auto h-3.5"
                      alt="payment method"
                    />
                  </div>
                  <div className="p-1.5 bg-background-primary border border-border-pink rounded-sm">
                    <img
                      src="/images/img_group_136189.svg"
                      className="w-auto h-5"
                      alt="payment method"
                    />
                  </div>
                  <div className="p-1.5 bg-background-primary border border-border-pink rounded-sm">
                    <img
                      src="/images/img_group_136191.svg"
                      className="w-auto h-4.5"
                      alt="payment method"
                    />
                  </div>
                  <div className="p-3 bg-background-brand border border-border-pink rounded-sm">
                    <img
                      src="/images/img_vector.svg"
                      className="w-auto h-2.5"
                      alt="payment method"
                    />
                  </div>
                  <div className="p-2 bg-background-primary border border-border-pink rounded-sm">
                    <img src="/images/img_group.svg" className="w-auto h-4" alt="payment method" />
                  </div>
                  <div className="p-2 bg-background-purple border border-border-pink rounded-sm">
                    <img
                      src="/images/img_vector_white_a700.svg"
                      className="w-auto h-4"
                      alt="payment method"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Divider Line */}
            <div className="mt-12 lg:mt-16">
              <Line width="100%" height="1" color="#ffffff" />
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm font-normal leading-snug text-text-white">
              Copyright © 2025 StyleCraft. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
