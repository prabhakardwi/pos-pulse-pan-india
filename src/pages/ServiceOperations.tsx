import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TatPerformanceChart } from "@/components/dashboard/TatPerformanceChart";
import { ServiceTypeSummary } from "@/components/dashboard/ServiceTypeSummary";
import { ServiceEngineerActivity } from "@/components/dashboard/ServiceEngineerActivity";
import { Progress } from "@/components/ui/progress";

const ServiceOperations = () => {
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [selectedTab, setSelectedTab] = useState("installation");
  
  // Mock data for service operations
  const serviceData = {
    installation: {
      completed: 245,
      pending: 28,
      breached: 12,
      tatRate: 95.3,
      avgTime: "1.2 days"
    },
    deinstallation: {
      completed: 182,
      pending: 15,
      breached: 5,
      tatRate: 97.3,
      avgTime: "0.8 days"
    },
    reactivation: {
      completed: 120,
      pending: 22,
      breached: 8,
      tatRate: 93.8,
      avgTime: "1.0 days"
    },
    maintenance: {
      completed: 310,
      pending: 45,
      breached: 18,
      tatRate: 94.5,
      avgTime: "1.5 days"
    }
  };
  
  const currentService = serviceData[selectedTab as keyof typeof serviceData];
  
  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-800 mb-2">Service Operations</h1>
            <p className="text-slate-500">Monitor and manage all POS terminal services</p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center">
            <Select value={selectedRegion} onValueChange={setSelectedRegion}>
              <SelectTrigger className="w-[180px]">
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
            <Button variant="outline" className="ml-2">Export Report</Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className={selectedTab === "installation" ? "ring-2 ring-primary" : ""} 
                onClick={() => setSelectedTab("installation")}>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-800">{serviceData.installation.completed}</div>
                <p className="text-sm text-slate-500">Installations</p>
                <div className="mt-2 text-xs text-slate-500">
                  {serviceData.installation.pending} Pending
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className={selectedTab === "deinstallation" ? "ring-2 ring-primary" : ""}
                onClick={() => setSelectedTab("deinstallation")}>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-800">{serviceData.deinstallation.completed}</div>
                <p className="text-sm text-slate-500">Deinstallations</p>
                <div className="mt-2 text-xs text-slate-500">
                  {serviceData.deinstallation.pending} Pending
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className={selectedTab === "reactivation" ? "ring-2 ring-primary" : ""}
                onClick={() => setSelectedTab("reactivation")}>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-800">{serviceData.reactivation.completed}</div>
                <p className="text-sm text-slate-500">Reactivations</p>
                <div className="mt-2 text-xs text-slate-500">
                  {serviceData.reactivation.pending} Pending
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className={selectedTab === "maintenance" ? "ring-2 ring-primary" : ""}
                onClick={() => setSelectedTab("maintenance")}>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-800">{serviceData.maintenance.completed}</div>
                <p className="text-sm text-slate-500">Maintenance</p>
                <div className="mt-2 text-xs text-slate-500">
                  {serviceData.maintenance.pending} Pending
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>{selectedTab.charAt(0).toUpperCase() + selectedTab.slice(1)} Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="text-sm font-medium text-slate-500 mb-1">TAT Compliance</div>
                  <div className="flex items-end">
                    <span className="text-2xl font-bold mr-2">{currentService.tatRate}%</span>
                    <span className="text-sm text-green-600">Within Target</span>
                  </div>
                  <Progress value={currentService.tatRate} className="h-2 mt-2" />
                </div>
                
                <div>
                  <div className="text-sm font-medium text-slate-500 mb-1">Average Time</div>
                  <div className="text-2xl font-bold">{currentService.avgTime}</div>
                </div>
              </div>
              
              <div className="pt-4">
                <TatPerformanceChart region={selectedRegion} />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Service Overview by Region</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ServiceTypeSummary region={selectedRegion} />
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mb-8">
          <ServiceEngineerActivity region={selectedRegion} />
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Recent Service Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <div className="bg-slate-50 p-3 font-medium">
                <div className="grid grid-cols-5 gap-2">
                  <div>Request ID</div>
                  <div>Type</div>
                  <div>Location</div>
                  <div>Status</div>
                  <div>Date</div>
                </div>
              </div>
              <div className="p-3 border-t">
                <div className="grid grid-cols-5 gap-2">
                  <div>REQ-7825</div>
                  <div>Installation</div>
                  <div>Mumbai, West</div>
                  <div className="text-green-600">Completed</div>
                  <div>May 21, 2025</div>
                </div>
              </div>
              <div className="p-3 border-t">
                <div className="grid grid-cols-5 gap-2">
                  <div>REQ-7824</div>
                  <div>Maintenance</div>
                  <div>Delhi, North</div>
                  <div className="text-green-600">Completed</div>
                  <div>May 21, 2025</div>
                </div>
              </div>
              <div className="p-3 border-t">
                <div className="grid grid-cols-5 gap-2">
                  <div>REQ-7823</div>
                  <div>Deinstallation</div>
                  <div>Chennai, South</div>
                  <div className="text-amber-600">In Progress</div>
                  <div>May 21, 2025</div>
                </div>
              </div>
              <div className="p-3 border-t">
                <div className="grid grid-cols-5 gap-2">
                  <div>REQ-7822</div>
                  <div>Reactivation</div>
                  <div>Kolkata, East</div>
                  <div className="text-amber-600">In Progress</div>
                  <div>May 21, 2025</div>
                </div>
              </div>
              <div className="p-3 border-t">
                <div className="grid grid-cols-5 gap-2">
                  <div>REQ-7821</div>
                  <div>Installation</div>
                  <div>Bangalore, South</div>
                  <div className="text-red-600">Delayed</div>
                  <div>May 20, 2025</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ServiceOperations;
