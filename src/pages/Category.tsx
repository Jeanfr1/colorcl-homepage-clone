import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { mockProducts } from "../data/mockData";
import { ProductGrid } from "../components/ui";
import { ProductCategory } from "../types";
import { useCart } from "../context/CartContext";

const Category = () => {
  const { addItem } = useCart();
  const { categoryName } = useParams<{ categoryName: string }>();

  const categoryProducts = useMemo(() => {
    if (!categoryName) return [];
    return mockProducts.filter(product => 
      product.category === categoryName.toLowerCase() as ProductCategory
    );
  }, [categoryName]);

  const handleAddToCart = (productId: string, selectedColor: any) => {
    const product = mockProducts.find(p => p.id === productId);
    if (product && selectedColor) {
      addItem(product, selectedColor, 1);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 capitalize">
          {categoryName} Collection
        </h1>
        <p className="text-muted-foreground">
          Discover our {categoryName} collection of premium color contact lenses.
        </p>
      </div>

      <ProductGrid 
        products={categoryProducts}
        onAddToCart={handleAddToCart}
        emptyMessage={`No ${categoryName} products available at the moment`}
      />
    </div>
  );
};

export default Category;