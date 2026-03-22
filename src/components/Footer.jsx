export default function Footer() {
  return (
    <footer className="bg-text-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h4 className="text-xl font-serif font-bold mb-4">PanditConnect</h4>
            <p className="text-gray-300 mb-4">
              Connecting devotees with verified Hindu priests for sacred ceremonies and guidance.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-saffron-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-saffron-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-saffron-500 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-saffron-500 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-saffron-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-saffron-500 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-saffron-500 transition-colors">Cancellation & Refund Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2024 PanditConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
