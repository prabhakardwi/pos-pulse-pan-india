
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface DashboardHeaderProps {
  selectedRegion: string;
  onRegionChange: (region: string) => void;
}

export const DashboardHeader = ({ selectedRegion, onRegionChange }: DashboardHeaderProps) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">POS Operations Dashboard</h1>
        <p className="text-slate-500">Real-time metrics for service operations and inventory</p>
      </div>
      <div className="flex items-center space-x-4">
        <div>
          <label htmlFor="region-select" className="text-sm font-medium text-slate-500 block mb-1">
            Region
          </label>
          <Select value={selectedRegion} onValueChange={onRegionChange}>
            <SelectTrigger id="region-select" className="w-[180px]">
              <SelectValue placeholder="Select region" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Regions</SelectItem>
              <SelectItem value="north">North</SelectItem>
              <SelectItem value="south">South</SelectItem>
              <SelectItem value="east">East</SelectItem>
              <SelectItem value="west">West</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};
