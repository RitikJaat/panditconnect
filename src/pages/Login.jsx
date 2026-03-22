import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export default function Login() {
  const auth = useContext(AuthContext)
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  })

  const [userType, setUserType] = useState('customer')

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const result = await auth.login({ 
      email: formData.email, 
      password: formData.password,
      userType 
    })

    if (result.success) {
      if (userType === 'customer') {
        navigate('/dashboard')
      } else {
        navigate('/pandit-dashboard')
      }
    } else {
      alert(`Login failed: ${result.error}`)
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
              Welcome Back
            </h1>
            <p className="text-text-secondary">
              Sign in to your PanditConnect account
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
              Customer
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
              Pandit
            </button>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
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
              <label className="block text-sm font-semibold mb-2">Password</label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                className="input-field"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={(e) => handleInputChange('rememberMe', e.target.checked)}
                  className="mr-2"
                />
                <span className="text-sm text-text-secondary">Remember me</span>
              </label>

              <Link to="/forgot-password" className="text-sm text-saffron-500 hover:text-saffron-700">
                Forgot password?
              </Link>
            </div>

            <button type="submit" className="btn-primary w-full" disabled={auth.loading}>
              {auth.loading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>

          {auth.error && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700 text-sm">{auth.error}</p>
            </div>
          )}

          {/* Social Login */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-text-secondary">Or continue with</span>
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

          {/* Sign Up Link */}
          <div className="mt-8 text-center">
            <p className="text-text-secondary">
              Don't have an account?{' '}
              <Link to="/signup" className="text-saffron-500 hover:text-saffron-700 font-medium">
                Sign up now
              </Link>
            </p>
          </div>

          {/* Demo Credentials */}
          <div className="mt-6 p-4 bg-saffron-50 rounded-lg">
            <h3 className="font-semibold text-saffron-800 mb-2">Demo Credentials</h3>
            <div className="text-sm text-saffron-700 space-y-1">
              <p><strong>Customer:</strong> customer@example.com / password123</p>
              <p><strong>Pandit:</strong> pandit@example.com / password123</p>
              <p className="text-xs mt-2">Register new accounts to create custom profiles</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}