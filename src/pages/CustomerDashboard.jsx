import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export default function CustomerDashboard() {
  const auth = useContext(AuthContext)
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('upcoming')

  const upcomingBookings = [
    {
      id: 1,
      service: 'Wedding Ceremony',
      pandit: 'Pandit Sharma',
      date: '2024-01-15',
      time: '10:00 AM',
      location: 'Chandigarh',
      status: 'confirmed',
      price: 2500
    },
    {
      id: 2,
      service: 'Housewarming Puja',
      pandit: 'Guruji',
      date: '2024-01-20',
      time: '2:00 PM',
      location: 'Mohali',
      status: 'pending',
      price: 1200
    }
  ]

  const pastBookings = [
    {
      id: 3,
      service: 'Spiritual Consultation',
      pandit: 'Shastri Ji',
      date: '2023-12-10',
      time: '11:00 AM',
      location: 'Chandigarh',
      status: 'completed',
      price: 600,
      rating: 5
    }
  ]

  const renderBookings = (bookings) => (
    <div className="space-y-4">
      {bookings.map(booking => (
        <div key={booking.id} className="card">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-semibold text-text-primary">{booking.service}</h3>
              <p className="text-text-secondary">with {booking.pandit}</p>
            </div>
            <span className={`badge ${
              booking.status === 'confirmed' ? 'badge-success' :
              booking.status === 'pending' ? 'badge-warning' :
              'badge-info'
            }`}>
              {booking.status}
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div>
              <p className="text-sm text-text-secondary">Date & Time</p>
              <p className="font-semibold">{booking.date} at {booking.time}</p>
            </div>
            <div>
              <p className="text-sm text-text-secondary">Location</p>
              <p className="font-semibold">{booking.location}</p>
            </div>
            <div>
              <p className="text-sm text-text-secondary">Price</p>
              <p className="font-semibold text-saffron-500">₹{booking.price}</p>
            </div>
          </div>

          <div className="flex gap-3">
            {booking.status === 'confirmed' && (
              <>
                <button className="btn-secondary btn-small">Reschedule</button>
                <button className="btn-secondary btn-small">Contact Pandit</button>
              </>
            )}
            {booking.status === 'pending' && (
              <button className="btn-primary btn-small">Confirm Booking</button>
            )}
            {booking.status === 'completed' && booking.rating && (
              <div className="flex items-center gap-2">
                <span className="text-sm text-text-secondary">Your rating:</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < booking.rating ? 'text-yellow-400' : 'text-gray-300'}>
                      ★
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-serif font-bold text-text-primary mb-4">
            My Dashboard
          </h1>
          <p className="text-xl text-text-secondary">
            Manage your bookings and spiritual journey
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="card flex flex-col justify-between">
            <div>
              <h3 className="font-semibold text-lg">Hello, Customer!</h3>
              <p className="text-sm text-text-secondary">Manage your bookings</p>
            </div>
            <button
              onClick={() => {
                auth.logout()
                navigate('/')
              }}
              className="btn-secondary btn-small mt-4"
            >
              Logout
            </button>
          </div>
          <Link to="/book-pandit" className="card text-center hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-2">📅</div>
            <h3 className="font-semibold">Book Pandit</h3>
            <p className="text-sm text-text-secondary">Schedule a new service</p>
          </Link>

          <Link to="/find-pandit" className="card text-center hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-2">🔍</div>
            <h3 className="font-semibold">Find Pandit</h3>
            <p className="text-sm text-text-secondary">Search practitioners</p>
          </Link>

          <div className="card text-center">
            <div className="text-3xl mb-2">💬</div>
            <h3 className="font-semibold">Messages</h3>
            <p className="text-sm text-text-secondary">Chat with pandits</p>
          </div>

          <div className="card text-center">
            <div className="text-3xl mb-2">⭐</div>
            <h3 className="font-semibold">Reviews</h3>
            <p className="text-sm text-text-secondary">Rate your experiences</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Bookings Section */}
          <div className="lg:col-span-2">
            <div className="card">
              <div className="border-b border-border mb-6">
                <nav className="flex space-x-8">
                  <button
                    onClick={() => setActiveTab('upcoming')}
                    className={`py-2 px-1 border-b-2 font-medium text-sm ${
                      activeTab === 'upcoming'
                        ? 'border-saffron-500 text-saffron-500'
                        : 'border-transparent text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    Upcoming ({upcomingBookings.length})
                  </button>
                  <button
                    onClick={() => setActiveTab('past')}
                    className={`py-2 px-1 border-b-2 font-medium text-sm ${
                      activeTab === 'past'
                        ? 'border-saffron-500 text-saffron-500'
                        : 'border-transparent text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    Past Bookings ({pastBookings.length})
                  </button>
                </nav>
              </div>

              {activeTab === 'upcoming' ? renderBookings(upcomingBookings) : renderBookings(pastBookings)}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Summary */}
            <div className="card">
              <h3 className="font-semibold mb-4">Profile Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Total Bookings</span>
                  <span className="font-semibold">5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Completed</span>
                  <span className="font-semibold">3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Total Spent</span>
                  <span className="font-semibold text-saffron-500">₹4,300</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Average Rating</span>
                  <span className="font-semibold">4.8 ⭐</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="card">
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link to="/find-pandit" className="block text-saffron-500 hover:text-saffron-700">
                  Browse Pandits
                </Link>
                <Link to="/services" className="block text-saffron-500 hover:text-saffron-700">
                  View Services
                </Link>
                <Link to="/reviews" className="block text-saffron-500 hover:text-saffron-700">
                  Read Reviews
                </Link>
                <Link to="/contact" className="block text-saffron-500 hover:text-saffron-700">
                  Contact Support
                </Link>
              </div>
            </div>

            {/* Samagri Reminder */}
            <div className="card bg-saffron-50 border-saffron-200">
              <h3 className="font-semibold mb-2 text-saffron-800">Samagri Reminder</h3>
              <p className="text-sm text-saffron-700 mb-3">
                For your upcoming wedding ceremony, remember to prepare:
              </p>
              <ul className="text-sm text-saffron-700 space-y-1">
                <li>• Flowers and garlands</li>
                <li>• Incense sticks</li>
                <li>• Coconut and bananas</li>
                <li>• Red powder (kumkum)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}