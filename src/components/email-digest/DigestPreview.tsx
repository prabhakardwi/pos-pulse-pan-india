
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

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
  );
};
