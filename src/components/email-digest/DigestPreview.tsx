
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { ServiceTypeSummary } from "@/components/dashboard/ServiceTypeSummary";
import { TatPerformanceChart } from "@/components/dashboard/TatPerformanceChart";
import { RegionalServiceMetrics } from "@/components/dashboard/RegionalServiceMetrics";

interface DigestPreviewProps {
  selectedMetrics: string[];
}

export const DigestPreview: React.FC<DigestPreviewProps> = ({
  selectedMetrics,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Digest Preview</CardTitle>
        <CardDescription>Preview how your email digest will appear to recipients</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="border rounded-md p-6 bg-white max-w-4xl mx-auto shadow-sm">
          {/* Email Header */}
          <div className="border-b pb-4 mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold mb-1">POS Operations Digest - {new Date().toLocaleDateString()}</h2>
                <p className="text-slate-500">Daily summary of POS Terminal operations across India</p>
              </div>
              <Mail className="h-8 w-8 text-purple-500" />
            </div>
          </div>
          
          {/* Greeting */}
          <div className="mb-6">
            <p className="text-slate-700">Hello Team,</p>
            <p className="text-slate-700 mt-2">Here is your daily digest of POS operations performance metrics. Please review the below information and take action as needed.</p>
          </div>
          
          {/* Service Operations Summary */}
          {selectedMetrics.includes("service-summary") && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-slate-800 border-b pb-2">Service Operations Summary</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-slate-50 rounded p-4">
                  <div className="text-sm text-slate-500 mb-1">Installations</div>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-semibold">245 completed</span>
                    <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-sm">28 pending</span>
                  </div>
                </div>
                <div className="bg-slate-50 rounded p-4">
                  <div className="text-sm text-slate-500 mb-1">Deinstallations</div>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-semibold">182 completed</span>
                    <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-sm">15 pending</span>
                  </div>
                </div>
                <div className="bg-slate-50 rounded p-4">
                  <div className="text-sm text-slate-500 mb-1">Reactivations</div>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-semibold">120 completed</span>
                    <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-sm">22 pending</span>
                  </div>
                </div>
                <div className="bg-slate-50 rounded p-4">
                  <div className="text-sm text-slate-500 mb-1">Preventive Maintenance</div>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-semibold">310 completed</span>
                    <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-sm">45 pending</span>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* TAT Performance */}
          {selectedMetrics.includes("tat-performance") && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-slate-800 border-b pb-2">TAT Performance</h3>
              <div className="bg-slate-50 rounded p-4 mb-4">
                <div className="flex justify-center">
                  <div className="text-center max-w-md mx-auto">
                    <div className="text-3xl font-bold text-green-600 mb-1">95.2%</div>
                    <div className="text-sm text-slate-600 mb-3">Tasks completed within TAT</div>
                    <div className="flex justify-center gap-8">
                      <div className="text-center">
                        <div className="text-2xl font-semibold text-slate-800">857</div>
                        <div className="text-xs text-slate-500">Within TAT</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-semibold text-red-500">43</div>
                        <div className="text-xs text-slate-500">Breached TAT</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 h-64">
                  <TatPerformanceChart region="all" />
                </div>
              </div>
            </div>
          )}
          
          {/* Inventory Health */}
          {selectedMetrics.includes("inventory-health") && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-slate-800 border-b pb-2">Inventory Health</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                <div className="bg-slate-50 rounded p-4">
                  <div className="text-sm text-slate-500 mb-1">Fresh Inventory</div>
                  <div className="text-xl font-semibold">550 units</div>
                </div>
                <div className="bg-slate-50 rounded p-4">
                  <div className="text-sm text-slate-500 mb-1">In Repair</div>
                  <div className="text-xl font-semibold">115 units</div>
                </div>
                <div className="bg-slate-50 rounded p-4">
                  <div className="text-sm text-slate-500 mb-1">With Engineers</div>
                  <div className="text-xl font-semibold">155 units</div>
                </div>
                <div className="bg-slate-50 rounded p-4">
                  <div className="text-sm text-slate-500 mb-1">Bad Inventory</div>
                  <div className="text-xl font-semibold">51 units</div>
                </div>
              </div>
            </div>
          )}
          
          {/* Regional Metrics */}
          {selectedMetrics.includes("regional-metrics") && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-slate-800 border-b pb-2">Regional Performance</h3>
              <div className="bg-slate-50 rounded p-4 mb-4">
                <div className="h-72">
                  <RegionalServiceMetrics />
                </div>
              </div>
            </div>
          )}
          
          {/* Critical Alerts */}
          {selectedMetrics.includes("task-alerts") && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-slate-800 border-b pb-2">Critical Alerts</h3>
              <div className="space-y-3">
                <div className="bg-red-50 border border-red-200 rounded p-4">
                  <div className="font-medium text-red-800">North Region: 12 Tasks Exceeding TAT</div>
                  <p className="text-sm text-red-700 mt-1">Immediate attention required - 5 tasks over 48 hours past due</p>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded p-4">
                  <div className="font-medium text-amber-800">South Region: Low Inventory Alert</div>
                  <p className="text-sm text-amber-700 mt-1">Terminal model XZ-750 inventory below threshold (5 units remaining)</p>
                </div>
              </div>
            </div>
          )}
          
          {/* Upcoming Service Tasks */}
          {selectedMetrics.includes("upcoming-tasks") && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-slate-800 border-b pb-2">Upcoming Service Tasks</h3>
              <div className="bg-slate-50 rounded overflow-hidden">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-slate-100">
                    <tr>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Date</th>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Location</th>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Task Type</th>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-200">
                    <tr>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-slate-700">May 23, 2025</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-slate-700">Mumbai Central</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-slate-700">Installation</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Scheduled</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-slate-700">May 23, 2025</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-slate-700">Delhi NCR</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-slate-700">Preventative Maintenance</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Scheduled</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-slate-700">May 24, 2025</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-slate-700">Chennai South</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-slate-700">Deinstallation</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">Engineer Assigned</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
          
          {/* Footer */}
          <div className="mt-8 pt-4 border-t text-slate-500 text-sm">
            <p>This is an automated email from the POS Operations Management System.</p>
            <p className="mt-2">If you have any questions or need assistance, please contact the support team at <span className="text-blue-600">support@posoperations.com</span></p>
          </div>
        </div>
        
        <div className="flex justify-center mt-6">
          <Button>
            <Mail className="mr-2 h-4 w-4" /> Send This Digest
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
