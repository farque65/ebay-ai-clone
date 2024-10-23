import { TrendingUp } from 'lucide-react';

const trendingItems = [
  {
    id: 1,
    name: "Air Jordan 1 High OG 'Chicago Lost & Found'",
    image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=400&h=300&fit=crop",
    price: 479,
    change: "+12.5%"
  },
  {
    id: 2,
    name: "Nike Dunk Low Retro White Black",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=300&fit=crop",
    price: 189,
    change: "+5.2%"
  },
  {
    id: 3,
    name: "Yeezy Boost 350 V2 'Zebra'",
    image: "https://images.unsplash.com/photo-1584735174965-48c48d7edfde?w=400&h=300&fit=crop",
    price: 329,
    change: "+8.7%"
  }
];

export default function TrendingSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-2">
          <TrendingUp className="w-6 h-6 text-green-500" />
          <h2 className="text-2xl font-bold">Trending Now</h2>
        </div>
        <button className="text-green-500 hover:text-green-600">View All</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {trendingItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Lowest Ask</p>
                  <p className="font-bold text-xl">${item.price}</p>
                </div>
                <div className="text-green-500 font-semibold">
                  {item.change}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}