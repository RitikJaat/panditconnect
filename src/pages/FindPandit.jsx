import { useState } from 'react'
import PanditCard from '../components/PanditCard'

export default function FindPandit() {
  const [filters, setFilters] = useState({
    service: 'all',
    location: '',
    language: 'all',
    rating: 'all',
    priceRange: 'all',
    availability: 'all'
  })

  const [searchResults, setSearchResults] = useState([])

  const services = [
    { id: 'all', name: 'All Services' },
    { id: 'pooja', name: 'Pujas & Rituals' },
    { id: 'wedding', name: 'Wedding Ceremonies' },
    { id: 'housewarming', name: 'Housewarming' },
    { id: 'consultation', name: 'Spiritual Consultation' },
    { id: 'meditation', name: 'Meditation Guidance' },
    { id: 'kundli', name: 'Kundli Analysis' },
    { id: 'vastu', name: 'Vastu Consultation' },
  ]

  const languages = [
    { id: 'all', name: 'Any Language' },
    { id: 'hindi', name: 'Hindi' },
    { id: 'english', name: 'English' },
    { id: 'punjabi', name: 'Punjabi' },
    { id: 'sanskrit', name: 'Sanskrit' },
    { id: 'bengali', name: 'Bengali' },
  ]

  const ratings = [
    { id: 'all', name: 'Any Rating' },
    { id: '4.5', name: '4.5+ Stars' },
    { id: '4.0', name: '4.0+ Stars' },
    { id: '3.5', name: '3.5+ Stars' },
  ]

  const priceRanges = [
    { id: 'all', name: 'Any Price' },
    { id: 'low', name: 'Under ₹500' },
    { id: 'medium', name: '₹500 - ₹1500' },
    { id: 'high', name: '₹1500+' },
  ]

  const availabilityOptions = [
    { id: 'all', name: 'Any Time' },
    { id: 'today', name: 'Available Today' },
    { id: 'weekend', name: 'This Weekend' },
    { id: 'morning', name: 'Morning' },
    { id: 'evening', name: 'Evening' },
  ]

  // Mock search results - in real app, this would come from API
  const mockResults = [
    { name: 'Shastri Ji', specialization: 'Vedic Rituals', rating: 4.9, reviews: 342, price: 500, location: 'Chandigarh', language: 'Hindi', available: true },
    { name: 'Pandit Sharma', specialization: 'Astrology', rating: 4.8, reviews: 289, price: 600, location: 'Mohali', language: 'English', available: true },
    { name: 'Guruji', specialization: 'Meditation', rating: 4.7, reviews: 156, price: 400, location: 'Panchkula', language: 'Hindi', available: false },
    { name: 'Dr. Patel', specialization: 'Vastu Expert', rating: 4.9, reviews: 421, price: 700, location: 'Chandigarh', language: 'English', available: true },
    { name: 'Pandit Joshi', specialization: 'Wedding Rituals', rating: 4.8, reviews: 198, price: 800, location: 'Zirakpur', language: 'Punjabi', available: true },
    { name: 'Acharya Singh', specialization: 'Kundli Analysis', rating: 4.6, reviews: 267, price: 550, location: 'Chandigarh', language: 'Hindi', available: true },
  ]

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({ ...prev, [filterType]: value }))
  }

  const handleSearch = () => {
    // In real app, this would call an API with filters
    let filtered = mockResults.filter(pandit => {
      if (filters.service !== 'all' && !pandit.specialization.toLowerCase().includes(filters.service)) return false
      if (filters.location && !pandit.location.toLowerCase().includes(filters.location.toLowerCase())) return false
      if (filters.language !== 'all' && pandit.language.toLowerCase() !== filters.language) return false
      if (filters.rating !== 'all' && pandit.rating < parseFloat(filters.rating)) return false
      if (filters.priceRange !== 'all') {
        if (filters.priceRange === 'low' && pandit.price >= 500) return false
        if (filters.priceRange === 'medium' && (pandit.price < 500 || pandit.price > 1500)) return false
        if (filters.priceRange === 'high' && pandit.price <= 1500) return false
      }
      return true
    })
    setSearchResults(filtered)
  }

  // Initial load
  useState(() => {
    setSearchResults(mockResults)
  })

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-text-primary mb-4">
            Find a Pandit
          </h1>
          <p className="text-xl text-text-secondary">
            Discover verified spiritual practitioners in your area
          </p>
        </div>

        {/* Filters */}
        <div className="card mb-8">
          <h2 className="text-2xl font-serif font-bold text-text-primary mb-6">Search Filters</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Service Type</label>
              <select
                value={filters.service}
                onChange={(e) => handleFilterChange('service', e.target.value)}
                className="input-field"
              >
                {services.map(service => (
                  <option key={service.id} value={service.id}>{service.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Location</label>
              <input
                type="text"
                placeholder="Enter city/area"
                value={filters.location}
                onChange={(e) => handleFilterChange('location', e.target.value)}
                className="input-field"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Language</label>
              <select
                value={filters.language}
                onChange={(e) => handleFilterChange('language', e.target.value)}
                className="input-field"
              >
                {languages.map(lang => (
                  <option key={lang.id} value={lang.id}>{lang.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Minimum Rating</label>
              <select
                value={filters.rating}
                onChange={(e) => handleFilterChange('rating', e.target.value)}
                className="input-field"
              >
                {ratings.map(rating => (
                  <option key={rating.id} value={rating.id}>{rating.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Price Range</label>
              <select
                value={filters.priceRange}
                onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                className="input-field"
              >
                {priceRanges.map(range => (
                  <option key={range.id} value={range.id}>{range.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Availability</label>
              <select
                value={filters.availability}
                onChange={(e) => handleFilterChange('availability', e.target.value)}
                className="input-field"
              >
                {availabilityOptions.map(option => (
                  <option key={option.id} value={option.id}>{option.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-6">
            <button onClick={handleSearch} className="btn-primary">
              Search Pandits
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="mb-8">
          <h2 className="text-2xl font-serif font-bold text-text-primary mb-6">
            Search Results ({searchResults.length} found)
          </h2>

          {searchResults.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchResults.map((pandit, i) => (
                <div key={i} className="relative">
                  <PanditCard {...pandit} />
                  <div className="absolute top-2 right-2">
                    <span className={`badge ${pandit.available ? 'badge-success' : 'badge-warning'}`}>
                      {pandit.available ? 'Available' : 'Busy'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-text-secondary text-lg">No pandits found matching your criteria.</p>
              <p className="text-text-secondary">Try adjusting your filters or search in a different location.</p>
            </div>
          )}
        </div>

        {/* Map Placeholder */}
        <div className="card">
          <h3 className="text-xl font-serif font-bold text-text-primary mb-4">Pandits Near You</h3>
          <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
            <p className="text-text-secondary">Interactive map would be displayed here</p>
          </div>
        </div>
      </div>
    </div>
  )
}