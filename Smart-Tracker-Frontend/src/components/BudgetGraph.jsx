import Layout from "./layout";
import React, { useState } from "react";
import { Button as NextUIButton } from "@nextui-org/react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const dataSet = [
  // { month: "Jan", income: 4000, expenses: 2400 },
  // { month: "Feb", income: 3000, expenses: 1398 },
  // { month: "Mar", income: 2000, expenses: 9800 },
  // { month: "Apr", income: 2780, expenses: 3908 },
  // { month: "May", income: 1890, expenses: 4800 },
  // { month: "Jun", income: 2390, expenses: 3800 },
  // { month: "Jul", income: 3490, expenses: 4300 },
  // { month: "Aug", income: 4000, expenses: 2400 },
  // { month: "Sep", income: 3000, expenses: 1398 },
  // { month: "Oct", income: 2000, expenses: 9800 },
  // { month: "Nov", income: 2780, expenses: 3908 },
  // { month: "Dec", income: 1890, expenses: 4800 },
];

const BudgetGraph = () => {
  const [data, setData] = useState(dataSet);
  const [form, setForm] = useState({ month: "", income: "", expenses: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      month: form.month,
      income: parseFloat(form.income),
      expenses: parseFloat(form.expenses),
    };
    setData([...data, newData]);
    setForm({ month: "", income: "", expenses: "" });
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-black mb-6 bg-green-100 p-4 rounded-lg shadow-md bg-opacity-80 text-center ">Monthly Tracking</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="month"
          value={form.month}
          onChange={handleChange}
          placeholder="Month"
          required
          className="bg-white text-black border-2 border-black rounded-md p-2"
        />
        <input
          type="number"
          name="income"
          value={form.income}
          onChange={handleChange}
          placeholder="Income"
          required
          className="bg-white text-black border-2 border-black rounded-md p-2"
        />
        <input
          type="number"
          name="expenses"
          value={form.expenses}
          onChange={handleChange}
          placeholder="Expenses"
          required
          className="bg-white text-black border-2 border-black rounded-md p-2"
        />
        <button  className="bg-green-400 text-black border-2 border-black rounded-md p-2" type="submit">Add Data</button>
      </form>
      
      <div style={{ backgroundColor: '#8AFF8A', padding: '20px', borderRadius: '10px',opacity:0.8 }}>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="black" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="income"
              stroke="white"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="expenses" stroke="black" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BudgetGraph;
