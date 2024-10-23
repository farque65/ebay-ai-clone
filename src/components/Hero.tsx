import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-white space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Find Deals on Everything You Need
            </h1>
            <p className="text-blue-100 text-lg">
              Shop millions of items with fast, free shipping and easy returns
            </p>
            <button className="flex items-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition">
              <span>Start Shopping</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <div className="hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=600&fit=crop"
              alt="Shopping"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}