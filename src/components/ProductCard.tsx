import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import type { Product } from "@/lib/types";
import StarRating from "./StarRating";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="p-4 pb-0">
        <div className="aspect-square relative overflow-hidden rounded-md">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.title}
            className="object-cover"
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
        <Button className="w-full">Add to cart</Button>
      </CardFooter>
    </Card>
  );
}
