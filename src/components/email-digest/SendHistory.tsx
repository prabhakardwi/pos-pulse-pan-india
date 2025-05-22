
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export const SendHistory: React.FC = () => {
  return (
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
  );
};
