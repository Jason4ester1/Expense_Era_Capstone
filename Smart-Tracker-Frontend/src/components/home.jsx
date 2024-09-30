import { Shield } from 'lucide-react';
import { Wallet } from 'lucide-react';
import { Button } from '@nextui-org/react';
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
    <div className="bg-gray-450 min-h-screen p-8">
    <div className="text-center">
    <h1 className="text-4xl font-bold text-black mb-4">Welcome to Expense Era</h1>
    <p className="text-xl text-black mb-8">Take control of your finances with our powerful expense tracking tools.</p>
    <Link to="/signup">
      <Button className="bg-green-600 hover:bg-green-700 text-white">Get Started</Button>
    </Link>
  </div>
  <div className="mt-16 grid md:grid-cols-3 gap-8">
    <div className="bg-green-100 p-6 rounded-lg shadow-md">
      <Shield className="w-12 h-12 text-green-600 mb-4" />                                         
      <h2 className="text-xl font-semibold text-black mb-2">Detailed Reports</h2>
      <p className="text-green-600">Visualize your spending habits with interactive charts and graphs.</p>
    </div>
    <div className="bg-green-100 p-6 rounded-lg shadow-md">
      <Wallet className="w-12 h-12 text-green-600 mb-4" />
      <h2 className="text-xl font-semibold text-black mb-2">Easy Tracking</h2>
      <p className="text-green-600">Quickly add and categorize expenses on-the-go.</p>
    </div>
    <div className="bg-green-100 p-6 rounded-lg shadow-md">
      <Shield className="w-12 h-12 text-green-600 mb-4" />
      <h2 className="text-xl font-semibold text-black mb-2">Secure & Private</h2>
      <p className="text-green-600">Your financial data is encrypted and protected.</p>
    </div>
    </div>
</div>
  </>
  );

}

export default Home;
