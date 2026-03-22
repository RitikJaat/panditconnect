import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export default function Signup() {
  const auth = useContext(AuthContext)
  const navigate = useNavigate()

  const [userType, setUserType] = useState('customer')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  })

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!')
      return
    }

    if (!formData.agreeToTerms) {
      alert('Please agree to the terms and conditions!')
      return
    }

    const result = await auth.register({
      email: formData.email,
      password: formData.password,
      firstName: formData.firstName,
      lastName: formData.lastName,
      userType,
      phone: formData.phone
    })

    if (result.success) {
      alert(`Account created successfully! Welcome to PanditConnect as a ${userType}!`)
      if (userType === 'customer') {
        navigate('/dashboard')
      } else {
        navigate('/pandit-onboarding')
      }
    } else {
      alert(`Registration failed: ${result.error}`)
    }
  }

  return (
    <div className="min-h-screen pt-20 pb-16 flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full mx-4">
        <div className="card">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-saffron-500 to-gold-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
              🙏
            </div>
            <h1 className="text-3xl font-serif font-bold text-text-primary mb-2">
              Join PanditConnect
            </h1>
            <p className="text-text-secondary">
              Start your spiritual journey with us
            </p>
          </div>

          {/* User Type Toggle */}
          <div className="flex mb-6 bg-gray-100 rounded-lg p-1">
            <button
              type="button"
              onClick={() => setUserType('customer')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                userType === 'customer'
                  ? 'bg-white text-saffron-500 shadow-sm'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              I'm a Customer
            </button>
            <button
              type="button"
              onClick={() => setUserType('pandit')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                userType === 'pandit'
                  ? 'bg-white text-saffron-500 shadow-sm'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              I'm a Pandit
            </button>
          </div>

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2">First Name</label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  className="input-field"
                  placeholder="John"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Last Name</label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  className="input-field"
                  placeholder="Doe"
                  required
                />
              </div>
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

            <div>
              <label className="block text-sm font-semibold mb-2">Phone Number</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="input-field"
                placeholder="+91 98765 43210"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Password</label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                className="input-field"
                placeholder="Create a strong password"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Confirm Password</label>
              <input
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                className="input-field"
                placeholder="Confirm your password"
                required
              />
            </div>

            {/* Terms Agreement */}
            <div className="flex items-start">
              <input
                type="checkbox"
                id="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={(e) => handleInputChange('agreeToTerms', e.target.checked)}
                className="mt-1 mr-3"
                required
              />
              <label htmlFor="agreeToTerms" className="text-sm text-text-secondary">
                I agree to the{' '}
                <Link to="/terms" className="text-saffron-500 hover:text-saffron-700">
                  Terms of Service
                </Link>
                {' '}and{' '}
                <Link to="/privacy" className="text-saffron-500 hover:text-saffron-700">
                  Privacy Policy
                </Link>
              </label>
            </div>

            <button type="submit" className="btn-primary w-full" disabled={auth.loading}>
              {auth.loading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>

          {auth.error && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700 text-sm">{auth.error}</p>
            </div>
          )}

          {/* Social Signup */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-text-secondary">Or sign up with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button className="btn-secondary flex items-center justify-center gap-2">
                <span>📘</span>
                Facebook
              </button>
              <button className="btn-secondary flex items-center justify-center gap-2">
                <span>🔵</span>
                Google
              </button>
            </div>
          </div>

          {/* Login Link */}
          <div className="mt-8 text-center">
            <p className="text-text-secondary">
              Already have an account?{' '}
              <Link to="/login" className="text-saffron-500 hover:text-saffron-700 font-medium">
                Sign in here
              </Link>
            </p>
          </div>

          {/* Pandit Benefits */}
          {userType === 'pandit' && (
            <div className="mt-6 p-4 bg-vermillion-50 rounded-lg">
              <h3 className="font-semibold text-vermillion-800 mb-2">Why join as a Pandit?</h3>
              <ul className="text-sm text-vermillion-700 space-y-1">
                <li>• Reach more devotees in your area</li>
                <li>• Flexible scheduling and pricing</li>
                <li>• Secure payment processing</li>
                <li>• Build your spiritual community</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}