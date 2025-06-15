import React, { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { mockProducts } from "../data/mockData";
import { ProductGrid } from "../components/ui";
import { useCart } from "../context/CartContext";

const Search = () => {
  const { addItem } = useCart();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [localQuery, setLocalQuery] = useState(query);

  useEffect(() => {
    setLocalQuery(query);
  }, [query]);

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];

    const searchTerm = query.toLowerCase().trim();
    
    return mockProducts.filter(product => {
      // Search in product name
      if (product.name.toLowerCase().includes(searchTerm)) return true;
      
      // Search in description
      if (product.description.toLowerCase().includes(searchTerm)) return true;
      
      // Search in category
      if (product.category.toLowerCase().includes(searchTerm)) return true;
      
      // Search in brand
      if (product.brand.toLowerCase().includes(searchTerm)) return true;
      
      // Search in tags
      if (product.tags.some(tag => tag.toLowerCase().includes(searchTerm))) return true;
      
      // Search in colors
      if (product.colors.some(color => color.name.toLowerCase().includes(searchTerm))) return true;
      
      return false;
    });
  }, [query]);

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
        {query ? (
          <>
            <h1 className="text-4xl font-bold mb-4">
              Search Results for "{query}"
            </h1>
            <p className="text-muted-foreground">
              Found {searchResults.length} product{searchResults.length !== 1 ? 's' : ''} matching your search
            </p>
          </>
        ) : (
          <>
            <h1 className="text-4xl font-bold mb-4">Search</h1>
            <p className="text-muted-foreground">
              Enter a search term to find products
            </p>
          </>
        )}
      </div>

      {/* Search Suggestions */}
      {!query && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Popular Searches</h3>
          <div className="flex flex-wrap gap-2">
            {["brown", "blue", "green", "clear", "daily", "monthly", "bliss", "romance"].map((term) => (
              <button
                key={term}
                onClick={() => {
                  const newParams = new URLSearchParams();
                  newParams.set("q", term);
                  window.location.href = `/search?${newParams.toString()}`;
                }}
                className="px-3 py-1 bg-muted hover:bg-muted/80 rounded-full text-sm transition-colors"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Search Results */}
      {query && (
        <>
          {searchResults.length > 0 ? (
            <ProductGrid 
              products={searchResults}
              onAddToCart={handleAddToCart}
              emptyMessage={`No products found for "${query}"`}
            />
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">No results found</h3>
              <p className="text-muted-foreground mb-6">
                We couldn't find any products matching "{query}". Try searching for:
              </p>
              
              {/* Search suggestions */}
              <div className="space-y-2 text-left max-w-md mx-auto">
                <p className="text-sm font-medium">Search suggestions:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Check your spelling</li>
                  <li>• Try different keywords</li>
                  <li>• Search for product categories like "brown contacts" or "daily lenses"</li>
                  <li>• Browse our <a href="/collections" className="text-primary hover:underline">full collection</a></li>
                </ul>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Search;