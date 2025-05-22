
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TatPerformanceChart } from "@/components/dashboard/TatPerformanceChart";
import { 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Legend,
  CartesianGrid,
  BarChart,
  Bar
} from 'recharts';

// Mock data for TAT trend
const tatTrendData = [
  { date: 'May 15', installation: 96, deinstallation: 98, reactivation: 94, maintenance: 95 },
  { date: 'May 16', installation: 95, deinstallation: 97, reactivation: 93, maintenance: 94 },
  { date: 'May 17', installation: 97, deinstallation: 99, reactivation: 95, maintenance: 96 },
  { date: 'May 18', installation: 94, deinstallation: 98, reactivation: 92, maintenance: 93 },
  { date: 'May 19', installation: 96, deinstallation: 97, reactivation: 94, maintenance: 95 },
  { date: 'May 20', installation: 95, deinstallation: 98, reactivation: 93, maintenance: 94 },
  { date: 'May 21', installation: 97, deinstallation: 99, reactivation: 95, maintenance: 96 },
];

// Mock data for breached TAT by region
const breachedTatData = [
  { region: 'North', installation: 3, deinstallation: 1, reactivation: 2, maintenance: 4 },
  { region: 'South', installation: 4, deinstallation: 1, reactivation: 2, maintenance: 5 },
  { region: 'East', installation: 2, deinstallation: 1, reactivation: 2, maintenance: 3 },
  { region: 'West', installation: 3, deinstallation: 2, reactivation: 2, maintenance: 6 },
];

const TatAnalytics = () => {
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [selectedTimeframe, setSelectedTimeframe] = useState("week");
  
  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-800 mb-2">TAT Analytics</h1>
            <p className="text-slate-500">Analyze turnaround time performance across services</p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center space-x-2">
            <Select value={selectedRegion} onValueChange={setSelectedRegion}>
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Select region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Regions</SelectItem>
                <SelectItem value="north">North</SelectItem>
                <SelectItem value="south">South</SelectItem>
                <SelectItem value="east">East</SelectItem>
                <SelectItem value="west">West</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={selectedTimeframe} onValueChange={setSelectedTimeframe}>
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Select timeframe" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="week">Last Week</SelectItem>
                <SelectItem value="month">Last Month</SelectItem>
                <SelectItem value="quarter">Last Quarter</SelectItem>
              </SelectContent>
            </Select>
            
            <Button variant="outline">Export Report</Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-800">95.3%</div>
                <p className="text-sm text-slate-500">Installation TAT</p>
                <div className="w-full bg-slate-200 h-2 mt-2 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: '95.3%' }} />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-800">97.3%</div>
                <p className="text-sm text-slate-500">Deinstallation TAT</p>
                <div className="w-full bg-slate-200 h-2 mt-2 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: '97.3%' }} />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-800">93.8%</div>
                <p className="text-sm text-slate-500">Reactivation TAT</p>
                <div className="w-full bg-slate-200 h-2 mt-2 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: '93.8%' }} />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-800">94.5%</div>
                <p className="text-sm text-slate-500">Maintenance TAT</p>
                <div className="w-full bg-slate-200 h-2 mt-2 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: '94.5%' }} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Overall TAT Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <TatPerformanceChart region={selectedRegion} />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>TAT Trend (Last 7 Days)</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart
                  data={tatTrendData}
                  margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis domain={[90, 100]} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="installation" stroke="#4ade80" name="Installation" />
                  <Line type="monotone" dataKey="deinstallation" stroke="#0ea5e9" name="Deinstallation" />
                  <Line type="monotone" dataKey="reactivation" stroke="#a78bfa" name="Reactivation" />
                  <Line type="monotone" dataKey="maintenance" stroke="#f59e0b" name="Maintenance" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Breached TAT Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart
                data={breachedTatData}
                margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="region" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="installation" fill="#4ade80" name="Installation" />
                <Bar dataKey="deinstallation" fill="#0ea5e9" name="Deinstallation" />
                <Bar dataKey="reactivation" fill="#a78bfa" name="Reactivation" />
                <Bar dataKey="maintenance" fill="#f59e0b" name="Maintenance" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Common Breach Reasons</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <div className="bg-slate-50 p-3 font-medium">
                <div className="grid grid-cols-3 gap-2">
                  <div>Reason</div>
                  <div>Count</div>
                  <div>% of Total Breaches</div>
                </div>
              </div>
              <div className="p-3 border-t">
                <div className="grid grid-cols-3 gap-2">
                  <div>Engineer Availability</div>
                  <div>18</div>
                  <div>41.9%</div>
                </div>
              </div>
              <div className="p-3 border-t">
                <div className="grid grid-cols-3 gap-2">
                  <div>Parts Unavailability</div>
                  <div>10</div>
                  <div>23.3%</div>
                </div>
              </div>
              <div className="p-3 border-t">
                <div className="grid grid-cols-3 gap-2">
                  <div>Customer Location Access</div>
                  <div>8</div>
                  <div>18.6%</div>
                </div>
              </div>
              <div className="p-3 border-t">
                <div className="grid grid-cols-3 gap-2">
                  <div>Transportation Issues</div>
                  <div>5</div>
                  <div>11.6%</div>
                </div>
              </div>
              <div className="p-3 border-t">
                <div className="grid grid-cols-3 gap-2">
                  <div>Other Reasons</div>
                  <div>2</div>
                  <div>4.7%</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TatAnalytics;
