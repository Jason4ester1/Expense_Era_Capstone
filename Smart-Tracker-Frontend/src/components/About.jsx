import React from 'react'
import Layout from './layout'  // Ensure your Layout component is imported correctly

export default function About() {
  return (
    <>


      <div className="max-w-3xl mx-auto mt-3">
        <h1 className="text-3xl font-bold text-black mb-6 bg-green-100 p-4 rounded-lg shadow-md bg-opacity-80 text-center">About ExpenseEra</h1>
        <img
          src="project pic.jpg"
          alt="Team working on finances"
          width={600}
          height={300}
          className="rounded-lg mb-6 shadow-md mx-auto"
        />
        <p className="text-black mb-4 bg-green-100 p-4 rounded-lg shadow-md bg-opacity-80">
          ExpenseTracker was founded in 2023 with a simple mission: to help individuals and businesses take control of their finances. Our team of financial experts and software engineers have created a powerful yet easy-to-use platform for tracking expenses, creating budgets, and gaining insights into spending habits.
        </p>
          <p className="text-black mb-4 bg-green-100 p-4 rounded-lg shadow-md bg-opacity-80">
          We believe that financial literacy and responsible spending are key to achieving long-term financial goals. That's why we've designed ExpenseTracker to not only track your expenses but also to educate and empower you to make informed financial decisions.
        </p>
        <p className="text-black bg-green-100 p-4 rounded-lg shadow-md bg-opacity-80 ">
          With ExpenseTracker, you can say goodbye to financial stress and hello to a brighter, more secure financial future.
        </p>
      </div>
</>
  )
}
