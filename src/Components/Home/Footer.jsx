export default function Footer() {
    return (
      <footer className="bg-gradient-to-b from-blue-50 to-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-12">
  
          {/* Top */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
  
            {/* Brand */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-blue-600">DevSpaceX</h3>
              <p className="mt-1 text-sm text-gray-500">
                A professional community for developers.
              </p>
            </div>
  
            {/* Links */}
            <div className="flex gap-6 text-sm text-gray-600">
              <a href="#" className="hover:text-blue-600 transition">
                Home
              </a>
              <a href="#" className="hover:text-blue-600 transition">
                Projects
              </a>
              <a href="#" className="hover:text-blue-600 transition">
                Opportunities
              </a>
              <a href="#" className="hover:text-blue-600 transition">
                Community
              </a>
            </div>
          </div>
  
          {/* Divider */}
          <div className="my-8 border-t border-gray-200"></div>
  
          {/* Bottom */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>
              © {new Date().getFullYear()} DevSpaceX. All rights reserved.
            </p>
  
            <p>
              Built with ❤️ by <span className="font-semibold text-blue-600">Sourav</span>
            </p>
          </div>
  
        </div>
      </footer>
    );
  }