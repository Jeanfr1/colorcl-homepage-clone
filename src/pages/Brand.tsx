import React from "react";
import { Link } from "react-router-dom";

const Brand = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">SIESTA</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Coloring Your Life. Premium contact lenses designed for comfort, safety, and style.
        </p>
        <Link 
          to="/collections"
          className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition"
        >
          Shop Collection
        </Link>
      </div>

      {/* Brand Story */}
      <div className="max-w-4xl mx-auto mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Founded with a passion for enhancing natural beauty, SIESTA has been at the forefront 
              of contact lens innovation for over a decade. We believe that everyone deserves to 
              express their unique style while maintaining comfort and eye health.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our mission is simple: to provide high-quality, safe, and affordable contact lenses 
              that help you see and be seen in your best light.
            </p>
          </div>
          <div className="bg-muted rounded-lg aspect-[4/3] flex items-center justify-center">
            <span className="text-muted-foreground">Brand Story Image</span>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Safety First</h3>
            <p className="text-muted-foreground">
              All our products are FDA approved and manufactured in certified facilities with rigorous quality control.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Customer Love</h3>
            <p className="text-muted-foreground">
              We're dedicated to providing exceptional customer service and products that our customers absolutely love.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Innovation</h3>
            <p className="text-muted-foreground">
              We continuously research and develop new technologies to improve comfort, durability, and visual appeal.
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-muted/50 rounded-lg p-8 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">10+</div>
            <p className="text-sm text-muted-foreground">Years of Excellence</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">50K+</div>
            <p className="text-sm text-muted-foreground">Happy Customers</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">100+</div>
            <p className="text-sm text-muted-foreground">Products Available</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">99%</div>
            <p className="text-sm text-muted-foreground">Customer Satisfaction</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Look?</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied customers who trust SIESTA for their contact lens needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/color-contacts"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition"
          >
            Shop Color Contacts
          </Link>
          <Link 
            to="/clear-lenses"
            className="inline-flex items-center px-6 py-3 border border-primary text-primary rounded-full font-semibold hover:bg-primary/10 transition"
          >
            Shop Clear Lenses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Brand;
