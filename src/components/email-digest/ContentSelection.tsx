
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface ContentSelectionProps {
  selectedMetrics: string[];
  onMetricToggle: (metric: string) => void;
}

export const ContentSelection: React.FC<ContentSelectionProps> = ({
  selectedMetrics,
  onMetricToggle,
}) => {
  const metrics = [
    {
      id: "service-summary",
      label: "Service Operations Summary",
      description: "Daily service activity summary with installations, maintenance, etc."
    },
    {
      id: "engineer-activity",
      label: "Service Engineer Activity",
      description: "Current engineer availability and activity status"
    },
    {
      id: "tat-performance",
      label: "TAT Performance",
      description: "Turn-around-time performance for service operations"
    },
    {
      id: "inventory-health",
      label: "Inventory Health",
      description: "Current state of POS inventory across regions"
    },
    {
      id: "regional-metrics",
      label: "Regional Metrics",
      description: "Service performance broken down by regions"
    },
    {
      id: "task-alerts",
      label: "Critical Alerts",
      description: "Urgent issues requiring immediate attention"
    },
    {
      id: "upcoming-tasks",
      label: "Upcoming Service Tasks",
      description: "Details of service tasks scheduled for the next 48 hours"
    },
  ];

  return (
    <Card className="col-span-1 md:col-span-2">
      <CardHeader>
        <CardTitle>Content Selection</CardTitle>
        <CardDescription>Choose what to include in your email digest</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {metrics.map((metric) => (
            <div key={metric.id} className="flex items-start space-x-3 bg-slate-50 rounded-md p-4">
              <Checkbox
                id={metric.id}
                checked={selectedMetrics.includes(metric.id)}
                onCheckedChange={() => onMetricToggle(metric.id)}
              />
              <div>
                <Label 
                  htmlFor={metric.id} 
                  className="font-medium cursor-pointer"
                >
                  {metric.label}
                </Label>
                <p className="text-sm text-slate-500 mt-1">{metric.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
