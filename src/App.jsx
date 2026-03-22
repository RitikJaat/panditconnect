import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import BookPandit from './pages/BookPandit'
import FindPandit from './pages/FindPandit'
import CustomerDashboard from './pages/CustomerDashboard'
import Reviews from './pages/Reviews'
import PanditLanding from './pages/PanditLanding'
import PanditOnboarding from './pages/PanditOnboarding'
import PanditDashboard from './pages/PanditDashboard'
import PanditServices from './pages/PanditServices'
import PanditProfile from './pages/PanditProfile'
import PanditSupport from './pages/PanditSupport'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { AuthProvider } from './context/AuthContext'
import RequireAuth from './components/RequireAuth'

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <Navigation />
        <Routes>
          {/* Customer Portal */}
          <Route path="/" element={<HomePage />} />
          <Route path="/book-pandit" element={<RequireAuth role="customer"><BookPandit /></RequireAuth>} />
          <Route path="/find-pandit" element={<RequireAuth role="customer"><FindPandit /></RequireAuth>} />
          <Route path="/dashboard" element={<RequireAuth role="customer"><CustomerDashboard /></RequireAuth>} />
          <Route path="/reviews" element={<Reviews />} />

          {/* Pandit Portal */}
          <Route path="/pandit-landing" element={<PanditLanding />} />
          <Route path="/pandit-onboarding" element={<PanditOnboarding />} />
          <Route path="/pandit-dashboard" element={<RequireAuth role="pandit"><PanditDashboard /></RequireAuth>} />
          <Route path="/pandit-services" element={<RequireAuth role="pandit"><PanditServices /></RequireAuth>} />
          <Route path="/pandit-profile" element={<RequireAuth role="pandit"><PanditProfile /></RequireAuth>} />
          <Route path="/pandit-support" element={<RequireAuth role="pandit"><PanditSupport /></RequireAuth>} />

          {/* General Pages */}
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </Router>
  )
}
