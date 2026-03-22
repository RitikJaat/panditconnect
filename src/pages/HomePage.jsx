import { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import SearchBar from '../components/SearchBar'
import ServiceCard from '../components/ServiceCard'
import PanditCard from '../components/PanditCard'
import Carousel from '../components/Carousel'

export default function HomePage() {
  const navigate = useNavigate()
  const auth = useContext(AuthContext)

  useEffect(() => {
    if (auth?.isAuthenticated && auth.userType === 'pandit') {
      navigate('/pandit-landing')
    }
  }, [auth, navigate])

  const services = [
    { icon: '🎉', title: 'Pujas & Rituals', description: 'Daily rituals, special prayers, and sacred ceremonies', link: '/book-pandit?service=pooja' },
    { icon: '💒', title: 'Wedding Ceremonies', description: 'Full wedding rituals and guidance', link: '/book-pandit?service=wedding' },
    { icon: '🏠', title: 'Housewarming', description: 'Griha Pravesh and property blessing', link: '/book-pandit?service=housewarming' },
    { icon: '☮️', title: 'Spiritual Consultation', description: 'Life guidance and spiritual counseling', link: '/book-pandit?service=consultation' },
    { icon: '🧘', title: 'Meditation Guidance', description: 'Meditation techniques and training', link: '/book-pandit?service=meditation' },
    { icon: '✨', title: 'Kundli Analysis', description: 'Astrological birth chart reading', link: '/book-pandit?service=kundli' },
    { icon: '🏛️', title: 'Vastu Consultation', description: 'Space arrangement and energy optimization', link: '/book-pandit?service=vastu' },
    { icon: '🔮', title: 'Numerology', description: 'Number-based life guidance', link: '/book-pandit?service=numerology' },
  ]

  const panditCards = [
    { name: 'Shastri Ji', specialization: 'Vedic Rituals', rating: 4.9, reviews: 342, price: 500 },
    { name: 'Pandit Sharma', specialization: 'Astrology', rating: 4.8, reviews: 289, price: 600 },
    { name: 'Guruji', specialization: 'Meditation', rating: 4.7, reviews: 156, price: 400 },
    { name: 'Dr. Patel', specialization: 'Vastu Expert', rating: 4.9, reviews: 421, price: 700 },
  ]

  const handleServiceClick = (link) => {
    navigate(link)
  }

  const handleQuickSearch = (service) => {
    const serviceMap = {
      'Wedding Ceremonies': 'wedding',
      'Pujas & Rituals': 'pooja',
      'Consultation': 'consultation',
      'Meditation': 'meditation'
    }
    navigate(`/find-pandit?service=${serviceMap[service] || 'all'}`)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-off-white to-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-saffron-500 mb-4">
            Connect with Spiritual Wisdom
          </h1>
          <p className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto">
            Find verified Hindu priests and spiritual guides for ceremonies, guidance, and blessings
          </p>
          <div className="flex justify-center">
            <SearchBar />
          </div>
        </div>
      </section>

      {/* Quick Search Buttons */}
      <section className="py-8 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-text-secondary mb-4">Quick Search:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Wedding Ceremonies', 'Pujas & Rituals', 'Consultation', 'Meditation'].map(s => (
              <button key={s} className="btn-secondary btn-small" onClick={() => handleQuickSearch(s)}>
                {s}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">Popular Services</h2>
          <p className="section-subtitle text-center">
            Explore our wide range of spiritual services
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <ServiceCard key={i} {...s} onClick={() => handleServiceClick(s.link)} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Pandits Carousel */}
      <section className="py-16 bg-off-white">
        <Carousel
          title="Top Rated Pandits in Chandigarh"
          subtitle="Highly-rated and verified spiritual practitioners"
          items={panditCards.map((p, i) => (
            <PanditCard key={i} {...p} />
          ))}
        />
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Browse', desc: 'Explore verified priests and their services' },
              { step: '2', title: 'Search', desc: 'Filter by service type, rating, and location' },
              { step: '3', title: 'Connect', desc: 'Book a consultation or ceremony' },
              { step: '4', title: 'Experience', desc: 'Receive spiritual guidance and blessings' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-saffron-500 to-gold-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-serif font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-text-secondary text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">What Our Users Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: 'Excellent service! The priest was very knowledgeable and performed the ritual perfectly.', author: 'Arjun S.' },
              { text: 'I found exactly what I was looking for. Highly recommend PanditConnect!', author: 'Priya M.' },
              { text: 'Verified and trusted priests. Made booking my wedding ceremony so easy.', author: 'Rajesh K.' },
            ].map((t, i) => (
              <div key={i} className="card">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j}>⭐</span>
                  ))}
                </div>
                <p className="text-text-secondary italic mb-4 leading-relaxed">"{t.text}"</p>
                <p className="font-semibold text-text-primary">— {t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-saffron-500 to-saffron-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Ready to Begin Your Spiritual Journey?</h2>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of devotees connecting with spiritual wisdom
          </p>
          <button className="bg-white text-saffron-500 hover:bg-off-white px-8 py-4 rounded-lg font-bold transition-colors">
            Get Started Now
          </button>
        </div>
      </section>
    </div>
  )
}
