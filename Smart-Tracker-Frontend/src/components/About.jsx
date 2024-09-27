import React from 'react'
import Layout from './Layout'  // Ensure your Layout component is imported correctly

export default function About() {
  return (
    <>


      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-green-800 mb-6">About ExpenseEra</h1>
        <img
          src="/muhyun.jpg"
          alt="Team working on finances"
          width={600}
          height={300}
          className="rounded-lg mb-6"
        />
        <p className="text-green-700 mb-4">
          ExpenseTracker was founded in 2023 with a simple mission: to help individuals and businesses take control of their finances. Our team of financial experts and software engineers have created a powerful yet easy-to-use platform for tracking expenses, creating budgets, and gaining insights into spending habits.
        </p>
        <p className="text-green-700 mb-4">
          We believe that financial literacy and responsible spending are key to achieving long-term financial goals. That's why we've designed ExpenseTracker to not only track your expenses but also to educate and empower you to make informed financial decisions.
        </p>
        <p className="text-green-700">
          With ExpenseTracker, you can say goodbye to financial stress and hello to a brighter, more secure financial future.
        </p>
      </div>
</>
  )
}
