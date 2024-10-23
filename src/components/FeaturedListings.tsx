const listings = [
  {
    id: 1,
    title: "Apple iPhone 13 Pro - 256GB",
    image: "https://images.unsplash.com/photo-1632661674596-618d8b64d641?w=400&h=300&fit=crop",
    price: 899.99,
    bids: 23,
    timeLeft: "1d 4h"
  },
  {
    id: 2,
    title: "Sony PlayStation 5 Console",
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=300&fit=crop",
    price: 499.99,
    bids: 45,
    timeLeft: "2d 6h"
  },
  {
    id: 3,
    title: "Nike Air Jordan 1 Retro High",
    image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=400&h=300&fit=crop",
    price: 299.99,
    bids: 18,
    timeLeft: "12h"
  },
  {
    id: 4,
    title: "Vintage Rolex Submariner",
    image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=400&h=300&fit=crop",
    price: 8499.99,
    bids: 12,
    timeLeft: "3d 8h"
  }
];

export default function FeaturedListings() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-8">Featured Listings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {listings.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-medium text-lg mb-2 truncate">{item.title}</h3>
              <div className="flex justify-between items-center text-sm text-gray-600">
                <span>{item.bids} bids</span>
                <span>{item.timeLeft} left</span>
              </div>
              <div className="mt-2 text-xl font-bold text-blue-600">
                ${item.price.toFixed(2)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}