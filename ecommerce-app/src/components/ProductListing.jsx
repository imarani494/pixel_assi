// components/ProductListing.jsx
import { useState } from "react";
import SearchFilter from "./SearchFilter";
import ProductGrid from "./ProductGrid";
import ProductModal from "./ProductModal";
import AddProductForm from "./AddProductForm";
import CartIcon from "./CartIcon";
import CartModal from "./CartModal";
import Button from "./ui/Button";

const ProductListing = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };

  const handleCloseProductModal = () => {
    setIsProductModalOpen(false);
    setSelectedProduct(null);
  };

  const handleAddProduct = (productData) => {
   
    alert(`Product "${productData.title}" would be added to the database!`);
    console.log("Product data:", productData);
    setIsAddProductModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-gray-900">E-commerce Store</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Products</h2>
          <Button onClick={() => setIsAddProductModalOpen(true)}>
            Add Product
          </Button>
        </div>

        <SearchFilter />
        <ProductGrid onProductClick={handleProductClick} />
      </main>

      <ProductModal
        product={selectedProduct}
        isOpen={isProductModalOpen}
        onClose={handleCloseProductModal}
      />

      <AddProductForm
        isOpen={isAddProductModalOpen}
        onClose={() => setIsAddProductModalOpen(false)}
        onSubmit={handleAddProduct}
      />

      <CartIcon onClick={() => setIsCartModalOpen(true)} />
      <CartModal
        isOpen={isCartModalOpen}
        onClose={() => setIsCartModalOpen(false)}
      />
    </div>
  );
};

export default ProductListing;
