import { useState } from 'react'

export default function PanditProfile() {
  const [profile, setProfile] = useState({
    name: 'Pandit Sharma',
    email: 'pandit.sharma@email.com',
    phone: '+91 98765 43210',
    location: 'Chandigarh, Punjab',
    languages: ['Hindi', 'English', 'Punjabi'],
    experience: '15 years',
    specializations: ['Wedding Ceremonies', 'Pujas & Rituals', 'Spiritual Consultation'],
    certifications: ['Vedic Scholar', 'Sanskrit Expert', 'Temple Priest License'],
    bio: 'Experienced Vedic priest with 15+ years of conducting traditional Hindu ceremonies. Specialized in wedding rituals and spiritual guidance.',
    profileImage: null,
    videoIntroduction: null
  })

  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState(profile)

  const availableLanguages = ['Hindi', 'English', 'Punjabi', 'Sanskrit', 'Bengali', 'Gujarati', 'Marathi']
  const availableSpecializations = [
    'Wedding Ceremonies', 'Pujas & Rituals', 'Housewarming', 'Spiritual Consultation',
    'Meditation Guidance', 'Kundli Analysis', 'Vastu Consultation', 'Astrology',
    'Funeral Rites', 'Naming Ceremony', 'Thread Ceremony'
  ]

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleArrayChange = (field, value, checked) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked
        ? [...prev[field], value]
        : prev[field].filter(item => item !== value)
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setProfile(formData)
    setIsEditing(false)
  }

  const cancelEdit = () => {
    setFormData(profile)
    setIsEditing(false)
  }

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-serif font-bold text-text-primary mb-4">
              My Profile
            </h1>
            <p className="text-xl text-text-secondary">
              Manage your public profile and credentials
            </p>
          </div>
          {!isEditing && (
            <button
              onClick={() => setIsEditing(true)}
              className="btn-primary"
            >
              Edit Profile
            </button>
          )}
        </div>

        {/* Profile Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <div className="card">
            <h2 className="text-2xl font-serif font-bold text-text-primary mb-6">Basic Information</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="input-field"
                  disabled={!isEditing}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="input-field"
                  disabled={!isEditing}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Phone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="input-field"
                  disabled={!isEditing}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Location</label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  className="input-field"
                  disabled={!isEditing}
                  placeholder="City, State"
                  required
                />
              </div>
            </div>
          </div>

          {/* Professional Details */}
          <div className="card">
            <h2 className="text-2xl font-serif font-bold text-text-primary mb-6">Professional Details</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Years of Experience</label>
                <select
                  value={formData.experience}
                  onChange={(e) => handleInputChange('experience', e.target.value)}
                  className="input-field"
                  disabled={!isEditing}
                >
                  <option value="1-2 years">1-2 years</option>
                  <option value="3-5 years">3-5 years</option>
                  <option value="6-10 years">6-10 years</option>
                  <option value="11-15 years">11-15 years</option>
                  <option value="15+ years">15+ years</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Languages Spoken</label>
                <div className="grid grid-cols-2 gap-2">
                  {availableLanguages.map(lang => (
                    <label key={lang} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.languages.includes(lang)}
                        onChange={(e) => handleArrayChange('languages', lang, e.target.checked)}
                        disabled={!isEditing}
                        className="mr-2"
                      />
                      {lang}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-semibold mb-2">Specializations</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {availableSpecializations.map(spec => (
                  <label key={spec} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.specializations.includes(spec)}
                      onChange={(e) => handleArrayChange('specializations', spec, e.target.checked)}
                      disabled={!isEditing}
                      className="mr-2"
                    />
                    {spec}
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="card">
            <h2 className="text-2xl font-serif font-bold text-text-primary mb-6">Certifications & Credentials</h2>

            <div>
              <label className="block text-sm font-semibold mb-2">Certifications (one per line)</label>
              <textarea
                value={formData.certifications.join('\n')}
                onChange={(e) => handleInputChange('certifications', e.target.value.split('\n').filter(cert => cert.trim()))}
                className="textarea-field"
                disabled={!isEditing}
                rows={4}
                placeholder="Vedic Scholar&#10;Sanskrit Expert&#10;Temple Priest License"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="card">
            <h2 className="text-2xl font-serif font-bold text-text-primary mb-6">About Me</h2>

            <div>
              <label className="block text-sm font-semibold mb-2">Professional Bio</label>
              <textarea
                value={formData.bio}
                onChange={(e) => handleInputChange('bio', e.target.value)}
                className="textarea-field"
                disabled={!isEditing}
                rows={4}
                placeholder="Tell clients about your experience, approach, and what makes you unique..."
                required
              />
            </div>
          </div>

          {/* Media */}
          <div className="card">
            <h2 className="text-2xl font-serif font-bold text-text-primary mb-6">Profile Media</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Profile Photo</label>
                <div className="border-2 border-dashed border-border rounded-lg p-4 text-center">
                  {formData.profileImage ? (
                    <div>
                      <img src={formData.profileImage} alt="Profile" className="w-20 h-20 rounded-full mx-auto mb-2" />
                      <button type="button" className="text-saffron-500 hover:text-saffron-700" disabled={!isEditing}>
                        Change Photo
                      </button>
                    </div>
                  ) : (
                    <div>
                      <div className="text-4xl mb-2">📷</div>
                      <p className="text-text-secondary mb-2">Upload a professional photo</p>
                      <button type="button" className="btn-secondary btn-small" disabled={!isEditing}>
                        Choose File
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Video Introduction</label>
                <div className="border-2 border-dashed border-border rounded-lg p-4 text-center">
                  {formData.videoIntroduction ? (
                    <div>
                      <div className="text-4xl mb-2">🎥</div>
                      <p className="text-text-secondary mb-2">Video uploaded</p>
                      <button type="button" className="text-saffron-500 hover:text-saffron-700" disabled={!isEditing}>
                        Change Video
                      </button>
                    </div>
                  ) : (
                    <div>
                      <div className="text-4xl mb-2">🎬</div>
                      <p className="text-text-secondary mb-2">Upload a short introduction video</p>
                      <button type="button" className="btn-secondary btn-small" disabled={!isEditing}>
                        Choose File
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          {isEditing && (
            <div className="flex gap-3">
              <button type="submit" className="btn-primary">
                Save Changes
              </button>
              <button type="button" onClick={cancelEdit} className="btn-secondary">
                Cancel
              </button>
            </div>
          )}
        </form>

        {/* Profile Preview */}
        {!isEditing && (
          <div className="card mt-8">
            <h2 className="text-2xl font-serif font-bold text-text-primary mb-6">Profile Preview</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-saffron-100 rounded-full flex items-center justify-center text-2xl">
                  🙏
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-text-primary">{profile.name}</h3>
                  <p className="text-text-secondary mb-2">{profile.location} • {profile.experience} experience</p>
                  <p className="text-text-secondary mb-3">{profile.bio}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {profile.specializations.map(spec => (
                      <span key={spec} className="badge badge-info">{spec}</span>
                    ))}
                  </div>
                  <div className="text-sm text-text-secondary">
                    Languages: {profile.languages.join(', ')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}