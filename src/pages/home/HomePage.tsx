import ProductCard from "@/components/ProductCard";
import { useFetchProducts } from "@/features/product/useFetchProducts";

const Home = () => {
  const { products, loading } = useFetchProducts();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex-grow container mx-auto px-8 py-8 mt-15">
      <h1 className="text-2xl text-center font-bold mb-6">Products List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
