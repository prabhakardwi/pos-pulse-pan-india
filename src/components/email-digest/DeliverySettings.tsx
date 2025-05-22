
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface DeliverySettingsProps {
  frequency: string;
  setFrequency: (value: string) => void;
  recipients: string;
  setRecipients: (value: string) => void;
  onSaveSettings: () => void;
  onSendNow: () => void;
}

export const DeliverySettings: React.FC<DeliverySettingsProps> = ({
  frequency,
  setFrequency,
  recipients,
  setRecipients,
  onSaveSettings,
  onSendNow,
}) => {
  return (
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
        
        <Button onClick={onSaveSettings} className="w-full">Save Settings</Button>
        <Button onClick={onSendNow} variant="outline" className="w-full">Send Now</Button>
      </CardContent>
    </Card>
  );
};
