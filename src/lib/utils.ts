import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { products } from "./mockData";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const calculateTotal = (cart: number[]): number => {
  return cart.reduce((total, productId) => {
    const product = products.find((p) => p.id === productId);
    return total + (product?.price || 0);
  }, 0);
};