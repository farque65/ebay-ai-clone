import { Search, ShoppingCart, Heart, Bell, Menu, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-3xl font-bold text-blue-600">eBay</span>
              <div className="hidden lg:flex flex-1 max-w-3xl ml-8">
                <div className="w-full relative">
                  <input
                    type="text"
                    placeholder="Search for anything"
                    className="w-full pl-4 pr-12 py-2 border-2 border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
                  />
                  <button className="absolute right-0 top-0 h-full px-4 bg-blue-600 text-white rounded-r-full hover:bg-blue-700">
                    <Search className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <button className="hidden md:flex items-center space-x-1 text-gray-700 hover:text-blue-600">
                <Bell className="w-5 h-5" />
                <span>Notifications</span>
              </button>
              <button className="hidden md:flex items-center space-x-1 text-gray-700 hover:text-blue-600">
                <Heart className="w-5 h-5" />
                <span>Watchlist</span>
              </button>
              <button className="hidden md:flex items-center space-x-1 text-gray-700 hover:text-blue-600">
                <ShoppingCart className="w-5 h-5" />
                <span>Cart</span>
              </button>
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
                <User className="w-5 h-5" />
                <span className="hidden md:inline">Sign in</span>
              </button>
              <button className="md:hidden">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6 text-sm py-2">
            <button className="text-gray-700 hover:text-blue-600">Home</button>
            <button className="text-gray-700 hover:text-blue-600">Saved</button>
            <button className="text-gray-700 hover:text-blue-600">Electronics</button>
            <button className="text-gray-700 hover:text-blue-600">Fashion</button>
            <button className="text-gray-700 hover:text-blue-600">Health & Beauty</button>
            <button className="text-gray-700 hover:text-blue-600">Home & Garden</button>
            <button className="text-gray-700 hover:text-blue-600">Sports</button>
            <button className="text-gray-700 hover:text-blue-600">Collectibles</button>
            <button className="text-gray-700 hover:text-blue-600">Industrial</button>
            <button className="text-gray-700 hover:text-blue-600">Motors</button>
          </div>
        </div>
      </div>
    </nav>
  );
}