export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Buy</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Registration</a></li>
              <li><a href="#" className="hover:text-white">eBay Money Back Guarantee</a></li>
              <li><a href="#" className="hover:text-white">Bidding & buying help</a></li>
              <li><a href="#" className="hover:text-white">Stores</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Sell</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Start selling</a></li>
              <li><a href="#" className="hover:text-white">Learn to sell</a></li>
              <li><a href="#" className="hover:text-white">Affiliates</a></li>
              <li><a href="#" className="hover:text-white">Site map</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Help & Contact</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Seller Information Center</a></li>
              <li><a href="#" className="hover:text-white">Contact us</a></li>
              <li><a href="#" className="hover:text-white">Resolution Center</a></li>
              <li><a href="#" className="hover:text-white">Seller Information Center</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">About eBay</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Company info</a></li>
              <li><a href="#" className="hover:text-white">News</a></li>
              <li><a href="#" className="hover:text-white">Investors</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; 2024 eBay Clone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}