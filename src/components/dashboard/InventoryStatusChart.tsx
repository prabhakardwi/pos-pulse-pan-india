
import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

// Mock data for inventory by type and region
const inventoryData = {
  hub: {
    all: [
      { name: 'Delhi Hub', fresh: 120, reserved: 45, total: 165 },
      { name: 'Mumbai Hub', fresh: 140, reserved: 30, total: 170 },
      { name: 'Chennai Hub', fresh: 95, reserved: 25, total: 120 },
      { name: 'Kolkata Hub', fresh: 85, reserved: 35, total: 120 },
      { name: 'Bangalore Hub', fresh: 110, reserved: 40, total: 150 },
    ],
    north: [
      { name: 'Delhi Hub', fresh: 120, reserved: 45, total: 165 },
      { name: 'Chandigarh Hub', fresh: 65, reserved: 20, total: 85 },
    ],
    south: [
      { name: 'Chennai Hub', fresh: 95, reserved: 25, total: 120 },
      { name: 'Bangalore Hub', fresh: 110, reserved: 40, total: 150 },
    ],
    east: [
      { name: 'Kolkata Hub', fresh: 85, reserved: 35, total: 120 },
      { name: 'Guwahati Hub', fresh: 50, reserved: 15, total: 65 },
    ],
    west: [
      { name: 'Mumbai Hub', fresh: 140, reserved: 30, total: 170 },
      { name: 'Ahmedabad Hub', fresh: 75, reserved: 25, total: 100 },
    ],
  },
  repair: {
    all: [
      { name: 'North Repair', inRepair: 35, waitingParts: 12, completed: 28 },
      { name: 'South Repair', inRepair: 28, waitingParts: 8, completed: 32 },
      { name: 'East Repair', inRepair: 22, waitingParts: 10, completed: 18 },
      { name: 'West Repair', inRepair: 30, waitingParts: 15, completed: 25 },
    ],
    north: [{ name: 'North Repair', inRepair: 35, waitingParts: 12, completed: 28 }],
    south: [{ name: 'South Repair', inRepair: 28, waitingParts: 8, completed: 32 }],
    east: [{ name: 'East Repair', inRepair: 22, waitingParts: 10, completed: 18 }],
    west: [{ name: 'West Repair', inRepair: 30, waitingParts: 15, completed: 25 }],
  },
  engineer: {
    all: [
      { name: 'North Region', assigned: 45, inTransit: 18 },
      { name: 'South Region', assigned: 38, inTransit: 15 },
      { name: 'East Region', assigned: 30, inTransit: 12 },
      { name: 'West Region', assigned: 42, inTransit: 20 },
    ],
    north: [{ name: 'North Region', assigned: 45, inTransit: 18 }],
    south: [{ name: 'South Region', assigned: 38, inTransit: 15 }],
    east: [{ name: 'East Region', assigned: 30, inTransit: 12 }],
    west: [{ name: 'West Region', assigned: 42, inTransit: 20 }],
  },
  bad: {
    all: [
      { name: 'North Region', unrepairable: 15, pending: 8, returned: 12 },
      { name: 'South Region', unrepairable: 12, pending: 6, returned: 10 },
      { name: 'East Region', unrepairable: 10, pending: 5, returned: 8 },
      { name: 'West Region', unrepairable: 14, pending: 7, returned: 11 },
    ],
    north: [{ name: 'North Region', unrepairable: 15, pending: 8, returned: 12 }],
    south: [{ name: 'South Region', unrepairable: 12, pending: 6, returned: 10 }],
    east: [{ name: 'East Region', unrepairable: 10, pending: 5, returned: 8 }],
    west: [{ name: 'West Region', unrepairable: 14, pending: 7, returned: 11 }],
  },
};

interface InventoryStatusChartProps {
  type: 'hub' | 'repair' | 'engineer' | 'bad';
  region: string;
}

export const InventoryStatusChart: React.FC<InventoryStatusChartProps> = ({ type, region }) => {
  const data = inventoryData[type][region as keyof typeof inventoryData[typeof type]] || inventoryData[type].all;
  
  // Define colors and keys based on inventory type
  const getChartConfig = () => {
    switch (type) {
      case 'hub':
        return {
          bars: [
            { key: 'fresh', color: '#4ade80', name: 'Fresh Inventory' },
            { key: 'reserved', color: '#facc15', name: 'Reserved' },
          ],
        };
      case 'repair':
        return {
          bars: [
            { key: 'inRepair', color: '#f59e0b', name: 'In Repair' },
            { key: 'waitingParts', color: '#fb7185', name: 'Waiting for Parts' },
            { key: 'completed', color: '#4ade80', name: 'Repair Completed' },
          ],
        };
      case 'engineer':
        return {
          bars: [
            { key: 'assigned', color: '#2dd4bf', name: 'Assigned to Engineers' },
            { key: 'inTransit', color: '#a78bfa', name: 'In Transit' },
          ],
        };
      case 'bad':
        return {
          bars: [
            { key: 'unrepairable', color: '#ef4444', name: 'Unrepairable' },
            { key: 'pending', color: '#fb923c', name: 'Pending Assessment' },
            { key: 'returned', color: '#84cc16', name: 'Returned to Vendor' },
          ],
        };
      default:
        return { bars: [] };
    }
  };

  const config = getChartConfig();

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
        {config.bars.map((bar) => (
          <Bar 
            key={bar.key} 
            dataKey={bar.key} 
            fill={bar.color} 
            name={bar.name} 
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
};
