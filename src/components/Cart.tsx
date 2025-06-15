import React from "react";
import { useCart } from "../context/CartContext";
import { Button } from "./ui";

const Cart: React.FC = () => {
  const { state, removeItem, updateQuantity, closeCart, clearCart } = useCart();
  const { cart, isOpen } = state;

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={closeCart}
      />
      
      {/* Cart Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-background shadow-xl z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Shopping Cart</h2>
          <button
            onClick={closeCart}
            className="p-2 hover:bg-muted rounded-full"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {cart.items.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 7H6L5 9z" />
                </svg>
              </div>
              <p className="text-muted-foreground">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.items.map((item) => (
                <div key={`${item.productId}-${item.selectedColor.name}`} className="flex gap-4 p-4 border rounded-lg">
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-16 h-16 object-cover rounded-md bg-muted"
                  />
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-sm line-clamp-2">{item.product.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div
                        className="w-3 h-3 rounded-full border"
                        style={{ backgroundColor: item.selectedColor.hex }}
                        title={item.selectedColor.name}
                      />
                      <span className="text-xs text-muted-foreground">{item.selectedColor.name}</span>
                    </div>
                    <p className="text-sm font-medium mt-2">${item.product.price.toFixed(2)}</p>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.productId, item.selectedColor.name, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center border rounded hover:bg-muted"
                      >
                        -
                      </button>
                      <span className="text-sm w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.productId, item.selectedColor.name, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center border rounded hover:bg-muted"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => removeItem(item.productId, item.selectedColor.name)}
                    className="p-1 hover:bg-muted rounded text-muted-foreground hover:text-destructive"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.items.length > 0 && (
          <div className="border-t p-4 space-y-4">
            {/* Totals */}
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>${cart.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax:</span>
                <span>${cart.tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>
                  Shipping:
                  {cart.shipping === 0 && (
                    <span className="text-green-600 text-xs ml-1">(Free!)</span>
                  )}
                </span>
                <span>${cart.shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-semibold text-base border-t pt-2">
                <span>Total:</span>
                <span>${cart.total.toFixed(2)}</span>
              </div>
              {cart.subtotal < 50 && (
                <p className="text-xs text-muted-foreground">
                  Add ${(50 - cart.subtotal).toFixed(2)} more for free shipping!
                </p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="space-y-2">
              <Button className="w-full" size="lg">
                Checkout
              </Button>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={clearCart}
              >
                Clear Cart
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;