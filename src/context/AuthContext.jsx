import { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext(null)

const TOKEN_KEY = 'panditconnect_token'
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

const loadAuthFromStorage = () => {
  try {
    const token = localStorage.getItem(TOKEN_KEY)
    if (!token) return { isAuthenticated: false, token: null, user: null }
    
    // Decode JWT to get user info (without verification - just for client-side)
    const payload = JSON.parse(atob(token.split('.')[1]))
    return { isAuthenticated: true, token, user: { id: payload.id, userType: payload.userType } }
  } catch (e) {
    console.error('Failed to load auth from storage', e)
    localStorage.removeItem(TOKEN_KEY)
    return { isAuthenticated: false, token: null, user: null }
  }
}

const saveTokenToStorage = (token) => {
  try {
    if (token) {
      localStorage.setItem(TOKEN_KEY, token)
    } else {
      localStorage.removeItem(TOKEN_KEY)
    }
  } catch (e) {
    console.error('Failed to save token to storage', e)
  }
}

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(() => loadAuthFromStorage())
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    saveTokenToStorage(auth.token)
  }, [auth.token])

  const login = async ({ email, password, userType }) => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, userType })
      })

      if (!response.ok) {
        const err = await response.json()
        throw new Error(err.message || 'Login failed')
      }

      const data = await response.json()
      const payload = JSON.parse(atob(data.token.split('.')[1]))
      
      setAuth({
        isAuthenticated: true,
        token: data.token,
        user: { id: payload.id, userType: payload.userType, email }
      })
      return { success: true }
    } catch (err) {
      const errorMsg = err.message || 'Login failed'
      setError(errorMsg)
      return { success: false, error: errorMsg }
    } finally {
      setLoading(false)
    }
  }

  const register = async ({ email, password, firstName, lastName, userType, phone }) => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, firstName, lastName, userType, phone })
      })

      if (!response.ok) {
        const err = await response.json()
        throw new Error(err.message || 'Registration failed')
      }

      const data = await response.json()
      const payload = JSON.parse(atob(data.token.split('.')[1]))
      
      setAuth({
        isAuthenticated: true,
        token: data.token,
        user: { id: payload.id, userType: payload.userType, email }
      })
      return { success: true }
    } catch (err) {
      const errorMsg = err.message || 'Registration failed'
      setError(errorMsg)
      return { success: false, error: errorMsg }
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    setAuth({ isAuthenticated: false, token: null, user: null })
    setError(null)
  }

  const clearError = () => setError(null)

  return (
    <AuthContext.Provider value={{ 
      ...auth, 
      login, 
      register, 
      logout, 
      loading, 
      error, 
      clearError,
      apiUrl: API_URL 
    }}>
      {children}
    </AuthContext.Provider>
  )
}
