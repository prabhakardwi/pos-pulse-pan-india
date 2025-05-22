
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { InventoryStatusChart } from "@/components/dashboard/InventoryStatusChart";
import { Badge } from "@/components/ui/badge";

const InventoryHealth = () => {
  const [selectedRegion, setSelectedRegion] = useState("all");
  
  const inventorySummary = {
    fresh: 550,
    repair: 115,
    engineer: 155,
    bad: 51,
    total: 871
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-800 mb-2">Inventory Health</h1>
            <p className="text-slate-500">Comprehensive view of POS terminal inventory across locations</p>
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
        
        <Card>
          <CardHeader>
            <CardTitle>Inventory Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="flex items-center justify-center">
                Request New Inventory
              </Button>
              <Button variant="outline" className="flex items-center justify-center">
                Transfer Between Hubs
              </Button>
              <Button variant="outline" className="flex items-center justify-center">
                Schedule Repair Pickup
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InventoryHealth;
