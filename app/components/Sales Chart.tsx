"use client"

import { Bar, BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { month: "Jan", target: 3800000, actual: 2800000 },
  { month: "Feb", target: 3000000, actual: 3500000 },
  { month: "Mar", target: 4800000, actual: 4700000 },
  { month: "Apr", target: 3500000, actual: 4500000 },
  { month: "May", target: 4800000, actual: 3200000 },
  { month: "Jun", target: 4000000, actual: 3500000 },
  { month: "Jul", target: 4500000, actual: 3800000 },
  { month: "Aug", target: 3200000, actual: 4200000 },
  { month: "Sep", target: 3500000, actual: 4700000 },
  { month: "Oct", target: 4800000, actual: 3800000 },
  { month: "Nov", target: 4500000, actual: 4800000 },
  { month: "Dec", target: 4500000, actual: 4000000 },
]

export default function SalesChart() {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip formatter={(value: number) => `¥${(value).toLocaleString()}`} />
        <Legend />
        <Bar name="目標売上" dataKey="target" fill="#0ea5e9" />
        <Bar name="達成売上" dataKey="actual" fill="#7dd3fc" />
      </BarChart>
    </ResponsiveContainer>
  )
}

