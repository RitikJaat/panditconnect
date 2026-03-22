import { useState } from 'react'

export default function PanditSupport() {
  const [activeTab, setActiveTab] = useState('faq')
  const [contactForm, setContactForm] = useState({
    subject: '',
    category: '',
    message: '',
    priority: 'normal'
  })

  const faqs = [
    {
      question: 'How do I update my service prices?',
      answer: 'Go to "My Services" in your dashboard, click "Edit" on any service, and update the price field. Changes are reflected immediately on your profile.'
    },
    {
      question: 'How do I manage my availability?',
      answer: 'Use the calendar in your dashboard to set your available dates and times. You can block out dates for personal reasons or mark specific times as unavailable.'
    },
    {
      question: 'What should I do if a client cancels a booking?',
      answer: 'Contact our support team immediately. We have a 24-hour cancellation policy. If cancelled within 24 hours, you may be eligible for compensation.'
    },
    {
      question: 'How do I get verified on the platform?',
      answer: 'Complete your profile with all required documents (ID proof, certifications). Our team will review and verify your account within 2-3 business days.'
    },
    {
      question: 'Can I offer online/remote services?',
      answer: 'Yes! You can specify online services in your profile. We support video consultations and remote pujas through our platform.'
    },
    {
      question: 'How do I receive payments?',
      answer: 'Payments are processed securely through our platform. You can set up bank transfers or digital wallets in your account settings. Payouts occur weekly.'
    },
    {
      question: 'What if there\'s an issue during a service?',
      answer: 'Contact our emergency support line immediately. We have mediators available 24/7 to help resolve any issues between you and clients.'
    },
    {
      question: 'How do I improve my profile visibility?',
      answer: 'Complete your profile fully, add high-quality photos, get good reviews, and maintain high ratings. Verified profiles appear higher in search results.'
    }
  ]

  const categories = [
    'Account & Profile',
    'Bookings & Scheduling',
    'Payments & Payouts',
    'Technical Issues',
    'Client Disputes',
    'Verification Process',
    'Other'
  ]

  const handleInputChange = (field, value) => {
    setContactForm(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In real app, this would send to backend
    alert('Support request submitted! We\'ll get back to you within 24 hours.')
    setContactForm({
      subject: '',
      category: '',
      message: '',
      priority: 'normal'
    })
  }

  const renderFAQ = () => (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="card">
          <h3 className="font-semibold text-text-primary mb-2">{faq.question}</h3>
          <p className="text-text-secondary">{faq.answer}</p>
        </div>
      ))}
    </div>
  )

  const renderContact = () => (
    <div className="max-w-2xl mx-auto">
      <div className="card">
        <h2 className="text-2xl font-serif font-bold text-text-primary mb-6">Contact Support</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-2">Subject</label>
            <input
              type="text"
              value={contactForm.subject}
              onChange={(e) => handleInputChange('subject', e.target.value)}
              className="input-field"
              placeholder="Brief description of your issue"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Category</label>
            <select
              value={contactForm.category}
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

          <div>
            <label className="block text-sm font-semibold mb-2">Priority</label>
            <select
              value={contactForm.priority}
              onChange={(e) => handleInputChange('priority', e.target.value)}
              className="input-field"
            >
              <option value="low">Low - General inquiry</option>
              <option value="normal">Normal - Standard support</option>
              <option value="high">High - Urgent issue</option>
              <option value="urgent">Urgent - Emergency</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Message</label>
            <textarea
              value={contactForm.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              className="textarea-field"
              rows={6}
              placeholder="Please provide detailed information about your issue..."
              required
            />
          </div>

          <button type="submit" className="btn-primary w-full">
            Submit Support Request
          </button>
        </form>
      </div>
    </div>
  )

  const renderResources = () => (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="card">
        <h3 className="text-xl font-serif font-bold text-text-primary mb-4">📚 Knowledge Base</h3>
        <div className="space-y-3">
          <a href="#" className="block text-saffron-500 hover:text-saffron-700">
            Getting Started Guide
          </a>
          <a href="#" className="block text-saffron-500 hover:text-saffron-700">
            Profile Optimization Tips
          </a>
          <a href="#" className="block text-saffron-500 hover:text-saffron-700">
            Booking Management
          </a>
          <a href="#" className="block text-saffron-500 hover:text-saffron-700">
            Payment & Payout Guide
          </a>
        </div>
      </div>

      <div className="card">
        <h3 className="text-xl font-serif font-bold text-text-primary mb-4">🎥 Video Tutorials</h3>
        <div className="space-y-3">
          <a href="#" className="block text-saffron-500 hover:text-saffron-700">
            Setting Up Your Profile
          </a>
          <a href="#" className="block text-saffron-500 hover:text-saffron-700">
            Managing Bookings
          </a>
          <a href="#" className="block text-saffron-500 hover:text-saffron-700">
            Using the Calendar
          </a>
          <a href="#" className="block text-saffron-500 hover:text-saffron-700">
            Handling Client Communications
          </a>
        </div>
      </div>

      <div className="card">
        <h3 className="text-xl font-serif font-bold text-text-primary mb-4">📞 Quick Contact</h3>
        <div className="space-y-3">
          <div>
            <p className="font-semibold">Support Hotline</p>
            <p className="text-text-secondary">+91 98765 43210</p>
            <p className="text-sm text-text-secondary">Mon-Sat: 9 AM - 8 PM IST</p>
          </div>
          <div>
            <p className="font-semibold">Emergency Support</p>
            <p className="text-text-secondary">+91 98765 43211</p>
            <p className="text-sm text-text-secondary">24/7 for urgent issues</p>
          </div>
        </div>
      </div>

      <div className="card">
        <h3 className="text-xl font-serif font-bold text-text-primary mb-4">📧 Email Support</h3>
        <div className="space-y-3">
          <div>
            <p className="font-semibold">General Support</p>
            <p className="text-text-secondary">pandit.support@panditconnect.com</p>
            <p className="text-sm text-text-secondary">Response within 24 hours</p>
          </div>
          <div>
            <p className="font-semibold">Technical Issues</p>
            <p className="text-text-secondary">tech.support@panditconnect.com</p>
            <p className="text-sm text-text-secondary">Response within 12 hours</p>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-text-primary mb-4">
            Support Center
          </h1>
          <p className="text-xl text-text-secondary">
            Get help with your PanditConnect account and services
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <nav className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab('faq')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'faq'
                  ? 'bg-white text-saffron-500 shadow-sm'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              FAQ
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'contact'
                  ? 'bg-white text-saffron-500 shadow-sm'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Contact Support
            </button>
            <button
              onClick={() => setActiveTab('resources')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'resources'
                  ? 'bg-white text-saffron-500 shadow-sm'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Resources
            </button>
          </nav>
        </div>

        {/* Content */}
        {activeTab === 'faq' && renderFAQ()}
        {activeTab === 'contact' && renderContact()}
        {activeTab === 'resources' && renderResources()}
      </div>
    </div>
  )
}