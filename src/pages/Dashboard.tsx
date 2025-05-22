
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RegionalServiceMetrics } from "@/components/dashboard/RegionalServiceMetrics";
import { InventoryStatusChart } from "@/components/dashboard/InventoryStatusChart";
import { TatPerformanceChart } from "@/components/dashboard/TatPerformanceChart";
import { ServiceTypeSummary } from "@/components/dashboard/ServiceTypeSummary";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";

const Dashboard = () => {
  const [selectedRegion, setSelectedRegion] = useState("all");
  
  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <DashboardHeader selectedRegion={selectedRegion} onRegionChange={setSelectedRegion} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <Card className="p-4">
            <h2 className="text-lg font-semibold mb-4">Service Operations by Type</h2>
            <ServiceTypeSummary region={selectedRegion} />
          </Card>
          
          <Card className="p-4">
            <h2 className="text-lg font-semibold mb-4">TAT Performance</h2>
            <TatPerformanceChart region={selectedRegion} />
          </Card>
        </div>
        
        <div className="mt-8">
          <Card className="p-4">
            <h2 className="text-lg font-semibold mb-4">Regional Service Metrics</h2>
            <RegionalServiceMetrics />
          </Card>
        </div>
        
        <div className="mt-8">
          <Card className="p-4">
            <Tabs defaultValue="hub">
              <h2 className="text-lg font-semibold mb-4">Inventory Health</h2>
              <TabsList className="mb-4">
                <TabsTrigger value="hub">Hub</TabsTrigger>
                <TabsTrigger value="repair">Repair Center</TabsTrigger>
                <TabsTrigger value="engineer">Service Engineer</TabsTrigger>
                <TabsTrigger value="bad">Bad Inventory</TabsTrigger>
              </TabsList>
              <TabsContent value="hub">
                <InventoryStatusChart type="hub" region={selectedRegion} />
              </TabsContent>
              <TabsContent value="repair">
                <InventoryStatusChart type="repair" region={selectedRegion} />
              </TabsContent>
              <TabsContent value="engineer">
                <InventoryStatusChart type="engineer" region={selectedRegion} />
              </TabsContent>
              <TabsContent value="bad">
                <InventoryStatusChart type="bad" region={selectedRegion} />
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
