import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export default function PanditDashboard() {
  const auth = useContext(AuthContext)
  const navigate = useNavigate()
  const [activeSection, setActiveSection] = useState('overview')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)

  const stats = [
    { label: 'Total Bookings', value: '142', meta: '+12 this month' },
    { label: 'Earnings', value: '₹52,500', meta: 'This month' },
    { label: 'Rating', value: '4.8', meta: 'Based on 89 reviews' },
    { label: 'Completed', value: '128', meta: 'Successful sessions' },
  ]

  const bookings = [
    { name: 'Arjun Singh', service: 'Wedding Ceremony', date: 'Mar 25, 2024 2:00 PM', status: 'confirmed' },
    { name: 'Priya Sharma', service: 'Puja Ritual', date: 'Mar 23, 2024 10:00 AM', status: 'pending' },
    { name: 'Rajesh Kumar', service: 'Consultation', date: 'Mar 21, 2024 3:30 PM', status: 'completed' },
  ]

  return (
    <div className="min-h-screen bg-gray-light">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white shadow-sm border-b border-border">
        <div className="px-4 ml:px-6 lg:px-8 h-20 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden p-2 hover:bg-gray-light rounded-lg"
            >
              ☰
            </button>
            <h1 className="text-2xl font-serif font-bold text-vermillion-500">Partner Hub</h1>
          </div>

          <div className="relative">
            <button
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              className="w-10 h-10 rounded-full bg-cream border-2 border-border flex items-center justify-center hover:border-vermillion-500 transition-colors"
            >
              👤
            </button>
            {userMenuOpen && (
              <div className="absolute right-0 top-full mt-2 bg-white border border-border rounded-lg shadow-lg z-50 w-48">
                <Link
                  to="/pandit-profile"
                  className="block px-4 py-2 hover:bg-gray-light transition-colors"
                  onClick={() => setUserMenuOpen(false)}
                >
                  My Profile
                </Link>
                <Link
                  to="/pandit-support"
                  className="block px-4 py-2 hover:bg-gray-light transition-colors"
                  onClick={() => setUserMenuOpen(false)}
                >
                  Support
                </Link>
                <button
                  onClick={() => {
                    auth.logout()
                    setUserMenuOpen(false)
                    navigate('/')
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-light transition-colors border-t border-border"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex">
        {/* Sidebar */}
        <aside className={`${sidebarOpen ? 'fixed inset-0 z-30 md:relative md:z-auto pt-20 md:pt-0' : 'hidden md:block'} w-64 bg-off-white border-r border-border h-screen sticky top-20 md:top-20`}>
          <nav className="p-6 space-y-2">
            {[
              { id: 'overview', label: 'Overview', icon: '📊' },
              { id: 'bookings', label: 'Bookings', icon: '📅' },
              { id: 'services', label: 'My Services', icon: '⭐' },
              { id: 'earnings', label: 'Earnings', icon: '💰' },
              // removed duplicate profile in sidebar; profile accessible from top user menu
            ].map(item => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id)
                  setSidebarOpen(false)
                }}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center gap-3 ${
                  activeSection === item.id
                    ? 'bg-cream text-vermillion-500 font-semibold border-l-2 border-vermillion-500'
                    : 'text-text-primary hover:bg-gray-light'
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <main className="flex-1 p-6 lg:p-8 max-h-screen overflow-y-auto">
          {/* Overview */}
          {activeSection === 'overview' && (
            <div className="space-y-8 animate-slideUp">
              <div>
                <h2 className="text-3xl font-serif font-bold text-text-primary mb-2">Welcome Back, Pandit Sharma!</h2>
                <p className="text-text-secondary">Here's your performance summary for this month</p>
              </div>

              {/* Stats */}
              <div className="grid md:grid-cols-4 gap-6">
                {stats.map(stat => (
                  <div key={stat.label} className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-vermillion-500">
                    <p className="text-text-secondary text-sm mb-2">{stat.label}</p>
                    <p className="text-3xl font-bold text-vermillion-500 mb-2">{stat.value}</p>
                    <p className="text-xs text-text-secondary">{stat.meta}</p>
                  </div>
                ))}
              </div>

              {/* Charts Placeholder */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="font-semibold text-text-primary mb-4">Earnings Trend</h3>
                  <div className="h-48 bg-gradient-to-br from-gold-100 to-saffron-100 rounded-lg flex items-center justify-center text-text-secondary">
                    📈 Chart Placeholder
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="font-semibold text-text-primary mb-4">Bookings by Service</h3>
                  <div className="h-48 bg-gradient-to-br from-vermillion-100 to-gold-100 rounded-lg flex items-center justify-center text-text-secondary">
                    📊 Chart Placeholder
                  </div>
                </div>
              </div>

              {/* Recent Bookings */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-semibold text-text-primary mb-4">Recent Bookings</h3>
                <div className="space-y-3">
                  {bookings.map((b, i) => (
                    <div key={i} className="flex justify-between items-center p-4 border border-border rounded-lg hover:bg-gray-light transition-colors">
                      <div>
                        <p className="font-semibold text-text-primary">{b.name}</p>
                        <p className="text-sm text-text-secondary">{b.service}</p>
                        <p className="text-xs text-text-secondary mt-1">{b.date}</p>
                      </div>
                      <span className={`badge ${b.status === 'confirmed' ? 'badge-success' : b.status === 'pending' ? 'badge-warning' : 'badge-info'}`}>
                        {b.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Bookings */}
          {activeSection === 'bookings' && (
            <div className="space-y-6 animate-slideUp">
              <h2 className="text-3xl font-serif font-bold text-text-primary">Bookings</h2>

              <div className="flex gap-4 mb-6">
                {['all', 'pending', 'confirmed', 'completed'].map(tab => (
                  <button
                    key={tab}
                    className="px-6 py-2 rounded-lg border-2 border-border hover:border-vermillion-500 transition-colors capitalize"
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="space-y-4">
                {bookings.map((b, i) => (
                  <div key={i} className="bg-white rounded-lg shadow-sm p-6 flex justify-between items-center">
                    <div className="flex-1">
                      <h3 className="font-semibold text-text-primary text-lg mb-2">{b.name}</h3>
                      <p className="text-text-secondary mb-1">{b.service}</p>
                      <p className="text-sm text-text-secondary">{b.date}</p>
                    </div>
                    <div className="flex gap-3 items-center">
                      <span className={`badge ${b.status === 'confirmed' ? 'badge-success' : b.status === 'pending' ? 'badge-warning' : 'badge-info'}`}>
                        {b.status}
                      </span>
                      <button className="btn-secondary btn-small">View Details</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Services */}
          {activeSection === 'services' && (
            <div className="space-y-6 animate-slideUp">
              <div className="flex justify-between items-center">
                <h2 className="text-3xl font-serif font-bold text-text-primary">My Services</h2>
                <button className="btn-pandit btn-small">+ Add Service</button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { name: 'Pujas & Rituals', price: '₹500/hr', bookings: 45, rating: 4.9 },
                  { name: 'Wedding Ceremonies', price: '₹1,500/event', bookings: 12, rating: 4.8 },
                ].map((s, i) => (
                  <div key={i} className="bg-white rounded-lg shadow-sm p-6 border-2 border-transparent hover:border-vermillion-500 transition-colors">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold text-lg text-text-primary">{s.name}</h3>
                        <p className="text-vermillion-500 font-bold">{s.price}</p>
                      </div>
                      <div className="flex gap-2">
                        <button className="p-2 hover:bg-gray-light rounded-lg">✎</button>
                        <button className="p-2 hover:bg-gray-light rounded-lg">⋮</button>
                      </div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <p className="text-text-secondary">{s.bookings} bookings</p>
                      <p className="text-text-secondary">⭐ {s.rating}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Earnings */}
          {activeSection === 'earnings' && (
            <div className="space-y-6 animate-slideUp">
              <h2 className="text-3xl font-serif font-bold text-text-primary">Earnings & Payouts</h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-saffron-100 to-gold-100 rounded-lg p-6 border-l-4 border-saffron-500">
                  <p className="text-text-secondary mb-2">Total Earned</p>
                  <p className="text-3xl font-bold text-saffron-500">₹2,45,000</p>
                </div>
                <div className="bg-gradient-to-br from-saffron-100 to-gold-100 rounded-lg p-6 border-l-4 border-saffron-500">
                  <p className="text-text-secondary mb-2">This Month</p>
                  <p className="text-3xl font-bold text-saffron-500">₹52,500</p>
                </div>
                <div className="bg-gradient-to-br from-saffron-100 to-gold-100 rounded-lg p-6 border-l-4 border-saffron-500">
                  <p className="text-text-secondary mb-2">Pending Payout</p>
                  <p className="text-3xl font-bold text-saffron-500">₹8,200</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-semibold text-text-primary mb-4">Recent Transactions</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="border-b-2 border-border">
                      <tr>
                        <th className="text-left py-3">Date</th>
                        <th className="text-left py-3">Service</th>
                        <th className="text-left py-3">Amount</th>
                        <th className="text-left py-3">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { date: 'Mar 20', service: 'Puja Ritual', amount: '+₹500', status: 'Completed' },
                        { date: 'Mar 19', service: 'Consultation', amount: '+₹400', status: 'Completed' },
                        { date: 'Mar 18', service: 'Wedding', amount: '+₹1,500', status: 'Pending' },
                      ].map((t, i) => (
                        <tr key={i} className="border-b border-border hover:bg-gray-light">
                          <td className="py-3">{t.date}</td>
                          <td className="py-3">{t.service}</td>
                          <td className="py-3 font-semibold text-saffron-500">{t.amount}</td>
                          <td className="py-3">
                            <span className={`badge ${t.status === 'Completed' ? 'badge-success' : 'badge-warning'}`}>
                              {t.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Profile */}
          {activeSection === 'profile' && (
            <div className="space-y-6 animate-slideUp max-w-2xl">
              <h2 className="text-3xl font-serif font-bold text-text-primary">Your Profile</h2>

              <div className="bg-white rounded-lg shadow-sm p-8">
                <h3 className="font-semibold text-text-primary mb-6 border-b border-border pb-4">Personal Information</h3>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm text-text-secondary mb-2">Full Name</label>
                    <input type="text" value="Pandit Sharma" className="input-field" />
                  </div>
                  <div>
                    <label className="block text-sm text-text-secondary mb-2">Email</label>
                    <input type="email" value="pandit@example.com" className="input-field" />
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <h3 className="font-semibold text-text-primary mb-6">Certifications</h3>
                  <div className="space-y-3 mb-6">
                    <p className="text-text-secondary">✓ Vedic Scholar from National University</p>
                    <p className="text-text-secondary">✓ 15+ years of Vedic training</p>
                  </div>
                  <button className="btn-secondary btn-small">Update Certifications</button>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-8">
                <h3 className="font-semibold text-text-primary mb-4 border-b border-border pb-4">Availability</h3>
                <p className="text-text-secondary mb-4">Set your working hours and availability calendar</p>
                <button className="btn-pandit btn-small">Manage Availability</button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
