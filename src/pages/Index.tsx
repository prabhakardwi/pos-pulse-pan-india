
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">POS Service Operations Dashboard</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Comprehensive overview of service operations and inventory health across PAN India
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-3 text-slate-800">Service Operations</h2>
            <p className="text-slate-600 mb-4">
              Monitor all POS terminal operations including installation, deinstallation, 
              reactivation, and preventive maintenance across all regions.
            </p>
            <Button onClick={() => navigate("/service-ops")}>
              View Service Operations
            </Button>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-3 text-slate-800">Inventory Health</h2>
            <p className="text-slate-600 mb-4">
              Track inventory status across hubs, repair centers, service engineers, 
              and identify bad inventory requiring attention.
            </p>
            <Button onClick={() => navigate("/inventory")}>
              View Inventory Health
            </Button>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-3 text-slate-800">TAT Analytics</h2>
            <p className="text-slate-600 mb-4">
              Analyze turnaround time performance with detailed metrics on met vs. breached TAT 
              across different service types and regions.
            </p>
            <Button onClick={() => navigate("/tat-analytics")}>
              View TAT Analytics
            </Button>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-3 text-slate-800">Email Digest</h2>
            <p className="text-slate-600 mb-4">
              Generate and manage interactive email digests for stakeholders with 
              customizable reports and metrics.
            </p>
            <Button onClick={() => navigate("/email-digest")}>
              Manage Email Digests
            </Button>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <Button onClick={() => navigate("/orders")} variant="outline" className="mr-4">
            View Orders
          </Button>
          <Button onClick={() => navigate("/dashboard")} variant="default">
            Go to Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
