import { useState } from 'react'

export default function PanditServices() {
  const [services, setServices] = useState([
    {
      id: 1,
      name: 'Wedding Ceremony',
      category: 'wedding',
      price: 2500,
      duration: '3-4 hours',
      description: 'Complete wedding rituals including mangal pheras and vidhi',
      active: true,
      samagriIncluded: false
    },
    {
      id: 2,
      name: 'Housewarming Puja',
      category: 'housewarming',
      price: 1200,
      duration: '2 hours',
      description: 'Griha Pravesh ceremony with traditional rituals',
      active: true,
      samagriIncluded: true
    },
    {
      id: 3,
      name: 'Spiritual Consultation',
      category: 'consultation',
      price: 600,
      duration: '1 hour',
      description: 'Personal spiritual guidance and counseling',
      active: false,
      samagriIncluded: false
    }
  ])

  const [isAddingService, setIsAddingService] = useState(false)
  const [editingService, setEditingService] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    duration: '',
    description: '',
    samagriIncluded: false
  })

  const categories = [
    { id: 'pooja', name: 'Pujas & Rituals' },
    { id: 'wedding', name: 'Wedding Ceremonies' },
    { id: 'housewarming', name: 'Housewarming' },
    { id: 'consultation', name: 'Spiritual Consultation' },
    { id: 'meditation', name: 'Meditation Guidance' },
    { id: 'kundli', name: 'Kundli Analysis' },
    { id: 'vastu', name: 'Vastu Consultation' },
    { id: 'other', name: 'Other Services' }
  ]

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (editingService) {
      setServices(prev => prev.map(service =>
        service.id === editingService.id
          ? { ...service, ...formData }
          : service
      ))
      setEditingService(null)
    } else {
      const newService = {
        id: Date.now(),
        ...formData,
        active: true
      }
      setServices(prev => [...prev, newService])
      setIsAddingService(false)
    }

    setFormData({
      name: '',
      category: '',
      price: '',
      duration: '',
      description: '',
      samagriIncluded: false
    })
  }

  const toggleServiceStatus = (serviceId) => {
    setServices(prev => prev.map(service =>
      service.id === serviceId
        ? { ...service, active: !service.active }
        : service
    ))
  }

  const startEditing = (service) => {
    setEditingService(service)
    setFormData({
      name: service.name,
      category: service.category,
      price: service.price,
      duration: service.duration,
      description: service.description,
      samagriIncluded: service.samagriIncluded
    })
  }

  const cancelEdit = () => {
    setEditingService(null)
    setFormData({
      name: '',
      category: '',
      price: '',
      duration: '',
      description: '',
      samagriIncluded: false
    })
  }

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-serif font-bold text-text-primary mb-4">
              My Services
            </h1>
            <p className="text-xl text-text-secondary">
              Manage your spiritual services and offerings
            </p>
          </div>
          <button
            onClick={() => setIsAddingService(true)}
            className="btn-primary"
          >
            Add New Service
          </button>
        </div>

        {/* Service Form */}
        {(isAddingService || editingService) && (
          <div className="card mb-8">
            <h2 className="text-2xl font-serif font-bold text-text-primary mb-6">
              {editingService ? 'Edit Service' : 'Add New Service'}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Service Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="input-field"
                    placeholder="e.g., Wedding Ceremony"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => handleInputChange('category', e.target.value)}
                    className="input-field"
                    required
                  >
                    <option value="">Select Category</option>
                    {categories.map(cat => (
                      <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Price (₹)</label>
                  <input
                    type="number"
                    value={formData.price}
                    onChange={(e) => handleInputChange('price', e.target.value)}
                    className="input-field"
                    placeholder="1500"
                    min="0"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Duration</label>
                  <input
                    type="text"
                    value={formData.duration}
                    onChange={(e) => handleInputChange('duration', e.target.value)}
                    className="input-field"
                    placeholder="e.g., 2-3 hours"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  className="textarea-field"
                  rows={3}
                  placeholder="Describe what this service includes..."
                  required
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="samagriIncluded"
                  checked={formData.samagriIncluded}
                  onChange={(e) => handleInputChange('samagriIncluded', e.target.checked)}
                  className="mr-3"
                />
                <label htmlFor="samagriIncluded" className="text-sm font-semibold">
                  Samagri (materials) included in price
                </label>
              </div>

              <div className="flex gap-3">
                <button type="submit" className="btn-primary">
                  {editingService ? 'Update Service' : 'Add Service'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsAddingService(false)
                    cancelEdit()
                  }}
                  className="btn-secondary"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Services List */}
        <div className="grid gap-6">
          {services.map(service => (
            <div key={service.id} className="card">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-text-primary">{service.name}</h3>
                    <span className={`badge ${service.active ? 'badge-success' : 'badge-error'}`}>
                      {service.active ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                  <p className="text-text-secondary mb-2">{service.description}</p>
                  <div className="grid md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="font-semibold">Category:</span> {categories.find(c => c.id === service.category)?.name}
                    </div>
                    <div>
                      <span className="font-semibold">Price:</span> ₹{service.price}
                    </div>
                    <div>
                      <span className="font-semibold">Duration:</span> {service.duration}
                    </div>
                    <div>
                      <span className="font-semibold">Samagri:</span> {service.samagriIncluded ? 'Included' : 'Client provides'}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => toggleServiceStatus(service.id)}
                  className={`btn-small ${service.active ? 'btn-secondary' : 'btn-primary'}`}
                >
                  {service.active ? 'Deactivate' : 'Activate'}
                </button>
                <button
                  onClick={() => startEditing(service)}
                  className="btn-secondary btn-small"
                >
                  Edit
                </button>
                <button className="btn-secondary btn-small">
                  View Bookings
                </button>
              </div>
            </div>
          ))}
        </div>

        {services.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🕉️</div>
            <h3 className="text-xl font-semibold text-text-primary mb-2">No services added yet</h3>
            <p className="text-text-secondary mb-6">Start by adding your first spiritual service</p>
            <button
              onClick={() => setIsAddingService(true)}
              className="btn-primary"
            >
              Add Your First Service
            </button>
          </div>
        )}
      </div>
    </div>
  )
}