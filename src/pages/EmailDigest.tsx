
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { DeliverySettings } from "@/components/email-digest/DeliverySettings";
import { ContentSelection } from "@/components/email-digest/ContentSelection";
import { DigestPreview } from "@/components/email-digest/DigestPreview";
import { SendHistory } from "@/components/email-digest/SendHistory";

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
              <DeliverySettings 
                frequency={frequency}
                setFrequency={setFrequency}
                recipients={recipients}
                setRecipients={setRecipients}
                onSaveSettings={handleSaveSettings}
                onSendNow={handleSendNow}
              />
              
              <ContentSelection 
                selectedMetrics={selectedMetrics}
                onMetricToggle={handleMetricToggle}
              />
            </div>
          </TabsContent>
          
          <TabsContent value="preview">
            <DigestPreview selectedMetrics={selectedMetrics} />
          </TabsContent>
          
          <TabsContent value="history">
            <SendHistory />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default EmailDigest;
