import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { mockProducts, categories } from "../data/mockData";
import { ProductGrid } from "../components/ui";
import { useCart } from "../context/CartContext";

const ColorContacts = () => {
  const { addItem } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Filter out clear lenses for color contacts page
  const colorProducts = useMemo(() => {
    let filtered = mockProducts.filter(product => product.category !== "clear");
    
    if (selectedCategory !== "all") {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }
    
    return filtered;
  }, [selectedCategory]);

  const handleAddToCart = (productId: string, selectedColor: any) => {
    const product = mockProducts.find(p => p.id === productId);
    if (product && selectedColor) {
      addItem(product, selectedColor, 1);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Color Contact Lenses</h1>
        <p className="text-muted-foreground">
          Transform your look with our premium collection of colored contact lenses. 
          Safe, comfortable, and available in stunning colors.
        </p>
      </div>

      {/* Category Selection */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Shop by Collection</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-9 gap-4">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`flex flex-col items-center p-3 rounded-lg border transition-colors ${
              selectedCategory === "all" 
                ? "border-primary bg-primary/10" 
                : "border-border hover:border-primary/50"
            }`}
          >
            <div className="w-12 h-12 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full mb-2" />
            <span className="text-sm font-medium">All Colors</span>
          </button>
          
          {categories.filter(cat => cat.category !== "clear").map((category) => (
            <button
              key={category.category}
              onClick={() => setSelectedCategory(category.category)}
              className={`flex flex-col items-center p-3 rounded-lg border transition-colors ${
                selectedCategory === category.category 
                  ? "border-primary bg-primary/10" 
                  : "border-border hover:border-primary/50"
              }`}
            >
              <div className="w-12 h-12 bg-background border border-border rounded-full flex items-center justify-center mb-2">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-7 h-7 object-contain"
                />
              </div>
              <span className="text-sm font-medium text-center">{category.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-card border rounded-lg p-6 mb-8">
        <h3 className="font-semibold mb-4">Why Choose SIESTA Color Contacts?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="font-medium mb-2">FDA Approved</h4>
            <p className="text-sm text-muted-foreground">Safe and tested for daily wear</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h4 className="font-medium mb-2">Natural Look</h4>
            <p className="text-sm text-muted-foreground">Blends seamlessly with your natural eye color</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h4 className="font-medium mb-2">Comfortable</h4>
            <p className="text-sm text-muted-foreground">High water content for all-day comfort</p>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-4">
          {selectedCategory === "all" ? "All Color Contacts" : `${categories.find(cat => cat.category === selectedCategory)?.name} Collection`}
        </h3>
      </div>
      
      <ProductGrid 
        products={colorProducts}
        onAddToCart={handleAddToCart}
        emptyMessage="No color contact lenses available in this category"
      />

      {/* Call to Action */}
      <div className="mt-12 text-center bg-muted/50 rounded-lg p-8">
        <h3 className="text-2xl font-bold mb-4">Need Help Choosing?</h3>
        <p className="text-muted-foreground mb-6">
          Our color contact experts are here to help you find the perfect match for your style and eye color.
        </p>
        <Link 
          to="/contact-us" 
          className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition"
        >
          Contact Our Experts
        </Link>
      </div>
    </div>
  );
};

export default ColorContacts;
