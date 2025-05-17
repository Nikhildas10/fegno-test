import { useState } from "react";
import { Button } from "./ui/button";
import { ShoppingCart, Trash, X } from "lucide-react";
import { calculateTotal } from "@/lib/utils";
import { useFetchProducts } from "@/features/product/useFetchProducts";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import { clearCart, removeFromCart } from "@/features/cart/cartSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { products, loading } = useFetchProducts();
  const { items: cartItems } = useSelector((state: RootState) => state.cart);

  const handleCheckout = () => {
    alert("checkout completed");
    dispatch(clearCart());
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }
  return (
    <div className="container mx-auto px-4 bg-gray-100 py-4 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
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
            <X className="h-5 w-5" />
          ) : (
            <ShoppingCart className="h-5 w-5" />
          )}

          {cartItems.length > 0 && (
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartItems.length}
            </div>
          )}
        </Button>

        {isCartOpen && (
          <div
            id="cart-dropdown"
            className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg z-20 border overflow-hidden"
          >
            <div className="p-4 max-h-96 overflow-y-auto">
              <h3 className="font-bold text-lg mb-3">Your Cart</h3>
              {cartItems.length === 0 ? (
                <p className="text-gray-500 text-center py-4">
                  Your cart is empty
                </p>
              ) : (
                <>
                  <div className="space-y-3">
                    {cartItems.map((productId) => {
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
                            onClick={() => dispatch(removeFromCart(product.id))}
                            size="icon"
                            className="h-8 w-8 text-gray-500 hover:text-red-500"
                          >
                            <Trash className="h-4 w-4" />
                          </Button>
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-3">
                    <div className="flex justify-between font-bold">
                      <span>Total:</span>
                      <span>
                        ₹{calculateTotal(cartItems, products).toFixed(2)}
                      </span>
                    </div>
                    <Button onClick={handleCheckout} className="w-full mt-3">
                      Checkout
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
