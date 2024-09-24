import React from 'react'
import Layout from './Layout' // Ensure Layout is correctly imported
import { CheckCircle } from 'lucide-react'

export default function Services() {
  const services = [
    "Expense Tracking",
    "Budget Creation",
    "Financial Reports",
    "Bill Reminders",
    "Multi-Currency Support",
    "Bank Synchronization",
    "Receipt Scanning",
    "Customizable Categories",
    "Goal Setting",
    "Collaborative Expense Sharing"
  ]

  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-green-800 mb-6">Our Services</h1>
        <p className="text-green-700 mb-8">
          ExpenseTracker offers a comprehensive suite of financial management tools to help you stay on top of your expenses and achieve your financial goals.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-md">
              <CheckCircle className="text-green-600 mr-2" />
              <span className="text-green-800">{service}</span>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
