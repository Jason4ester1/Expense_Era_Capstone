import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Lock, Eye, EyeOff } from 'lucide-react'
import { Button as NextUIButton } from '@nextui-org/react'

const Input = ({ icon: Icon, ...props }) => (
  <div className="relative">
    <input
      {...props}
      className="w-full px-3 py-2 pl-10 text-green-900 bg-white border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
    />
    <Icon className="absolute top-1/2 left-3 transform -translate-y-1/2 text-green-500" size={18} />
  </div>
)

// Rename your custom Button component to avoid conflict
const CustomButton = ({ children, className, ...props }) => (
  <NextUIButton
    className={`w-full px-4 py-2 text-black bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${className}`}
    {...props}
  >
    {children}
  </NextUIButton>
)

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle login logic here
    console.log('Login attempt with:', { email, password })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-green-900">Sign in to your account</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="mb-4">
              <label htmlFor="email-address" className="block text-sm font-medium text-green-700 mb-1">
                Email address
              </label>
              <Input
                icon={Mail}
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-green-700 mb-1">
                Password
              </label>
              <div className="relative">
                <Input
                  icon={Lock}
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-green-500 hover:text-green-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-green-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-green-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-green-600 hover:text-green-500">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <CustomButton type="submit">Sign in</CustomButton>
          </div>
        </form>
        <div className="text-center">
          <p className="mt-2 text-sm text-green-600">
            Don't have an account?{' '}
            <Link to="/signup" className="font-medium text-green-600 hover:text-green-500">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}