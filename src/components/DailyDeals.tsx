const deals = [
  {
    id: 1,
    title: "Samsung 65\" 4K Smart TV",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=300&fit=crop",
    originalPrice: 999.99,
    salePrice: 749.99,
    discount: 25
  },
  {
    id: 2,
    title: "Dyson V11 Vacuum Cleaner",
    image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400&h=300&fit=crop",
    originalPrice: 599.99,
    salePrice: 449.99,
    discount: 25
  },
  {
    id: 3,
    title: "MacBook Air M1",
    image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=400&h=300&fit=crop",
    originalPrice: 999.99,
    salePrice: 849.99,
    discount: 15
  }
];

export default function DailyDeals() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Daily Deals</h2>
          <button className="text-blue-600 hover:text-blue-700 font-medium">
            See all deals
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {deals.map((deal) => (
            <div key={deal.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <img src={deal.image} alt={deal.title} className="w-full h-48 object-cover" />
                <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-bold">
                  -{deal.discount}%
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg mb-2">{deal.title}</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-xl font-bold text-blue-600">
                    ${deal.salePrice.toFixed(2)}
                  </span>
                  <span className="text-sm text-gray-500 line-through">
                    ${deal.originalPrice.toFixed(2)}
                  </span>
                </div>
                <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}