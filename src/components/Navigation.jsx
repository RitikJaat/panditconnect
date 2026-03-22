import { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export default function Navigation() {
  const auth = useContext(AuthContext)
  const navigate = useNavigate()

  const [isOpen, setIsOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const location = useLocation()

  // Determine if we're in pandit portal
  const isPanditPortal = location.pathname.startsWith('/pandit')

  const customerNav = (
    <>
      <Link to="/" className="text-text-primary hover:text-saffron-500 transition-colors">
        Home
      </Link>
      
      {/* Services Dropdown */}
      <div className="relative group">
        <button className="text-text-primary hover:text-saffron-500 transition-colors flex items-center gap-1">
          Services
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div className="absolute top-full left-0 mt-2 bg-white border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-64 z-50">
          <div className="py-2">
            <a href="#" className="block px-4 py-2 hover:bg-gray-light transition-colors">Pujas & Rituals</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-light transition-colors">Wedding Ceremonies</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-light transition-colors">Housewarming</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-light transition-colors">Spiritual Consultation</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-light transition-colors">Meditation Guidance</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-light transition-colors">Kundli Analysis</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-light transition-colors">Vastu Consultation</a>
          </div>
        </div>
      </div>

      <Link to="/book-pandit" className="text-text-primary hover:text-saffron-500 transition-colors">
        Book Pandit
      </Link>
      <Link to="/find-pandit" className="text-text-primary hover:text-saffron-500 transition-colors">
        Find Pandit
      </Link>
      <Link to="/pandit-landing" className="text-text-primary hover:text-saffron-500 transition-colors">
        For Partners
      </Link>
      <Link to="/reviews" className="text-text-primary hover:text-saffron-500 transition-colors">
        Reviews
      </Link>
    </>
  )

  const panditNav = (
    <>
      <Link to="/pandit-landing" className="text-text-primary hover:text-saffron-500 transition-colors">
        Home
      </Link>
      <Link to="/pandit-onboarding" className="text-text-primary hover:text-saffron-500 transition-colors">
        Join as Pandit
      </Link>
      <Link to="/pandit-dashboard" className="text-text-primary hover:text-saffron-500 transition-colors">
        Dashboard
      </Link>
      <Link to="/pandit-services" className="text-text-primary hover:text-saffron-500 transition-colors">
        My Services
      </Link>
      <Link to="/pandit-profile" className="text-text-primary hover:text-saffron-500 transition-colors">
        Profile
      </Link>
      <Link to="/pandit-support" className="text-text-primary hover:text-saffron-500 transition-colors">
        Support
      </Link>
    </>
  )

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to={isPanditPortal ? "/pandit-landing" : "/"} className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-saffron-500 to-saffron-700 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              🙏
            </div>
            <span className="text-2xl font-serif font-bold text-text-primary">
              PanditConnect
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {isPanditPortal ? panditNav : customerNav}

            {/* User Menu */}
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="w-10 h-10 rounded-full bg-cream border-2 border-border hover:border-saffron-500 flex items-center justify-center transition-colors"
              >
                👤
              </button>
              {isUserMenuOpen && (
                <div className="absolute right-0 top-full mt-2 bg-white border border-border rounded-lg shadow-lg z-50 w-48">
                  {!auth?.isAuthenticated && (
                    <>  
                      <Link to="/login" className="block px-4 py-2 hover:bg-gray-light transition-colors">
                        Sign In
                      </Link>
                      <Link to="/signup" className="block px-4 py-2 hover:bg-gray-light transition-colors">
                        Create Account
                      </Link>
                    </>
                  )}

                  {auth?.isAuthenticated && (
                    <>
                      {auth.userType === 'customer' ? (
                        <Link to="/dashboard" className="block px-4 py-2 hover:bg-gray-light transition-colors">
                          My Dashboard
                        </Link>
                      ) : (
                        <Link to="/pandit-dashboard" className="block px-4 py-2 hover:bg-gray-light transition-colors">
                          Pandit Dashboard
                        </Link>
                      )}
                      <button
                        onClick={() => {
                          auth.logout()
                          setIsUserMenuOpen(false)
                          navigate('/')
                        }}
                        className="w-full text-left px-4 py-2 hover:bg-gray-light transition-colors"
                      >
                        Logout
                      </button>
                    </>
                  )}

                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-gray-light rounded-lg transition-colors"
          >
            <span className="block w-6 h-0.5 bg-text-primary mb-1.5"></span>
            <span className="block w-6 h-0.5 bg-text-primary mb-1.5"></span>
            <span className="block w-6 h-0.5 bg-text-primary"></span>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            {isPanditPortal ? (
              <>
                <Link
                  to="/pandit-landing"
                  className="block py-2 hover:text-saffron-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/pandit-onboarding"
                  className="block py-2 hover:text-saffron-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Join as Pandit
                </Link>
                <Link
                  to="/pandit-dashboard"
                  className="block py-2 hover:text-saffron-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Dashboard
                </Link>
                <Link
                  to="/pandit-services"
                  className="block py-2 hover:text-saffron-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  My Services
                </Link>
                <Link
                  to="/pandit-profile"
                  className="block py-2 hover:text-saffron-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Profile
                </Link>
                <Link
                  to="/pandit-support"
                  className="block py-2 hover:text-saffron-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Support
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/"
                  className="block py-2 hover:text-saffron-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <div className="py-2">
                  <div className="font-semibold mb-2">Services</div>
                  <a href="#" className="block py-1 pl-4 text-sm hover:text-saffron-500 transition-colors" onClick={() => setIsOpen(false)}>Pujas & Rituals</a>
                  <a href="#" className="block py-1 pl-4 text-sm hover:text-saffron-500 transition-colors" onClick={() => setIsOpen(false)}>Wedding Ceremonies</a>
                  <a href="#" className="block py-1 pl-4 text-sm hover:text-saffron-500 transition-colors" onClick={() => setIsOpen(false)}>Housewarming</a>
                  <a href="#" className="block py-1 pl-4 text-sm hover:text-saffron-500 transition-colors" onClick={() => setIsOpen(false)}>Spiritual Consultation</a>
                </div>
                <Link
                  to="/book-pandit"
                  className="block py-2 hover:text-saffron-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Book Pandit
                </Link>
                <Link
                  to="/find-pandit"
                  className="block py-2 hover:text-saffron-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Find Pandit
                </Link>
                <Link
                  to="/pandit-landing"
                  className="block py-2 hover:text-saffron-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  For Partners
                </Link>
                <Link
                  to="/reviews"
                  className="block py-2 hover:text-saffron-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Reviews
                </Link>
                <div className="border-t border-border mt-4 pt-4">
                  <Link
                    to="/login"
                    className="block py-2 hover:text-saffron-500 transition-colors font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/signup"
                    className="block py-2 hover:text-saffron-500 transition-colors font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Create Account
                  </Link>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </header>
  )
}
