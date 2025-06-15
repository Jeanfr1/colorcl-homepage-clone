import React from "react";
import { Product } from "../../types";
import ProductCard from "./ProductCard";
import LoadingSpinner from "./LoadingSpinner";

interface ProductGridProps {
  products: Product[];
  loading?: boolean;
  onAddToCart?: (productId: string, selectedColor?: any) => void;
  emptyMessage?: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  loading = false,
  onAddToCart,
  emptyMessage = "No products found"
}) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="bg-card rounded-lg shadow-sm border p-4 animate-pulse">
            <div className="aspect-square bg-muted rounded-md mb-4" />
            <div className="space-y-2">
              <div className="h-4 bg-muted rounded w-3/4" />
              <div className="h-3 bg-muted rounded w-1/2" />
              <div className="flex gap-2">
                <div className="w-4 h-4 bg-muted rounded-full" />
                <div className="w-4 h-4 bg-muted rounded-full" />
                <div className="w-4 h-4 bg-muted rounded-full" />
              </div>
              <div className="flex justify-between items-center">
                <div className="h-5 bg-muted rounded w-16" />
                <div className="h-8 bg-muted rounded w-20" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-muted-foreground text-lg mb-4">
          {emptyMessage}
        </div>
        <p className="text-sm text-muted-foreground">
          Try adjusting your search or filters to find what you're looking for.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};

export default ProductGrid;