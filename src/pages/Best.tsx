import React from "react";
import { mockProducts } from "../data/mockData";
import { ProductGrid } from "../components/ui";
import { useCart } from "../context/CartContext";

const Best = () => {
  const { addItem } = useCart();
  
  // Filter for best seller products
  const bestSellers = mockProducts.filter(product => product.isBestSeller);

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
        <h1 className="text-4xl font-bold mb-4">Best Sellers</h1>
        <p className="text-muted-foreground">
          Our most popular contact lenses, loved by customers worldwide.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-card border rounded-lg p-6 text-center">
          <div className="text-3xl font-bold text-primary mb-2">50K+</div>
          <p className="text-muted-foreground">Happy Customers</p>
        </div>
        <div className="bg-card border rounded-lg p-6 text-center">
          <div className="text-3xl font-bold text-primary mb-2">4.8★</div>
          <p className="text-muted-foreground">Average Rating</p>
        </div>
        <div className="bg-card border rounded-lg p-6 text-center">
          <div className="text-3xl font-bold text-primary mb-2">99%</div>
          <p className="text-muted-foreground">Repeat Customers</p>
        </div>
      </div>

      {/* Best Sellers Grid */}
      <ProductGrid 
        products={bestSellers}
        onAddToCart={handleAddToCart}
        emptyMessage="No best sellers available at the moment"
      />
    </div>
  );
};

export default Best;
