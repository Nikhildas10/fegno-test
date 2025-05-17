import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import type { Product } from "@/lib/types";
import StarRating from "./StarRating";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import { addToCart, removeFromCart } from "@/features/cart/cartSlice";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootState) => state.cart);

  const isInCart = items.includes(product.id);

  const handleClick = () => {
    if (!isInCart) {
      dispatch(addToCart(product.id));
    } else {
      dispatch(removeFromCart(product.id));
    }
  };
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="p-4 pb-0">
        <div className="h-48 w-full bg-white flex items-center justify-center overflow-hidden rounded-md">
          <img
            src={product.image || "https://placehold.co/400"}
            alt={product.title}
            className="object-contain h-full"
          />
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <h3 className="font-semibold text-lg">{product.title} </h3>

        <p className="font-bold text-lg mt-1">₹{product.price.toFixed(2)}</p>

        <p className="text-sm text-gray-500 mt-2 line-clamp-2">
          {product.description}
        </p>
      </CardContent>

      <CardFooter className="py-4 pt-0 flex flex-col gap-2 items-start">
        <StarRating
          count={product.rating.count}
          rate={product.rating.rate}
          key={product.id}
        />
        <Button
          onClick={handleClick}
          className="w-full"
          variant={isInCart ? "destructive" : "default"}
        >
          {isInCart ? "Remove from Cart" : "Add to Cart"}
        </Button>
      </CardFooter>
    </Card>
  );
}
