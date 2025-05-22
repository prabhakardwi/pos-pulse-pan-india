
import React from 'react';
import { 
  ResponsiveContainer, 
  ComposedChart, 
  Line, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Legend, 
  CartesianGrid 
} from 'recharts';

// Mock data for regional metrics
const data = [
  {
    region: 'North',
    completed: 238,
    pending: 31,
    tatRate: 96,
  },
  {
    region: 'South',
    completed: 227,
    pending: 28,
    tatRate: 95,
  },
  {
    region: 'East',
    completed: 174,
    pending: 21,
    tatRate: 96,
  },
  {
    region: 'West',
    completed: 218,
    pending: 33,
    tatRate: 94,
  },
];

export const RegionalServiceMetrics: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart
        data={data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="region" scale="band" />
        <YAxis yAxisId="left" />
        <YAxis yAxisId="right" orientation="right" domain={[80, 100]} />
        <Tooltip />
        <Legend />
        <Bar yAxisId="left" dataKey="completed" name="Completed Tasks" barSize={30} fill="#4ade80" />
        <Bar yAxisId="left" dataKey="pending" name="Pending Tasks" barSize={30} fill="#facc15" />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="tatRate"
          name="TAT Compliance Rate (%)"
          stroke="#0ea5e9"
          strokeWidth={2}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
};
