
import useCartStore from "../stores/useCartStore";
import Modal from "./ui/Modal";
import Button from "./ui/Button";

const CartModal = ({ isOpen, onClose }) => {
  const { items, removeItem, updateQuantity, clearCart, getTotalPrice } =
    useCartStore();

  if (items.length === 0) {
    return (
      <Modal isOpen={isOpen} onClose={onClose} title="Shopping Cart">
        <div className="text-center py-8">
          <p className="text-gray-500">Your cart is empty.</p>
          <Button onClick={onClose} className="mt-4">
            Continue Shopping
          </Button>
        </div>
      </Modal>
    );
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Shopping Cart">
      <div className="space-y-4">
        <div className="max-h-96 overflow-y-auto">
          {items.map((item) => (
            <div key={item.id} className="flex border-b py-4">
              <div className="h-16 w-16 flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-contain h-full w-full"
                />
              </div>
              <div className="ml-4 flex-1">
                <h4 className="font-medium text-sm line-clamp-1">
                  {item.title}
                </h4>
                <p className="text-blue-600 font-bold">${item.price}</p>
                <div className="flex items-center mt-1">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="text-gray-500 px-2 py-1 border rounded-l"
                  >
                    -
                  </button>
                  <span className="px-3 py-1 border-t border-b">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="text-gray-500 px-2 py-1 border rounded-r"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="ml-4 text-red-500 text-sm"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t pt-4">
          <div className="flex justify-between text-lg font-bold">
            <span>Total:</span>
            <span>${getTotalPrice().toFixed(2)}</span>
          </div>

          <div className="flex justify-between mt-6">
            <Button variant="secondary" onClick={clearCart}>
              Clear Cart
            </Button>
            <Button
              onClick={() => alert("Checkout functionality would go here!")}
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CartModal;
