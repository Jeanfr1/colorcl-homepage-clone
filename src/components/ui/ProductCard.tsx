import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "../../types";

interface ProductCardProps {
  product: Product;
  onAddToCart?: (productId: string, selectedColor?: any) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  return (
    <div className="bg-card rounded-lg shadow-sm border p-4 hover:shadow-md transition-shadow">
      <Link to={`/product/${product.id}`}>
        <div className="aspect-square bg-muted rounded-md mb-4 overflow-hidden relative">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform"
          />
          {product.isOnSale && (
            <div className="absolute top-2 left-2 bg-destructive text-destructive-foreground px-2 py-1 rounded-full text-xs font-semibold">
              Sale
            </div>
          )}
          {product.isNewArrival && (
            <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-semibold">
              New
            </div>
          )}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="text-white font-semibold">Out of Stock</span>
            </div>
          )}
        </div>
      </Link>
      
      <div className="space-y-2">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold hover:text-primary transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center gap-2">
          {product.colors.slice(0, 3).map((color, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.preventDefault();
                setSelectedColorIndex(index);
              }}
              className={`w-4 h-4 rounded-full border-2 transition-all ${
                selectedColorIndex === index ? "border-primary" : "border-border"
              }`}
              style={{ backgroundColor: color.hex }}
              title={color.name}
            />
          ))}
          {product.colors.length > 3 && (
            <span className="text-xs text-muted-foreground">
              +{product.colors.length - 3} more
            </span>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-muted-foreground line-through text-sm">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          
          <button
            onClick={(e) => {
              e.preventDefault();
              onAddToCart?.(product.id, product.colors[selectedColorIndex]);
            }}
            disabled={!product.inStock}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {product.inStock ? "Add to Cart" : "Out of Stock"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;