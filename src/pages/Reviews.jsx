import { useState } from 'react'

export default function Reviews() {
  const [activeTab, setActiveTab] = useState('reviews')

  const reviews = [
    {
      id: 1,
      customer: 'Priya Sharma',
      service: 'Wedding Ceremony',
      pandit: 'Pandit Sharma',
      rating: 5,
      review: 'Absolutely wonderful experience! Pandit Ji was very knowledgeable and made our wedding ceremony so special. The entire process was smooth and spiritual.',
      date: '2023-12-15',
      location: 'Chandigarh'
    },
    {
      id: 2,
      customer: 'Rajesh Kumar',
      service: 'Housewarming Puja',
      pandit: 'Guruji',
      rating: 5,
      review: 'Guruji performed our Griha Pravesh ceremony beautifully. Very professional and the puja was conducted with great devotion. Highly recommended!',
      date: '2023-12-10',
      location: 'Mohali'
    },
    {
      id: 3,
      customer: 'Anita Singh',
      service: 'Kundli Analysis',
      pandit: 'Dr. Patel',
      rating: 4,
      review: 'Very detailed and accurate kundli analysis. Dr. Patel explained everything clearly and provided valuable insights for our future.',
      date: '2023-12-08',
      location: 'Panchkula'
    },
    {
      id: 4,
      customer: 'Vikram Mehta',
      service: 'Spiritual Consultation',
      pandit: 'Shastri Ji',
      rating: 5,
      review: 'Shastri Ji provided excellent guidance during our consultation. His wisdom and experience really helped us through a difficult time.',
      date: '2023-12-05',
      location: 'Chandigarh'
    }
  ]

  const testimonials = [
    {
      name: 'Mrs. Kapoor',
      location: 'Delhi',
      text: 'PanditConnect made finding a genuine priest so easy. Our family puja was perfect!',
      rating: 5
    },
    {
      name: 'Mr. Jain',
      location: 'Mumbai',
      text: 'Professional service and verified pandits. Highly trustworthy platform.',
      rating: 5
    },
    {
      name: 'Mrs. Reddy',
      location: 'Bangalore',
      text: 'Found an amazing priest for our wedding. The booking process was seamless.',
      rating: 5
    }
  ]

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
        ★
      </span>
    ))
  }

  const renderReviews = () => (
    <div className="space-y-6">
      {reviews.map(review => (
        <div key={review.id} className="card">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-semibold text-text-primary">{review.customer}</h3>
              <p className="text-sm text-text-secondary">
                {review.service} with {review.pandit} • {review.location}
              </p>
            </div>
            <div className="text-right">
              <div className="flex mb-1">
                {renderStars(review.rating)}
              </div>
              <p className="text-sm text-text-secondary">{review.date}</p>
            </div>
          </div>
          <p className="text-text-secondary">{review.review}</p>
        </div>
      ))}
    </div>
  )

  const renderTestimonials = () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="card text-center">
          <div className="flex justify-center mb-4">
            {renderStars(testimonial.rating)}
          </div>
          <blockquote className="text-text-secondary mb-4 italic">
            "{testimonial.text}"
          </blockquote>
          <cite className="font-semibold text-text-primary">
            {testimonial.name}
          </cite>
          <p className="text-sm text-text-secondary">{testimonial.location}</p>
        </div>
      ))}
    </div>
  )

  const renderContact = () => (
    <div className="max-w-2xl mx-auto">
      <div className="card">
        <h2 className="text-2xl font-serif font-bold text-text-primary mb-6">Contact Us</h2>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2">Get in Touch</h3>
            <p className="text-text-secondary mb-4">
              Have questions about our services or need help with your booking?
              We're here to help!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">📧 Email</h4>
              <p className="text-text-secondary">support@panditconnect.com</p>
              <p className="text-text-secondary">Response within 24 hours</p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">📱 Phone</h4>
              <p className="text-text-secondary">+91 98765 43210</p>
              <p className="text-text-secondary">Mon-Sat: 9 AM - 8 PM</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2">🏢 Office Address</h4>
            <p className="text-text-secondary">
              PanditConnect HQ<br />
              Sector 17, Chandigarh<br />
              Punjab, India - 160017
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">💬 Live Chat</h4>
            <p className="text-text-secondary mb-2">
              Available on our website during business hours
            </p>
            <button className="btn-primary">Start Chat</button>
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
            Reviews & Contact
          </h1>
          <p className="text-xl text-text-secondary">
            See what our community says and get in touch with us
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <nav className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab('reviews')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'reviews'
                  ? 'bg-white text-saffron-500 shadow-sm'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Customer Reviews
            </button>
            <button
              onClick={() => setActiveTab('testimonials')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'testimonials'
                  ? 'bg-white text-saffron-500 shadow-sm'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Testimonials
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'contact'
                  ? 'bg-white text-saffron-500 shadow-sm'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Contact Us
            </button>
          </nav>
        </div>

        {/* Content */}
        {activeTab === 'reviews' && renderReviews()}
        {activeTab === 'testimonials' && renderTestimonials()}
        {activeTab === 'contact' && renderContact()}
      </div>
    </div>
  )
}