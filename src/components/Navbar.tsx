import { useState } from "react";
import { Button } from "./ui/button";
import { cart, products } from "@/lib/mockData";
import {Badge, ShoppingCart, X } from "lucide-react";
import { calculateTotal } from "@/lib/utils";

const Navbar = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="container mx-auto px-4 bg-gray-100 py-4 flex justify-between items-center">
      <div className="flex items-center">
        <h1 className="text-xl font-bold">Logo</h1>
      </div>
      <div className="relative">
        <Button
          id="cart-button"
          variant="outline"
          size="icon"
          className="relative"
          onClick={() => setIsCartOpen(!isCartOpen)}
        >
          {isCartOpen ? (
            <>
              <X className="h-5 w-5" />
              {cart.length > 0 && (
                <Badge className="absolute -top-2 -right-2 px-2 py-1 text-xs">
                  {cart.length}
                </Badge>
              )}
            </>
          ) : (
            <>
              <ShoppingCart className="h-5 w-5" />
              {cart.length > 0 && (
                <Badge className="absolute -top-2 -right-2 px-2 py-1 text-xs">
                  {cart.length}
                </Badge>
              )}
            </>
          )}
        </Button>

        {isCartOpen && (
          <div
            id="cart-dropdown"
            className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg z-20 border overflow-hidden"
          >
            <div className="p-4 max-h-96 overflow-y-auto">
              <h3 className="font-bold text-lg mb-3">Your Cart</h3>
              {cart.length === 0 ? (
                <p className="text-gray-500 text-center py-4">
                  Your cart is empty
                </p>
              ) : (
                <>
                  <div className="space-y-3">
                    {cart.map((productId) => {
                      const product = products.find((p) => p.id === productId)!;
                      return (
                        <div
                          key={product.id}
                          className="flex items-center gap-3 pb-3 border-b"
                        >
                          <div className="flex-grow">
                            <h4 className="font-medium text-sm">
                              {product.title}
                            </h4>
                            <p className="text-sm">
                              ₹{product.price.toFixed(2)}
                            </p>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-gray-500 hover:text-red-500"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-3">
                    <div className="flex justify-between font-bold">
                      <span>Total:</span>
                      <span>₹{calculateTotal(cart).toFixed(2)}</span>
                    </div>
                    <Button className="w-full mt-3">Checkout</Button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar