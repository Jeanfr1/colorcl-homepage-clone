import React, { useState, useMemo } from "react";
import { mockProducts } from "../data/mockData";
import { ProductGrid, Button } from "../components/ui";
import { Product, ProductCategory } from "../types";
import { useCart } from "../context/CartContext";

const Collections = () => {
  const { addItem } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | "all">("all");
  const [sortBy, setSortBy] = useState<"name" | "price" | "newest">("name");
  const [showOnSale, setShowOnSale] = useState(false);
  const [showInStock, setShowInStock] = useState(false);

  const categories: { value: ProductCategory | "all"; label: string }[] = [
    { value: "all", label: "All Products" },
    { value: "bliss", label: "Bliss" },
    { value: "romance", label: "Romance" },
    { value: "crystal", label: "Crystal" },
    { value: "iris", label: "Iris" },
    { value: "halo", label: "Halo" },
    { value: "sahara", label: "Sahara" },
    { value: "masterpiece", label: "Master Piece" },
    { value: "lychee", label: "Lychee" },
    { value: "persona", label: "Persona" },
    { value: "clear", label: "Clear" }
  ];

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = mockProducts;

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by sale status
    if (showOnSale) {
      filtered = filtered.filter(product => product.isOnSale);
    }

    // Filter by stock status
    if (showInStock) {
      filtered = filtered.filter(product => product.inStock);
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price":
          return a.price - b.price;
        case "newest":
          return b.isNewArrival ? 1 : -1;
        case "name":
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [selectedCategory, sortBy, showOnSale, showInStock]);

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
        <h1 className="text-4xl font-bold mb-4">Collections</h1>
        <p className="text-muted-foreground">
          Discover our complete collection of premium color contact lenses
        </p>
      </div>

      {/* Filters */}
      <div className="bg-card border rounded-lg p-6 mb-8">
        <h3 className="font-semibold mb-4">Filter & Sort</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Category Filter */}
          <div>
            <label className="block text-sm font-medium mb-2">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value as ProductCategory | "all")}
              className="w-full p-2 border border-input rounded-md bg-background"
            >
              {categories.map(category => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>

          {/* Sort Filter */}
          <div>
            <label className="block text-sm font-medium mb-2">Sort By</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "name" | "price" | "newest")}
              className="w-full p-2 border border-input rounded-md bg-background"
            >
              <option value="name">Name A-Z</option>
              <option value="price">Price Low-High</option>
              <option value="newest">Newest First</option>
            </select>
          </div>

          {/* Checkboxes */}
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={showOnSale}
                onChange={(e) => setShowOnSale(e.target.checked)}
                className="rounded border-gray-300"
              />
              <span className="text-sm">On Sale Only</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={showInStock}
                onChange={(e) => setShowInStock(e.target.checked)}
                className="rounded border-gray-300"
              />
              <span className="text-sm">In Stock Only</span>
            </label>
          </div>

          {/* Results Count */}
          <div className="flex items-end">
            <p className="text-sm text-muted-foreground">
              {filteredAndSortedProducts.length} product{filteredAndSortedProducts.length !== 1 ? 's' : ''} found
            </p>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <ProductGrid 
        products={filteredAndSortedProducts}
        onAddToCart={handleAddToCart}
        emptyMessage="No products match your current filters"
      />
    </div>
  );
};

export default Collections;
