
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const EmailDigest = () => {
  const { toast } = useToast();
  const [frequency, setFrequency] = useState("daily");
  const [recipients, setRecipients] = useState("example@company.com, manager@company.com");
  
  const [selectedMetrics, setSelectedMetrics] = useState<string[]>([
    "service-summary", 
    "tat-performance", 
    "inventory-health", 
    "regional-metrics"
  ]);

  const handleMetricToggle = (metric: string) => {
    if (selectedMetrics.includes(metric)) {
      setSelectedMetrics(selectedMetrics.filter(m => m !== metric));
    } else {
      setSelectedMetrics([...selectedMetrics, metric]);
    }
  };

  const handleSendNow = () => {
    toast({
      title: "Digest Email Sent",
      description: `Email sent to ${recipients.split(",").length} recipients`,
    });
  };

  const handleSaveSettings = () => {
    toast({
      title: "Settings Saved",
      description: `Your ${frequency} digest settings have been saved`,
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-slate-800 mb-2">Email Digest Management</h1>
        <p className="text-slate-500 mb-6">Configure and send interactive email reports for POS operations</p>
        
        <Tabs defaultValue="configure">
          <TabsList className="mb-6">
            <TabsTrigger value="configure">Configure Digest</TabsTrigger>
            <TabsTrigger value="preview">Preview Digest</TabsTrigger>
            <TabsTrigger value="history">Send History</TabsTrigger>
          </TabsList>
          
          <TabsContent value="configure">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Delivery Settings</CardTitle>
                  <CardDescription>Configure when and who receives the digest</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="frequency">Frequency</Label>
                    <Select value={frequency} onValueChange={setFrequency}>
                      <SelectTrigger id="frequency">
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="recipients">Recipients</Label>
                    <Input 
                      id="recipients" 
                      value={recipients} 
                      onChange={e => setRecipients(e.target.value)} 
                      placeholder="email1@company.com, email2@company.com"
                    />
                    <p className="text-xs text-slate-500">Comma separated email addresses</p>
                  </div>
                  
                  <Button onClick={handleSaveSettings} className="w-full">Save Settings</Button>
                  <Button onClick={handleSendNow} variant="outline" className="w-full">Send Now</Button>
                </CardContent>
              </Card>
              
              <Card className="col-span-1 md:col-span-2">
                <CardHeader>
                  <CardTitle>Content Selection</CardTitle>
                  <CardDescription>Select metrics and data to include in the digest</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-2">
                      <Checkbox 
                        id="service-summary" 
                        checked={selectedMetrics.includes("service-summary")}
                        onCheckedChange={() => handleMetricToggle("service-summary")}
                      />
                      <div className="space-y-1">
                        <Label htmlFor="service-summary" className="font-medium">
                          Service Operations Summary
                        </Label>
                        <p className="text-sm text-slate-500">
                          Overview of installations, deinstallations, etc.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <Checkbox 
                        id="tat-performance" 
                        checked={selectedMetrics.includes("tat-performance")}
                        onCheckedChange={() => handleMetricToggle("tat-performance")}
                      />
                      <div className="space-y-1">
                        <Label htmlFor="tat-performance" className="font-medium">
                          TAT Performance Metrics
                        </Label>
                        <p className="text-sm text-slate-500">
                          Breached vs met turnaround time metrics
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <Checkbox 
                        id="inventory-health" 
                        checked={selectedMetrics.includes("inventory-health")}
                        onCheckedChange={() => handleMetricToggle("inventory-health")}
                      />
                      <div className="space-y-1">
                        <Label htmlFor="inventory-health" className="font-medium">
                          Inventory Health
                        </Label>
                        <p className="text-sm text-slate-500">
                          Status of inventory across all locations
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <Checkbox 
                        id="regional-metrics" 
                        checked={selectedMetrics.includes("regional-metrics")}
                        onCheckedChange={() => handleMetricToggle("regional-metrics")}
                      />
                      <div className="space-y-1">
                        <Label htmlFor="regional-metrics" className="font-medium">
                          Regional Performance
                        </Label>
                        <p className="text-sm text-slate-500">
                          Breakdown by East, West, North and South regions
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <Checkbox 
                        id="task-alerts" 
                        checked={selectedMetrics.includes("task-alerts")}
                        onCheckedChange={() => handleMetricToggle("task-alerts")}
                      />
                      <div className="space-y-1">
                        <Label htmlFor="task-alerts" className="font-medium">
                          Critical Alerts
                        </Label>
                        <p className="text-sm text-slate-500">
                          High priority issues requiring attention
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <Checkbox 
                        id="upcoming-tasks" 
                        checked={selectedMetrics.includes("upcoming-tasks")}
                        onCheckedChange={() => handleMetricToggle("upcoming-tasks")}
                      />
                      <div className="space-y-1">
                        <Label htmlFor="upcoming-tasks" className="font-medium">
                          Upcoming Service Tasks
                        </Label>
                        <p className="text-sm text-slate-500">
                          Preview of upcoming scheduled operations
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="preview">
            <Card>
              <CardHeader>
                <CardTitle>Digest Preview</CardTitle>
                <CardDescription>Preview how your email digest will appear to recipients</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border rounded-md p-4 bg-white">
                  <div className="border-b pb-4 mb-4">
                    <h2 className="text-xl font-bold mb-1">POS Operations Digest - {new Date().toLocaleDateString()}</h2>
                    <p className="text-slate-500">Daily summary of POS Terminal operations across India</p>
                  </div>
                  
                  {selectedMetrics.includes("service-summary") && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-3">Service Operations Summary</h3>
                      <div className="bg-slate-50 rounded p-3 mb-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Installations</span>
                          <span>245 completed, 28 pending</span>
                        </div>
                      </div>
                      <div className="bg-slate-50 rounded p-3 mb-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Deinstallations</span>
                          <span>182 completed, 15 pending</span>
                        </div>
                      </div>
                      <div className="bg-slate-50 rounded p-3 mb-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Reactivations</span>
                          <span>120 completed, 22 pending</span>
                        </div>
                      </div>
                      <div className="bg-slate-50 rounded p-3">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Preventive Maintenance</span>
                          <span>310 completed, 45 pending</span>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {selectedMetrics.includes("tat-performance") && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-3">TAT Performance</h3>
                      <div className="bg-slate-50 rounded p-4 text-center">
                        <div className="text-3xl font-bold text-green-600 mb-1">95.2%</div>
                        <div className="text-sm">Tasks completed within TAT</div>
                        <div className="flex justify-center items-center mt-2 gap-4">
                          <div className="text-center">
                            <div className="text-xl font-semibold text-slate-800">857</div>
                            <div className="text-xs text-slate-500">Within TAT</div>
                          </div>
                          <div className="text-center">
                            <div className="text-xl font-semibold text-red-500">43</div>
                            <div className="text-xs text-slate-500">Breached TAT</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {selectedMetrics.includes("inventory-health") && (
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Inventory Health</h3>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-slate-50 rounded p-3">
                          <div className="text-sm text-slate-500 mb-1">Fresh Inventory</div>
                          <div className="text-xl font-semibold">550 units</div>
                        </div>
                        <div className="bg-slate-50 rounded p-3">
                          <div className="text-sm text-slate-500 mb-1">In Repair</div>
                          <div className="text-xl font-semibold">115 units</div>
                        </div>
                        <div className="bg-slate-50 rounded p-3">
                          <div className="text-sm text-slate-500 mb-1">With Engineers</div>
                          <div className="text-xl font-semibold">155 units</div>
                        </div>
                        <div className="bg-slate-50 rounded p-3">
                          <div className="text-sm text-slate-500 mb-1">Bad Inventory</div>
                          <div className="text-xl font-semibold">51 units</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Send History</CardTitle>
                <CardDescription>Record of previously sent email digests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="bg-slate-50 p-3 font-medium">
                    <div className="grid grid-cols-4 gap-2">
                      <div>Date Sent</div>
                      <div>Type</div>
                      <div>Recipients</div>
                      <div>Status</div>
                    </div>
                  </div>
                  <div className="p-3 border-t">
                    <div className="grid grid-cols-4 gap-2">
                      <div>May 21, 2025</div>
                      <div>Daily Digest</div>
                      <div>4 recipients</div>
                      <div className="text-green-600">Delivered</div>
                    </div>
                  </div>
                  <div className="p-3 border-t">
                    <div className="grid grid-cols-4 gap-2">
                      <div>May 20, 2025</div>
                      <div>Daily Digest</div>
                      <div>4 recipients</div>
                      <div className="text-green-600">Delivered</div>
                    </div>
                  </div>
                  <div className="p-3 border-t">
                    <div className="grid grid-cols-4 gap-2">
                      <div>May 19, 2025</div>
                      <div>Daily Digest</div>
                      <div>4 recipients</div>
                      <div className="text-green-600">Delivered</div>
                    </div>
                  </div>
                  <div className="p-3 border-t">
                    <div className="grid grid-cols-4 gap-2">
                      <div>May 15, 2025</div>
                      <div>Weekly Summary</div>
                      <div>6 recipients</div>
                      <div className="text-green-600">Delivered</div>
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

export default EmailDigest;
