import { Smartphone, Shirt, Car, Home, Camera, Gift, Palette, Dumbbell } from 'lucide-react';

const categories = [
  { icon: Smartphone, name: 'Electronics' },
  { icon: Shirt, name: 'Fashion' },
  { icon: Car, name: 'Motors' },
  { icon: Home, name: 'Home & Garden' },
  { icon: Camera, name: 'Cameras' },
  { icon: Gift, name: 'Toys' },
  { icon: Palette, name: 'Art' },
  { icon: Dumbbell, name: 'Sports' },
];

export default function Categories() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-8">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {categories.map(({ icon: Icon, name }) => (
          <button
            key={name}
            className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition"
          >
            <Icon className="w-8 h-8 text-blue-600 mb-2" />
            <span className="text-sm font-medium text-gray-700">{name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}