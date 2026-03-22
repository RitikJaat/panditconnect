import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function PanditOnboarding() {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    // Step 1
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    location: '',
    // Step 2
    credentials: '',
    specializations: [],
    languages: [],
    idProof: '',
    // Step 3
    services: [],
    bio: '',
    // Step 4 - Review only
  })
  const [submitted, setSubmitted] = useState(false)

  const specializations = [
    'Vedic Rituals',
    'Wedding Ceremonies',
    'Housewarming',
    'Astrology',
    'Meditation',
    'Vastu Consultation',
    'Numerology',
    'Spiritual Consultation',
  ]

  const languages = ['Hindi', 'English', 'Sanskrit', 'Tamil', 'Telugu', 'Kannada', 'Malayalam']

  const services = [
    { name: 'Pujas & Rituals', price: '' },
    { name: 'Wedding Ceremonies', price: '' },
    { name: 'Consultation', price: '' },
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }))
  }

  const nextStep = () => {
    if (step < 4) setStep(step + 1)
  }

  const prevStep = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-off-white flex items-center justify-center">
        <div className="max-w-2xl w-full mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-12 text-center border-l-4 border-success">
            <div className="text-6xl mb-4">✅</div>
            <h1 className="text-4xl font-serif font-bold text-text-primary mb-4">
              Welcome to PanditConnect!
            </h1>
            <p className="text-lg text-text-secondary mb-4 leading-relaxed">
              Your application has been submitted successfully. Our verification team will review your credentials within 24-48 hours.
            </p>
            <div className="bg-cream p-6 rounded-lg mb-8 text-left">
              <h3 className="font-bold text-text-primary mb-4">Next Steps:</h3>
              <ol className="space-y-2 text-text-secondary">
                <li>✓ Verification in progress (24-48 hours)</li>
                <li>✓ Welcome email with dashboard link</li>
                <li>✓ Activate your profile</li>
                <li>✓ Start receiving bookings!</li>
              </ol>
            </div>
            <button
              onClick={() => navigate('/pandit-dashboard')}
              className="btn-pandit"
            >
              Go to Dashboard
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-off-white">
      {/* Header */}
      <div className="bg-white border-b border-border">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="mb-6">
            <div className="w-full bg-border rounded-full h-1 mb-4">
              <div
                className="bg-gradient-to-r from-saffron-500 to-vermillion-500 h-1 rounded-full transition-all duration-300"
                style={{ width: `${(step / 4) * 100}%` }}
              ></div>
            </div>
            <p className="text-sm text-text-secondary text-center">
              Step {step} of 4: {['Basic Information', 'Credentials', 'Services', 'Review'][step - 1]}
            </p>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
          {/* Step 1 */}
          {step === 1 && (
            <div className="space-y-6 animate-slideUp">
              <h2 className="text-2xl font-serif font-bold text-text-primary mb-6">Basic Information</h2>

              <div>
                <label className="block font-semibold mb-2 text-text-primary">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className="input-field"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-semibold mb-2 text-text-primary">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className="input-field"
                    required
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-2 text-text-primary">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="input-field"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold mb-2 text-text-primary">Years of Experience *</label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="input-field"
                  required
                >
                  <option value="">Select</option>
                  <option value="0-2">0-2 years</option>
                  <option value="2-5">2-5 years</option>
                  <option value="5-10">5-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold mb-2 text-text-primary">Location *</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="City, State"
                  className="input-field"
                  required
                />
              </div>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div className="space-y-6 animate-slideUp">
              <h2 className="text-2xl font-serif font-bold text-text-primary mb-6">Credentials & Expertise</h2>

              <div>
                <label className="block font-semibold mb-2 text-text-primary">Credentials/Certifications *</label>
                <textarea
                  name="credentials"
                  value={formData.credentials}
                  onChange={handleInputChange}
                  placeholder="List your degrees, certifications, and qualifications"
                  className="textarea-field"
                  rows="4"
                  required
                ></textarea>
                <p className="text-xs text-text-secondary mt-2">Example: Vedic Scholar from XYZ University, 10+ years of Vedic training</p>
              </div>

              <div>
                <label className="block font-semibold mb-3 text-text-primary">Select Your Specializations *</label>
                <div className="grid md:grid-cols-2 gap-3">
                  {specializations.map(spec => (
                    <label key={spec} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.specializations.includes(spec)}
                        onChange={() => handleCheckboxChange('specializations', spec)}
                        className="w-4 h-4"
                      />
                      <span>{spec}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-semibold mb-3 text-text-primary">Languages Spoken *</label>
                <div className="grid md:grid-cols-2 gap-3">
                  {languages.map(lang => (
                    <label key={lang} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.languages.includes(lang)}
                        onChange={() => handleCheckboxChange('languages', lang)}
                        className="w-4 h-4"
                      />
                      <span>{lang}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-semibold mb-2 text-text-primary">ID Proof Type *</label>
                <select
                  name="idProof"
                  value={formData.idProof}
                  onChange={handleInputChange}
                  className="input-field"
                  required
                >
                  <option value="">Select ID Proof</option>
                  <option value="aadhar">Aadhar Card</option>
                  <option value="passport">Passport</option>
                  <option value="dricense">Driving License</option>
                  <option value="pan">PAN Card</option>
                </select>
              </div>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div className="space-y-6 animate-slideUp">
              <h2 className="text-2xl font-serif font-bold text-text-primary mb-6">Services & Pricing</h2>

              <div>
                <label className="block font-semibold mb-4 text-text-primary">Set Your Pricing *</label>
                <div className="space-y-4">
                  {[
                    { name: 'Pujas & Rituals', price: '₹/hour' },
                    { name: 'Consultations', price: '₹/hour' },
                    { name: 'Wedding Ceremonies', price: '₹/event' },
                  ].map(service => (
                    <div key={service.name} className="flex items-center gap-4">
                      <span className="flex-1 font-semibold text-text-primary">{service.name}</span>
                      <div className="flex items-center border border-border rounded-lg overflow-hidden">
                        <span className="px-4 py-2 bg-gray-light text-text-secondary">₹</span>
                        <input
                          type="number"
                          placeholder="0"
                          className="w-24 px-4 py-2 border-l border-border focus:outline-none"
                        />
                        <span className="px-4 py-2 text-text-secondary text-sm">{service.price.split('/')[1]}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-semibold mb-2 text-text-primary">Professional Bio *</label>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                  placeholder="Write a brief bio about yourself and your services (100-500 characters)"
                  className="textarea-field"
                  rows="6"
                  maxLength="500"
                  required
                ></textarea>
                <p className="text-xs text-text-secondary mt-2">
                  {formData.bio.length}/500 characters
                </p>
              </div>
            </div>
          )}

          {/* Step 4 */}
          {step === 4 && (
            <div className="space-y-6 animate-slideUp">
              <h2 className="text-2xl font-serif font-bold text-text-primary mb-6">Review Your Information</h2>

              <div className="bg-cream p-6 rounded-lg space-y-6">
                <div>
                  <h3 className="font-semibold text-text-primary mb-3">Basic Information</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-text-secondary">Name</p>
                      <p className="font-semibold text-text-primary">{formData.fullName}</p>
                    </div>
                    <div>
                      <p className="text-text-secondary">Email</p>
                      <p className="font-semibold text-text-primary">{formData.email}</p>
                    </div>
                    <div>
                      <p className="text-text-secondary">Phone</p>
                      <p className="font-semibold text-text-primary">{formData.phone}</p>
                    </div>
                    <div>
                      <p className="text-text-secondary">Experience</p>
                      <p className="font-semibold text-text-primary">{formData.experience} years</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <h3 className="font-semibold text-text-primary mb-3">Credentials</h3>
                  <p className="text-sm text-text-secondary">{formData.credentials}</p>
                </div>

                <div className="border-t border-border pt-6">
                  <h3 className="font-semibold text-text-primary mb-2">Specializations</h3>
                  <div className="flex flex-wrap gap-2">
                    {formData.specializations.map(s => (
                      <span key={s} className="badge badge-info text-white">{s}</span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <p className="text-sm text-center text-text-secondary">
                    ✓ Review complete. Click Submit to finalize your application.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex justify-between gap-4 mt-8 pt-8 border-t border-border">
            <button
              type="button"
              onClick={prevStep}
              disabled={step === 1}
              className="btn-secondary btn-small disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ← Previous
            </button>

            {step < 4 ? (
              <button
                type="button"
                onClick={nextStep}
                className="btn-primary btn-small"
              >
                Next →
              </button>
            ) : (
              <button
                type="submit"
                className="btn-pandit btn-small"
              >
                Submit Application ✓
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}
