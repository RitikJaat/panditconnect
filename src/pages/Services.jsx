import { Link, useNavigate } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard'

export default function Services() {
  const navigate = useNavigate()
  const services = [
    {
      icon: '🎉',
      title: 'Pujas & Rituals',
      description: 'Daily rituals, special prayers, and sacred ceremonies for various occasions',
      link: '/book-pandit?service=pooja',
      details: 'Includes havans, aartis, and traditional ceremonies'
    },
    {
      icon: '💒',
      title: 'Wedding Ceremonies',
      description: 'Complete wedding rituals including mangal pheras and vidhi',
      link: '/book-pandit?service=wedding',
      details: 'Traditional Hindu wedding ceremonies with all rituals'
    },
    {
      icon: '🏠',
      title: 'Housewarming',
      description: 'Griha Pravesh and property blessing ceremonies',
      link: '/book-pandit?service=housewarming',
      details: 'Vastu-compliant home blessing ceremonies'
    },
    {
      icon: '☮️',
      title: 'Spiritual Consultation',
      description: 'Life guidance and spiritual counseling sessions',
      link: '/book-pandit?service=consultation',
      details: 'Personal spiritual guidance and advice'
    },
    {
      icon: '🧘',
      title: 'Meditation Guidance',
      description: 'Meditation techniques and spiritual training',
      link: '/book-pandit?service=meditation',
      details: 'Learn various meditation practices and mindfulness'
    },
    {
      icon: '✨',
      title: 'Kundli Analysis',
      description: 'Astrological birth chart reading and analysis',
      link: '/book-pandit?service=kundli',
      details: 'Detailed kundli reading with predictions and remedies'
    },
    {
      icon: '🏛️',
      title: 'Vastu Consultation',
      description: 'Space arrangement and energy optimization',
      link: '/book-pandit?service=vastu',
      details: 'Vastu shastra consultation for homes and offices'
    },
    {
      icon: '🔮',
      title: 'Numerology',
      description: 'Number-based life guidance and predictions',
      link: '/book-pandit?service=numerology',
      details: 'Numerological analysis for life decisions'
    },
    {
      icon: '👶',
      title: 'Naming Ceremony',
      description: 'Traditional naming ceremonies for newborns',
      link: '/book-pandit?service=naming',
      details: 'Sanskrit naming and blessing ceremonies'
    },
    {
      icon: '🎂',
      title: 'Birthday Puja',
      description: 'Special birthday prayers and blessings',
      link: '/book-pandit?service=birthday',
      details: 'Birthday celebrations with traditional rituals'
    },
    {
      icon: '🕉️',
      title: 'Sacred Thread Ceremony',
      description: 'Upanayana and sacred thread ceremonies',
      link: '/book-pandit?service=upanayana',
      details: 'Traditional coming-of-age ceremonies'
    },
    {
      icon: '🌅',
      title: 'Morning Prayers',
      description: 'Daily morning prayer sessions and guidance',
      link: '/book-pandit?service=prayers',
      details: 'Learn and participate in morning prayer rituals'
    }
  ]

  const categories = [
    { name: 'Ceremonies', services: services.slice(0, 4) },
    { name: 'Consultation', services: services.slice(4, 8) },
    { name: 'Special Occasions', services: services.slice(8, 12) }
  ]

  const handleServiceClick = (link) => {
    navigate(link)
  }

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-text-primary mb-4">
            Our Services
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Discover our comprehensive range of spiritual services. From traditional ceremonies to modern spiritual guidance,
            find the perfect service for your needs.
          </p>
        </div>

        {/* Service Categories */}
        {categories.map((category, categoryIndex) => (
          <section key={categoryIndex} className="mb-16">
            <h2 className="text-3xl font-serif font-bold text-text-primary mb-8 text-center">
              {category.name}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.services.map((service, index) => (
                <div key={index} className="card group hover:shadow-lg transition-shadow">
                  <ServiceCard
                    {...service}
                    onClick={() => handleServiceClick(service.link)}
                  />
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-sm text-text-secondary text-center">{service.details}</p>
                    <Link
                      to={service.link}
                      className="btn-primary btn-small w-full mt-3 block text-center"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Call to Action */}
        <section className="bg-saffron-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-serif font-bold text-text-primary mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            Our verified pandits offer many more specialized services. Contact us to discuss your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/find-pandit" className="btn-primary">
              Find a Pandit
            </Link>
            <Link to="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-serif font-bold text-text-primary mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="font-semibold text-text-primary mb-2">How much do services cost?</h3>
              <p className="text-text-secondary text-sm">
                Service costs vary based on the type of ceremony and pandit's experience. Prices typically range from ₹300 to ₹5000.
              </p>
            </div>
            <div className="card">
              <h3 className="font-semibold text-text-primary mb-2">Do you provide materials?</h3>
              <p className="text-text-secondary text-sm">
                Many pandits include samagri (materials) in their service. Check individual profiles for details.
              </p>
            </div>
            <div className="card">
              <h3 className="font-semibold text-text-primary mb-2">How far in advance should I book?</h3>
              <p className="text-text-secondary text-sm">
                For special ceremonies, book at least 2-4 weeks in advance. Regular consultations can be booked sooner.
              </p>
            </div>
            <div className="card">
              <h3 className="font-semibold text-text-primary mb-2">Are pandits verified?</h3>
              <p className="text-text-secondary text-sm">
                All pandits on our platform undergo thorough background verification and certification checks.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}