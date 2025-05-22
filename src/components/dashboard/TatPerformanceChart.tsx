
import React from 'react';
import { 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell, 
  Legend, 
  Tooltip 
} from 'recharts';

// Mock data for the TAT performance
const tatPerformanceData = {
  all: [
    { name: 'Within TAT', value: 857 },
    { name: 'Breached TAT', value: 43 },
  ],
  north: [
    { name: 'Within TAT', value: 238 },
    { name: 'Breached TAT', value: 10 },
  ],
  south: [
    { name: 'Within TAT', value: 227 },
    { name: 'Breached TAT', value: 12 },
  ],
  east: [
    { name: 'Within TAT', value: 174 },
    { name: 'Breached TAT', value: 8 },
  ],
  west: [
    { name: 'Within TAT', value: 218 },
    { name: 'Breached TAT', value: 13 },
  ],
};

const COLORS = ['#4ade80', '#f87171'];

interface TatPerformanceChartProps {
  region: string;
}

export const TatPerformanceChart: React.FC<TatPerformanceChartProps> = ({ region }) => {
  const data = tatPerformanceData[region as keyof typeof tatPerformanceData] || tatPerformanceData.all;
  
  const total = data.reduce((acc, item) => acc + item.value, 0);
  const withinTatPercentage = ((data[0].value / total) * 100).toFixed(1);

  return (
    <div>
      <div className="text-center mb-4">
        <div className="text-3xl font-bold text-gray-800">{withinTatPercentage}%</div>
        <div className="text-sm text-gray-500">Within TAT</div>
      </div>
      
      <ResponsiveContainer width="100%" height={220}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
