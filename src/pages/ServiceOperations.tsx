
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Mail, Calendar, MapPin, User, Clock, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import { ServiceTypeSummary } from "@/components/dashboard/ServiceTypeSummary";
import { TatPerformanceChart } from "@/components/dashboard/TatPerformanceChart";
import { ServiceEngineerActivity } from "@/components/dashboard/ServiceEngineerActivity";
import { RegionalServiceMetrics } from "@/components/dashboard/RegionalServiceMetrics";
import { InventoryStatusChart } from "@/components/dashboard/InventoryStatusChart";
import { useNavigate } from 'react-router-dom';

const ServiceOperations = () => {
  const navigate = useNavigate();
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [selectedTab, setSelectedTab] = useState("installation");
  const [selectedSection, setSelectedSection] = useState("service");
  
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
  
  // Mock data for inventory status
  const inventorySummary = {
    fresh: 550,
    repair: 115,
    engineer: 155,
    bad: 51,
    total: 871
  };
  
  const currentService = serviceData[selectedTab as keyof typeof serviceData];
  
  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-slate-800 mb-2">Service Operations</h1>
            <p className="text-slate-500">Monitor and manage POS terminal service operations across regions</p>
          </div>
          <Button 
            onClick={() => navigate('/email-digest')}
            className="bg-purple-600 hover:bg-purple-700"
          >
            <Mail className="mr-2 h-4 w-4" />
            Email Digest
          </Button>
        </div>
        
        <Tabs value={selectedSection} onValueChange={setSelectedSection} className="mb-6">
          <TabsList className="mb-4">
            <TabsTrigger value="service">Service Operations</TabsTrigger>
            <TabsTrigger value="inventory">Inventory Status</TabsTrigger>
            <TabsTrigger value="combined">Combined View</TabsTrigger>
          </TabsList>
          
          <TabsContent value="service">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <Card className={selectedTab === "installation" ? "ring-2 ring-primary cursor-pointer" : "cursor-pointer"} 
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
              
              <Card className={selectedTab === "deinstallation" ? "ring-2 ring-primary cursor-pointer" : "cursor-pointer"}
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
              
              <Card className={selectedTab === "reactivation" ? "ring-2 ring-primary cursor-pointer" : "cursor-pointer"}
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
              
              <Card className={selectedTab === "maintenance" ? "ring-2 ring-primary cursor-pointer" : "cursor-pointer"}
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
                <CardTitle>Regional Performance Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <RegionalServiceMetrics />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="inventory">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-slate-800">{inventorySummary.fresh}</div>
                    <p className="text-sm text-slate-500">Fresh Inventory</p>
                    <Badge className="mt-2 bg-green-500 hover:bg-green-600">Available</Badge>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-slate-800">{inventorySummary.repair}</div>
                    <p className="text-sm text-slate-500">In Repair</p>
                    <Badge className="mt-2 bg-yellow-500 hover:bg-yellow-600">In Process</Badge>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-slate-800">{inventorySummary.engineer}</div>
                    <p className="text-sm text-slate-500">With Engineers</p>
                    <Badge className="mt-2 bg-blue-500 hover:bg-blue-600">Assigned</Badge>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-slate-800">{inventorySummary.bad}</div>
                    <p className="text-sm text-slate-500">Bad Inventory</p>
                    <Badge className="mt-2 bg-red-500 hover:bg-red-600">Issue</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Tabs defaultValue="hub" className="mb-8">
              <TabsList className="mb-4">
                <TabsTrigger value="hub">Hub Inventory</TabsTrigger>
                <TabsTrigger value="repair">Repair Center</TabsTrigger>
                <TabsTrigger value="engineer">Service Engineer</TabsTrigger>
                <TabsTrigger value="bad">Bad Inventory</TabsTrigger>
              </TabsList>
              
              <TabsContent value="hub">
                <Card>
                  <CardHeader>
                    <CardTitle>Hub Inventory Status</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[400px]">
                      <InventoryStatusChart type="hub" region={selectedRegion} />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="repair">
                <Card>
                  <CardHeader>
                    <CardTitle>Repair Center Inventory</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[400px]">
                      <InventoryStatusChart type="repair" region={selectedRegion} />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="engineer">
                <Card>
                  <CardHeader>
                    <CardTitle>Service Engineer Inventory</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[400px]">
                      <InventoryStatusChart type="engineer" region={selectedRegion} />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="bad">
                <Card>
                  <CardHeader>
                    <CardTitle>Bad Inventory Details</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[400px]">
                      <InventoryStatusChart type="bad" region={selectedRegion} />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </TabsContent>
          
          <TabsContent value="combined">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <Card className={selectedTab === "installation" ? "ring-2 ring-primary cursor-pointer" : "cursor-pointer"} 
                    onClick={() => setSelectedTab("installation")}>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-slate-800">{serviceData.installation.completed}</div>
                    <p className="text-sm text-slate-500">Installations</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-slate-800">{inventorySummary.fresh}</div>
                    <p className="text-sm text-slate-500">Fresh Inventory</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-slate-800">{currentService.tatRate}%</div>
                    <p className="text-sm text-slate-500">TAT Compliance</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-slate-800">85</div>
                    <p className="text-sm text-slate-500">Active Engineers</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Regional Service Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[350px]">
                    <RegionalServiceMetrics />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Inventory Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[350px]">
                    <InventoryStatusChart type="hub" region={selectedRegion} />
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <ServiceEngineerActivity region={selectedRegion} />
              
              <Card>
                <CardHeader>
                  <CardTitle>TAT Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <TatPerformanceChart region={selectedRegion} />
                  </div>
                </CardContent>
              </Card>
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
                      <div>May 22, 2025</div>
                    </div>
                  </div>
                  <div className="p-3 border-t">
                    <div className="grid grid-cols-5 gap-2">
                      <div>REQ-7824</div>
                      <div>Maintenance</div>
                      <div>Delhi, North</div>
                      <div className="text-green-600">Completed</div>
                      <div>May 22, 2025</div>
                    </div>
                  </div>
                  <div className="p-3 border-t">
                    <div className="grid grid-cols-5 gap-2">
                      <div>REQ-7823</div>
                      <div>Deinstallation</div>
                      <div>Chennai, South</div>
                      <div className="text-amber-600">In Progress</div>
                      <div>May 22, 2025</div>
                    </div>
                  </div>
                  <div className="p-3 border-t">
                    <div className="grid grid-cols-5 gap-2">
                      <div>REQ-7822</div>
                      <div>Reactivation</div>
                      <div>Kolkata, East</div>
                      <div className="text-amber-600">In Progress</div>
                      <div>May 22, 2025</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ServiceOperations;
