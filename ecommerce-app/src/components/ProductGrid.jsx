
import { useProducts } from "../hooks/useProducts";
import useFilterStore from "../stores/useFilterStore";
import ProductCard from "./ProductCard";
import LoadingSpinner from "./ui/LoadingSpinner";

const ProductGrid = ({ onProductClick }) => {
  const { data: products, isLoading, error } = useProducts();
  const { searchQuery } = useFilterStore();

  if (isLoading) return <LoadingSpinner />;
  if (error)
    return <div className="text-center py-8">Error: {error.message}</div>;

 
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (filteredProducts.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">
          No products found matching your criteria.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredProducts.map((product) => (
        <div
          key={product.id}
          onClick={() => onProductClick(product)}
          className="cursor-pointer"
        >
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
