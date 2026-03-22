import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function BookPandit() {
  const [step, setStep] = useState(1)
  const [bookingData, setBookingData] = useState({
    service: '',
    date: '',
    time: '',
    location: '',
    specialRequests: ''
  })

  const services = [
    { id: 'pooja', name: 'Pujas & Rituals', price: '₹500-2000' },
    { id: 'wedding', name: 'Wedding Ceremonies', price: '₹2000-5000' },
    { id: 'housewarming', name: 'Housewarming', price: '₹800-1500' },
    { id: 'consultation', name: 'Spiritual Consultation', price: '₹300-800' },
    { id: 'meditation', name: 'Meditation Guidance', price: '₹400-1000' },
    { id: 'kundli', name: 'Kundli Analysis', price: '₹600-1200' },
    { id: 'vastu', name: 'Vastu Consultation', price: '₹700-1500' },
  ]

  const handleInputChange = (field, value) => {
    setBookingData(prev => ({ ...prev, [field]: value }))
  }

  const nextStep = () => setStep(prev => prev + 1)
  const prevStep = () => setStep(prev => prev - 1)

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold text-text-primary mb-4">Select Service</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {services.map(service => (
                <div
                  key={service.id}
                  onClick={() => handleInputChange('service', service.id)}
                  className={`card cursor-pointer transition-all ${
                    bookingData.service === service.id ? 'ring-2 ring-saffron-500' : ''
                  }`}
                >
                  <h4 className="font-semibold text-text-primary">{service.name}</h4>
                  <p className="text-saffron-500 font-semibold">{service.price}</p>
                </div>
              ))}
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold text-text-primary mb-4">Choose Date & Time</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Preferred Date</label>
                <input
                  type="date"
                  value={bookingData.date}
                  onChange={(e) => handleInputChange('date', e.target.value)}
                  className="input-field"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Preferred Time</label>
                <select
                  value={bookingData.time}
                  onChange={(e) => handleInputChange('time', e.target.value)}
                  className="input-field"
                >
                  <option value="">Select Time</option>
                  <option value="morning">Morning (6 AM - 12 PM)</option>
                  <option value="afternoon">Afternoon (12 PM - 6 PM)</option>
                  <option value="evening">Evening (6 PM - 10 PM)</option>
                </select>
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold text-text-primary mb-4">Location Details</h3>
            <div>
              <label className="block text-sm font-semibold mb-2">Service Location</label>
              <input
                type="text"
                placeholder="Enter your address"
                value={bookingData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Special Requests</label>
              <textarea
                placeholder="Any specific requirements or preferences..."
                value={bookingData.specialRequests}
                onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                className="textarea-field"
                rows={4}
              />
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold text-text-primary mb-4">Confirm Booking</h3>
            <div className="card">
              <h4 className="font-semibold mb-4">Booking Summary</h4>
              <div className="space-y-2 text-sm">
                <p><strong>Service:</strong> {services.find(s => s.id === bookingData.service)?.name}</p>
                <p><strong>Date:</strong> {bookingData.date}</p>
                <p><strong>Time:</strong> {bookingData.time}</p>
                <p><strong>Location:</strong> {bookingData.location}</p>
                {bookingData.specialRequests && (
                  <p><strong>Special Requests:</strong> {bookingData.specialRequests}</p>
                )}
              </div>
            </div>
            <div className="bg-saffron-50 p-4 rounded-lg">
              <p className="text-sm text-text-secondary">
                You will be connected with verified priests in your area. Payment is collected after service confirmation.
              </p>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-text-primary mb-4">
            Book a Pandit
          </h1>
          <p className="text-xl text-text-secondary">
            Connect with verified spiritual practitioners for your sacred ceremonies
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            {['Service', 'Date & Time', 'Location', 'Confirm'].map((label, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  step > index + 1 ? 'bg-green-500 text-white' :
                  step === index + 1 ? 'bg-saffron-500 text-white' : 'bg-gray-300 text-gray-600'
                }`}>
                  {index + 1}
                </div>
                <span className={`text-xs mt-2 ${step === index + 1 ? 'text-saffron-500 font-semibold' : 'text-text-secondary'}`}>
                  {label}
                </span>
              </div>
            ))}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-saffron-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((step - 1) / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Step Content */}
        <div className="card mb-8">
          {renderStepContent()}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <button
            onClick={prevStep}
            disabled={step === 1}
            className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>

          {step < 4 ? (
            <button
              onClick={nextStep}
              disabled={!bookingData.service && step === 1}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          ) : (
            <Link to="/dashboard" className="btn-primary">
              Confirm Booking
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}