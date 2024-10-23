import { Heart, Share2, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import type { Product } from '../types';

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const { addToCart } = useCart();
  const { isAuthenticated } = useAuth();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <img
            src={product.image}
            alt={product.title}
            className="w-full rounded-lg shadow-lg"
          />
          <div className="grid grid-cols-4 gap-2">
            <img src={product.image} alt="" className="rounded cursor-pointer hover:opacity-75" />
            <img src={product.image} alt="" className="rounded cursor-pointer hover:opacity-75" />
            <img src={product.image} alt="" className="rounded cursor-pointer hover:opacity-75" />
            <img src={product.image} alt="" className="rounded cursor-pointer hover:opacity-75" />
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
            <p className="text-gray-600">{product.description}</p>
          </div>

          <div className="border-t border-b py-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-gray-600">Current Bid</p>
                <p className="text-3xl font-bold">${product.price}</p>
              </div>
              <div>
                <p className="text-gray-600">Time Left</p>
                <p className="text-xl font-semibold">{product.timeLeft}</p>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => addToCart(product)}
                className="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition flex items-center justify-center space-x-2"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Add to Cart</span>
              </button>
              
              <button className="w-full border-2 border-blue-600 text-blue-600 py-3 rounded-full hover:bg-blue-50 transition flex items-center justify-center space-x-2">
                <Heart className="w-5 h-5" />
                <span>Add to Watchlist</span>
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Seller</span>
              <span className="font-medium">{product.seller}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Condition</span>
              <span className="font-medium">{product.condition}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Category</span>
              <span className="font-medium">{product.category}</span>
            </div>
          </div>

          <button className="flex items-center text-gray-600 hover:text-blue-600">
            <Share2 className="w-5 h-5 mr-2" />
            Share this item
          </button>
        </div>
      </div>
    </div>
  );
}