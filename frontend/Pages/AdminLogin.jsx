import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { api } from '../services/api'
import toast from 'react-hot-toast'

export default function AdminLogin() {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await api.post('/auth/login', formData)
      localStorage.setItem('token', response.access_token)
      toast.success('Login successful!')
      navigate('/admin/dashboard')
    } catch (error) {
      toast.error('Invalid credentials')
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="card p-10 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-between gap-4 mb-6">
            <Link to="/" className="text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors">
              Back to Home
            </Link>
            <span className="text-xs uppercase tracking-[0.2em] text-gray-400">Admin Login</span>
          </div>
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-10 h-10 bg-brand-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <div className="text-left">
              <span className="text-xl font-bold text-gray-900 block leading-tight">Momar Admin</span>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input type="email" placeholder="Email Address" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="input-field" required />
          <input type="password" placeholder="Password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} className="input-field" required />
          <button type="submit" disabled={loading} className="btn-primary w-full">
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  )
}
