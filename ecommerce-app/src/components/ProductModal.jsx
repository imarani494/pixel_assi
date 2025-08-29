
import { useState } from "react";
import useCartStore from "../stores/useCartStore";
import Modal from "./ui/Modal";
import Button from "./ui/Button";
import LoadingSpinner from "./ui/LoadingSpinner";

const ProductModal = ({ product, isOpen, onClose }) => {
  const [imageLoading, setImageLoading] = useState(true);
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem(product);
    onClose();
  };

  if (!product) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={product.title}>
      <div className="space-y-4">
        <div className="relative h-64 w-full">
          {imageLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <LoadingSpinner />
            </div>
          )}
          <img
            src={product.image}
            alt={product.title}
            className={
              imageLoading
                ? "opacity-0 object-contain h-full w-full"
                : "opacity-100 object-contain h-full w-full"
            }
            onLoad={() => setImageLoading(false)}
          />
        </div>

        <div className="space-y-2">
          <p className="text-2xl font-bold text-blue-600">${product.price}</p>
          <p className="text-gray-700">{product.description}</p>
          <p className="text-sm text-gray-500 capitalize">
            Category: {product.category}
          </p>
        </div>

        <div className="flex justify-between pt-4">
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          <Button onClick={handleAddToCart}>Add to Cart</Button>
        </div>
      </div>
    </Modal>
  );
};

export default ProductModal;
