
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
  return (
    <Card className="col-span-1 md:col-span-2">
      <CardHeader>
        <CardTitle>Content Selection</CardTitle>
        <CardDescription>Select metrics and data to include in the digest</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <MetricCheckbox
            id="service-summary"
            label="Service Operations Summary"
            description="Overview of installations, deinstallations, etc."
            checked={selectedMetrics.includes("service-summary")}
            onCheckedChange={() => onMetricToggle("service-summary")}
          />
          
          <MetricCheckbox
            id="tat-performance"
            label="TAT Performance Metrics"
            description="Breached vs met turnaround time metrics"
            checked={selectedMetrics.includes("tat-performance")}
            onCheckedChange={() => onMetricToggle("tat-performance")}
          />
          
          <MetricCheckbox
            id="inventory-health"
            label="Inventory Health"
            description="Status of inventory across all locations"
            checked={selectedMetrics.includes("inventory-health")}
            onCheckedChange={() => onMetricToggle("inventory-health")}
          />
          
          <MetricCheckbox
            id="regional-metrics"
            label="Regional Performance"
            description="Breakdown by East, West, North and South regions"
            checked={selectedMetrics.includes("regional-metrics")}
            onCheckedChange={() => onMetricToggle("regional-metrics")}
          />
          
          <MetricCheckbox
            id="task-alerts"
            label="Critical Alerts"
            description="High priority issues requiring attention"
            checked={selectedMetrics.includes("task-alerts")}
            onCheckedChange={() => onMetricToggle("task-alerts")}
          />
          
          <MetricCheckbox
            id="upcoming-tasks"
            label="Upcoming Service Tasks"
            description="Preview of upcoming scheduled operations"
            checked={selectedMetrics.includes("upcoming-tasks")}
            onCheckedChange={() => onMetricToggle("upcoming-tasks")}
          />
        </div>
      </CardContent>
    </Card>
  );
};

interface MetricCheckboxProps {
  id: string;
  label: string;
  description: string;
  checked: boolean;
  onCheckedChange: () => void;
}

const MetricCheckbox: React.FC<MetricCheckboxProps> = ({
  id,
  label,
  description,
  checked,
  onCheckedChange,
}) => {
  return (
    <div className="flex items-start space-x-2">
      <Checkbox 
        id={id} 
        checked={checked}
        onCheckedChange={onCheckedChange}
      />
      <div className="space-y-1">
        <Label htmlFor={id} className="font-medium">
          {label}
        </Label>
        <p className="text-sm text-slate-500">
          {description}
        </p>
      </div>
    </div>
  );
};
