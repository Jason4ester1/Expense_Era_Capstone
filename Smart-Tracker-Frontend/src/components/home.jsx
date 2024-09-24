import React from 'react'
// import Layout from './Layout'  // Ensure Layout is imported correctly
// import { Button } from '@/components/ui/button'  // Ensure this path is correct for your environment
import { BarChart, Wallet, Shield } from 'lucide-react'

export default function Home() {
  return (
    <Layout>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-green-800 mb-4">Welcome to ExpenseTracker</h1>
        <p className="text-xl text-green-600 mb-8">Take control of your finances with our powerful expense tracking tools.</p>
        <Button className="bg-green-600 hover:bg-green-700 text-white">Get Started</Button>  {/* Ensure your Button component works in React */}
      </div>
      <div className="mt-16 grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <BarChart className="w-12 h-12 text-green-600 mb-4" />
          <h2 className="text-xl font-semibold text-green-800 mb-2">Detailed Reports</h2>
          <p className="text-green-600">Visualize your spending habits with interactive charts and graphs.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Wallet className="w-12 h-12 text-green-600 mb-4" />
          <h2 className="text-xl font-semibold text-green-800 mb-2">Easy Tracking</h2>
          <p className="text-green-600">Quickly add and categorize expenses on-the-go.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Shield className="w-12 h-12 text-green-600 mb-4" />
          <h2 className="text-xl font-semibold text-green-800 mb-2">Secure & Private</h2>
          <p className="text-green-600">Your financial data is encrypted and protected.</p>
        </div>
      </div>
    </Layout>
  )
}
