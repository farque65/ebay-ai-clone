import { Minus, Plus, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { items, removeFromCart, updateQuantity, total } = useCart();

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <p className="text-gray-600">Start shopping to add items to your cart</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-8">Shopping Cart</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow">
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-cover rounded"
              />
              
              <div className="flex-1">
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-gray-600">${item.price}</p>
                
                <div className="flex items-center space-x-2 mt-2">
                  <button
                    onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                    className="p-1 rounded-full hover:bg-gray-100"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-1 rounded-full hover:bg-gray-100"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="p-2 text-gray-400 hover:text-red-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white p-6 rounded-lg shadow h-fit">
          <h3 className="text-xl font-bold mb-4">Order Summary</h3>
          
          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Free</span>
            </div>
          </div>
          
          <div className="border-t pt-4 mb-6">
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}