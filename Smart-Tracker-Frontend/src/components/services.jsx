import React from 'react'
import Layout from './layout' // Ensure Layout is correctly imported
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
<>
      <div className="max-w-3xl mx-auto mt-3">
        <h1 className="text-3xl font-bold text-black mb-6 bg-green-100 p-4 rounded-lg shadow-md bg-opacity-80 text-center">Our Services</h1>
        <p className="text-black mb-8 bg-green-100 p-4 rounded-lg shadow-md bg-opacity-80 text-center">
          ExpenseTracker offers a comprehensive suite of financial management tools to help you stay on top of your expenses and achieve your financial goals.
        </p>
        <div className="grid md:grid-cols-2 gap-4  ">
          {services.map((service, index) => (
            <div key={index} className="flex items-center bg-green-100 p-4 rounded-lg shadow-md bg-opacity-85">
              <CheckCircle className="text-green-600 mr-2" />
              <span className="text-black">{service}</span>
            </div>
          ))}
        </div>
      </div>
</>

  )
}
