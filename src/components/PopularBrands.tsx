export default function PopularBrands() {
  const brands = [
    "Nike", "Adidas", "Jordan", "Yeezy", "New Balance", "Converse"
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">Popular Brands</h2>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {brands.map((brand) => (
            <div
              key={brand}
              className="bg-white rounded-lg p-6 flex items-center justify-center shadow-md hover:shadow-lg transition cursor-pointer"
            >
              <span className="font-semibold text-lg">{brand}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}