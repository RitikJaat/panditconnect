import { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext(null)

const AUTH_KEY = 'panditconnect_auth'

const loadAuthFromStorage = () => {
  try {
    const data = localStorage.getItem(AUTH_KEY)
    if (!data) return { isAuthenticated: false, userType: null, email: null }
    return JSON.parse(data)
  } catch (e) {
    console.error('Failed to load auth from localStorage', e)
    return { isAuthenticated: false, userType: null, email: null }
  }
}

const saveAuthToStorage = (auth) => {
  try {
    localStorage.setItem(AUTH_KEY, JSON.stringify(auth))
  } catch (e) {
    console.error('Failed to save auth to localStorage', e)
  }
}

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(() => loadAuthFromStorage())

  useEffect(() => {
    saveAuthToStorage(auth)
  }, [auth])

  const login = ({ userType, email }) => {
    setAuth({ isAuthenticated: true, userType, email })
  }

  const logout = () => {
    setAuth({ isAuthenticated: false, userType: null, email: null })
  }

  const register = ({ userType, email }) => {
    setAuth({ isAuthenticated: true, userType, email })
  }

  return (
    <AuthContext.Provider value={{ ...auth, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  )
}
