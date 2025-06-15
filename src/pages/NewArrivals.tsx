import React from "react";
import { mockProducts } from "../data/mockData";
import { ProductGrid } from "../components/ui";
import { useCart } from "../context/CartContext";

const NewArrivals = () => {
  const { addItem } = useCart();
  
  // Filter for new arrival products
  const newProducts = mockProducts.filter(product => product.isNewArrival);

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
        <h1 className="text-4xl font-bold mb-4">New Arrivals</h1>
        <p className="text-muted-foreground">
          Discover the latest additions to our contact lens collection.
        </p>
      </div>

      {/* New Arrival Banner */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8 mb-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Fresh Styles, Just In!</h2>
        <p className="text-muted-foreground mb-6">
          Be the first to try our newest color contact lenses with exclusive launch discounts.
        </p>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-semibold">
          <span>🎉 20% OFF</span>
          <span>New Arrivals</span>
        </div>
      </div>

      {/* New Arrivals Grid */}
      <ProductGrid 
        products={newProducts}
        onAddToCart={handleAddToCart}
        emptyMessage="No new arrivals at the moment. Check back soon!"
      />
    </div>
  );
};

export default NewArrivals;
