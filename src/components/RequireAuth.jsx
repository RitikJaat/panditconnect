import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export default function RequireAuth({ children, role }) {
  const auth = useContext(AuthContext)
  const location = useLocation()

  if (!auth || !auth.isAuthenticated) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />
  }

  if (role && auth.userType !== role) {
    const redirectTo = auth.userType === 'pandit' ? '/pandit-dashboard' : '/dashboard'
    return <Navigate to={redirectTo} replace />
  }

  return children
}
