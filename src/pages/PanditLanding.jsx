import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function PanditLanding() {
  const [openFAQ, setOpenFAQ] = useState(null)

  const faqs = [
    {
      q: 'How do I get verified on PanditConnect?',
      a: 'We verify all priests through a thorough KYC process including credentials, certifications, and background checks. This ensures quality and trustworthiness.'
    },
    {
      q: 'What percentage commission do you charge?',
      a: 'We charge a competitive 15% commission on bookings, which is lower than most platforms. You keep 85% of your earnings.'
    },
    {
      q: 'How do I receive payments?',
      a: 'Payments are processed weekly to your registered bank account. You get instant notifications for every booking.'
    },
    {
      q: 'Can I set my own pricing?',
      a: 'Yes! You have complete control over your pricing for different services. You can adjust rates anytime.'
    },
    {
      q: 'What support do you provide?',
      a: 'We offer 24/7 customer support, marketing assistance, and dedicated account management for all priests.'
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-off-white to-cream border-b-4 border-vermillion-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-vermillion-500 mb-4">
            Grow Your Spiritual Practice
          </h1>
          <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
            Join a network of verified priests and reach thousands of devotees seeking your guidance
          </p>
          <div className="space-x-4">
            <Link to="/pandit-onboarding" className="btn-pandit">
              Join As Priest
            </Link>
            <a href="#benefits" className="btn-secondary">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section id="benefits" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center text-vermillion-500">Why Join Us?</h2>
          <p className="section-subtitle text-center">
            Everything you need to build a thriving spiritual practice online
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '👥',
                title: 'Reach More Devotees',
                desc: 'Access a growing network of thousands of seekers looking for spiritual guidance'
              },
              {
                icon: '💰',
                title: 'Increase Earnings',
                desc: 'Flex pricing model lets you set rates and grow income over time'
              },
              {
                icon: '✅',
                title: 'Get Verified',
                desc: 'Build trust with verified badge and transparent ratings from real clients'
              },
              {
                icon: '📱',
                title: 'Easy Management',
                desc: 'Manage bookings, availability, and earnings from one dashboard'
              },
              {
                icon: '🎓',
                title: 'Professional Tools',
                desc: 'Website presence, booking system, and payment processing included'
              },
              {
                icon: '🤝',
                title: '24/7 Support',
                desc: 'Dedicated account managers and support team to help you succeed'
              },
            ].map((v, i) => (
              <div key={i} className="card-pandit text-center">
                <div className="text-5xl mb-4">{v.icon}</div>
                <h3 className="font-serif text-lg font-bold text-text-primary mb-2">{v.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center text-text-primary mb-12">Your Journey in 4 Steps</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'Sign Up',
                desc: 'Create your account and complete basic information'
              },
              {
                step: '2',
                title: 'Verify',
                desc: 'Submit credentials and pass our verification process'
              },
              {
                step: '3',
                title: 'Setup Profile',
                desc: 'Add services, pricing, and availability to your dashboard'
              },
              {
                step: '4',
                title: 'Start Earning',
                desc: 'Receive bookings and grow your practice organically'
              },
            ].map((item, i) => (
              <div key={i} className="card">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-vermillion-500 to-vermillion-700 text-white flex items-center justify-center text-lg font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="font-serif font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-text-secondary text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">Everything You Need</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif text-2xl font-bold text-text-primary mb-4">For Your Success</h3>
              <ul className="space-y-4">
                {[
                  'Automated booking system',
                  'Secure payment processing',
                  'Marketing & promotion tools',
                  'Analytics & performance tracking',
                  'Community support forum',
                  'Regular training & webinars',
                ].map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-vermillion-500 font-bold text-xl">✓</span>
                    <span className="text-text-secondary">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-bold text-text-primary mb-4">Community First</h3>
              <p className="text-text-secondary mb-6 leading-relaxed">
                Join a community of over 2,000+ verified priests across India. Share experiences, learn from each other, and grow together. Our dedicated support team is always ready to help you succeed.
              </p>
              <div className="bg-cream p-6 rounded-lg border-l-4 border-vermillion-500">
                <p className="text-sm text-text-secondary">
                  <strong>Average earnings:</strong> Our priests earn ₹50,000-₹2,00,000+ per month, depending on their experience and services offered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">Stories from Our Priests</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: 'PanditConnect has completely transformed my practice. I went from 5 bookings a month to 50+!',
                author: 'Pandit Sharma',
                role: 'Senior Priest, Delhi'
              },
              {
                text: 'The platform is so easy to use. All my clients are happy, and I get paid on time every week.',
                author: 'Guruji',
                role: 'Meditation Guide, Bangalore'
              },
              {
                text: 'Finally, a platform made for priests! The support team is incredibly helpful.',
                author: 'Dr. Patel',
                role: 'Vastu Expert, Mumbai'
              },
            ].map((t, i) => (
              <div key={i} className="card">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j}>⭐</span>
                  ))}
                </div>
                <p className="text-text-secondary italic mb-4 leading-relaxed">"{t.text}"</p>
                <p className="font-semibold text-text-primary">{t.author}</p>
                <p className="text-sm text-text-secondary">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">Frequently Asked Questions</h2>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                  className="w-full px-6 py-4 text-left font-semibold hover:bg-gray-light transition-colors flex justify-between items-center"
                >
                  {faq.q}
                  <span className="text-xl transition-transform duration-200" style={{
                    transform: openFAQ === i ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}>⬇️</span>
                </button>
                {openFAQ === i && (
                  <div className="px-6 py-4 bg-off-white border-t border-border text-text-secondary">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-vermillion-500 to-vermillion-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Ready to Grow Your Practice?</h2>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of priests already earning on PanditConnect
          </p>
          <Link to="/pandit-onboarding" className="bg-white text-vermillion-500 hover:bg-off-white px-8 py-4 rounded-lg font-bold transition-colors inline-block">
            Start Your Journey Today
          </Link>
        </div>
      </section>
    </div>
  )
}
