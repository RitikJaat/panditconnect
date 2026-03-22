import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: '',
    message: ''
  })

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In real app, this would send to backend
    alert('Thank you for your message! We\'ll get back to you within 24 hours.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      category: '',
      message: ''
    })
  }

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email Us',
      description: 'Send us an email and we\'ll respond within 24 hours',
      contact: 'support@panditconnect.com',
      action: 'mailto:support@panditconnect.com'
    },
    {
      icon: '📱',
      title: 'Call Us',
      description: 'Speak directly with our support team',
      contact: '+91 98765 43210',
      action: 'tel:+919876543210'
    },
    {
      icon: '💬',
      title: 'Live Chat',
      description: 'Chat with us instantly during business hours',
      contact: 'Available 9 AM - 8 PM IST',
      action: '#'
    },
    {
      icon: '📍',
      title: 'Visit Us',
      description: 'Our office location in Chandigarh',
      contact: 'Sector 17, Chandigarh, Punjab',
      action: '#'
    }
  ]

  const categories = [
    'General Inquiry',
    'Booking Support',
    'Pandit Registration',
    'Technical Issues',
    'Feedback',
    'Partnership',
    'Other'
  ]

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-text-primary mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Have questions about our services? Need help with your booking? We're here to help you on your spiritual journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Methods */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-serif font-bold text-text-primary mb-6">
              Get in Touch
            </h2>

            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <div key={index} className="card">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{method.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-text-primary mb-1">{method.title}</h3>
                      <p className="text-text-secondary text-sm mb-2">{method.description}</p>
                      <a
                        href={method.action}
                        className="text-saffron-500 hover:text-saffron-700 font-medium"
                      >
                        {method.contact}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Business Hours */}
            <div className="card mt-6">
              <h3 className="font-semibold text-text-primary mb-3">Business Hours</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 8:00 PM IST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>9:00 AM - 6:00 PM IST</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>10:00 AM - 4:00 PM IST</span>
                </div>
                <div className="flex justify-between">
                  <span>Emergency Support:</span>
                  <span>24/7</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="card">
              <h2 className="text-2xl font-serif font-bold text-text-primary mb-6">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Full Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="input-field"
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="input-field"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="input-field"
                      placeholder="+91 98765 43210"
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
                      <option value="">Select a category</option>
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    className="input-field"
                    placeholder="Brief description of your inquiry"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="textarea-field"
                    rows={6}
                    placeholder="Please provide details about your question or concern..."
                    required
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-serif font-bold text-text-primary mb-8 text-center">
            Quick Answers
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card">
              <h3 className="font-semibold text-text-primary mb-2">How do I book a pandit?</h3>
              <p className="text-text-secondary text-sm">
                Use our booking system or contact us directly. We'll match you with verified pandits in your area.
              </p>
            </div>

            <div className="card">
              <h3 className="font-semibold text-text-primary mb-2">Are services available online?</h3>
              <p className="text-text-secondary text-sm">
                Yes! Many pandits offer virtual consultations and remote pujas through our platform.
              </p>
            </div>

            <div className="card">
              <h3 className="font-semibold text-text-primary mb-2">What's the cancellation policy?</h3>
              <p className="text-text-secondary text-sm">
                Free cancellation up to 24 hours before the service. Late cancellations may incur fees.
              </p>
            </div>

            <div className="card">
              <h3 className="font-semibold text-text-primary mb-2">How are pandits verified?</h3>
              <p className="text-text-secondary text-sm">
                All pandits undergo background checks, certification verification, and client reviews.
              </p>
            </div>

            <div className="card">
              <h3 className="font-semibold text-text-primary mb-2">Do you accept international clients?</h3>
              <p className="text-text-secondary text-sm">
                Absolutely! We serve clients worldwide with both in-person and virtual services.
              </p>
            </div>

            <div className="card">
              <h3 className="font-semibold text-text-primary mb-2">Need help choosing a service?</h3>
              <p className="text-text-secondary text-sm">
                Contact our spiritual advisors for personalized recommendations based on your needs.
              </p>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="mt-16">
          <div className="card">
            <h2 className="text-2xl font-serif font-bold text-text-primary mb-6 text-center">
              Our Location
            </h2>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <p className="text-text-secondary">Interactive map would be displayed here</p>
              <p className="text-text-secondary text-sm mt-2">PanditConnect HQ - Sector 17, Chandigarh</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}