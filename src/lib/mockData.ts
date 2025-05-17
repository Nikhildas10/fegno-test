import type { Product } from "./types";

export const products: Product[] = [
  {
    id: 1,
    title: "Premium Headphones",
    price: 199.99,
    description:
      "Noise cancelling wireless headphones with premium sound quality.",
    image: "https://placehold.co/400",
    rating:{
        rate: 4.5,
        count: 120,
    }
  },
  {
    id: 2,
    title: "Smart Watch",
    price: 249.99,
    description:
      "Track your fitness and stay connected with this sleek smart watch.",
    image: "https://placehold.co/400",
    rating:{
        rate: 4.0,
        count: 80,
    }
  },
  {
    id: 3,
    title: "Wireless Earbuds",
    price: 129.99,
    description:
      "Compact wireless earbuds with crystal clear audio and long battery life.",
    image: "https://placehold.co/400",
    rating:{
        rate: 4.2,
        count: 200,
    }
  },
  {
    id: 4,
    title: "Bluetooth Speaker",
    price: 79.99,
    description: "Portable speaker with rich bass and 20-hour battery life.",
    image: "https://placehold.co/400",
    rating:{
        rate: 4.3,
        count: 150,
    }
  },
  {
    id: 5,
    title: "Laptop Backpack",
    price: 59.99,
    description:
      "Water-resistant backpack with padded laptop compartment and multiple pockets.",
    image: "https://placehold.co/400",
    rating:{
        rate: 4.6,
        count: 90,
    }
  },
  {
    id: 6,
    title: "Wireless Mouse",
    price: 39.99,
    description:
      "Ergonomic wireless mouse with adjustable DPI and silent clicks.",
    image: "https://placehold.co/400",
    rating:{
        rate: 4.1,
        count: 300,
    }
  },
];

export const cart: number[] = [1,2,3];