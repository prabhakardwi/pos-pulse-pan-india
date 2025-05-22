
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserRoundCheck, UserRoundX } from "lucide-react";

// Mock data for service engineers
const mockEngineerData = {
  total: 85,
  active: 72,
  onLeave: 13,
  regions: {
    north: { active: 18, onLeave: 4 },
    south: { active: 21, onLeave: 3 },
    east: { active: 15, onLeave: 2 },
    west: { active: 18, onLeave: 4 }
  }
};

interface ServiceEngineerActivityProps {
  region?: string;
}

export const ServiceEngineerActivity: React.FC<ServiceEngineerActivityProps> = ({ 
  region = "all" 
}) => {
  // Get appropriate data based on selected region
  const getRegionData = () => {
    if (region === "all") {
      return {
        active: mockEngineerData.active,
        onLeave: mockEngineerData.onLeave
      };
    }
    
    return mockEngineerData.regions[region as keyof typeof mockEngineerData.regions] || { 
      active: 0, 
      onLeave: 0 
    };
  };

  const engineerData = getRegionData();
  const activePercentage = Math.round((engineerData.active / (engineerData.active + engineerData.onLeave)) * 100);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Service Engineer Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center p-4 bg-slate-50 rounded-md">
            <div className="mr-4 bg-green-100 p-3 rounded-full">
              <UserRoundCheck className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <div className="text-sm text-slate-500">Engineers Working</div>
              <div className="text-2xl font-bold">{engineerData.active}</div>
            </div>
          </div>

          <div className="flex items-center p-4 bg-slate-50 rounded-md">
            <div className="mr-4 bg-red-100 p-3 rounded-full">
              <UserRoundX className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <div className="text-sm text-slate-500">Engineers on Leave</div>
              <div className="text-2xl font-bold">{engineerData.onLeave}</div>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t">
          <div className="flex justify-between items-center mb-2">
            <div className="text-sm font-medium">Engineer Availability</div>
            <div className="text-sm font-medium">{activePercentage}%</div>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2.5">
            <div 
              className="bg-green-600 h-2.5 rounded-full" 
              style={{ width: `${activePercentage}%` }}
            ></div>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            {engineerData.active} out of {engineerData.active + engineerData.onLeave} engineers are available today
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
