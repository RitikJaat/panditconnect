import { useState } from 'react'

export default function SearchBar() {
  const [location, setLocation] = useState('')
  const [service, setService] = useState('all')

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

  const handleSearch = (e) => {
    e.preventDefault()
    console.log('Search:', { service, location })
  }

  return (
    <form onSubmit={handleSearch} className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full">
      <div className="mb-4">
        <input
          type="text"
          placeholder="What puja do you need?"
          className="input-field text-lg"
        />
      </div>
      <div className="grid md:grid-cols-4 gap-4 mb-4">
        <div>
          <label className="block text-sm font-semibold mb-2 text-text-primary">Service Type</label>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="input-field"
          >
            {services.map(s => (
              <option key={s.id} value={s.id}>{s.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-text-primary">Where?</label>
          <input
            type="text"
            placeholder="Chandigarh, India"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="input-field"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-text-primary">Date</label>
          <input
            type="date"
            className="input-field"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-text-primary">Language</label>
          <select className="input-field">
            <option>Any Language</option>
            <option>Hindi</option>
            <option>English</option>
            <option>Punjabi</option>
            <option>Sanskrit</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="btn-primary w-full"
      >
        Find Priests
      </button>
    </form>
  )
}
