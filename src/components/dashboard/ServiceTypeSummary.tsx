
import React from 'react';
import { Bar } from 'recharts';
import { Card } from '@/components/ui/card';
import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from 'recharts';

// Mock data for the service types
const serviceData = {
  all: [
    { name: 'Installation', completed: 245, pending: 28, breached: 12 },
    { name: 'Deinstallation', completed: 182, pending: 15, breached: 5 },
    { name: 'Reactivation', completed: 120, pending: 22, breached: 8 },
    { name: 'Maintenance', completed: 310, pending: 45, breached: 18 },
  ],
  north: [
    { name: 'Installation', completed: 68, pending: 8, breached: 3 },
    { name: 'Deinstallation', completed: 52, pending: 4, breached: 1 },
    { name: 'Reactivation', completed: 33, pending: 7, breached: 2 },
    { name: 'Maintenance', completed: 85, pending: 12, breached: 4 },
  ],
  south: [
    { name: 'Installation', completed: 72, pending: 10, breached: 4 },
    { name: 'Deinstallation', completed: 48, pending: 3, breached: 1 },
    { name: 'Reactivation', completed: 28, pending: 5, breached: 2 },
    { name: 'Maintenance', completed: 79, pending: 10, breached: 5 },
  ],
  east: [
    { name: 'Installation', completed: 45, pending: 5, breached: 2 },
    { name: 'Deinstallation', completed: 38, pending: 4, breached: 1 },
    { name: 'Reactivation', completed: 26, pending: 4, breached: 2 },
    { name: 'Maintenance', completed: 65, pending: 8, breached: 3 },
  ],
  west: [
    { name: 'Installation', completed: 60, pending: 5, breached: 3 },
    { name: 'Deinstallation', completed: 44, pending: 4, breached: 2 },
    { name: 'Reactivation', completed: 33, pending: 6, breached: 2 },
    { name: 'Maintenance', completed: 81, pending: 15, breached: 6 },
  ],
};

interface ServiceTypeSummaryProps {
  region: string;
}

export const ServiceTypeSummary: React.FC<ServiceTypeSummaryProps> = ({ region }) => {
  const data = serviceData[region as keyof typeof serviceData] || serviceData.all;

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="completed" fill="#4ade80" name="Completed" />
        <Bar dataKey="pending" fill="#facc15" name="Pending" />
        <Bar dataKey="breached" fill="#f87171" name="TAT Breached" />
      </BarChart>
    </ResponsiveContainer>
  );
};
