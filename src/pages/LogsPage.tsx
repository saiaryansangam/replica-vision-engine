import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  AlertTriangle, 
  Shield, 
  GraduationCap,
  Users,
  Settings,
  FolderOpen,
  Briefcase,
  RotateCcw,
  BarChart3,
  Eye
} from "lucide-react";

const LogsPage = () => {
  const getModuleIcon = (module: string) => {
    switch (module) {
      case "Document Management":
        return <FileText className="w-4 h-4 text-blue-600" />;
      case "CAPA Management":
        return <AlertTriangle className="w-4 h-4 text-orange-600" />;
      case "Audit Management":
        return <Shield className="w-4 h-4 text-purple-600" />;
      case "Training Management":
        return <GraduationCap className="w-4 h-4 text-green-600" />;
      case "Employee Management":
        return <Users className="w-4 h-4 text-blue-500" />;
      case "Workflow Management":
        return <Settings className="w-4 h-4 text-blue-700" />;
      case "Company Onboarding":
        return <FolderOpen className="w-4 h-4 text-teal-600" />;
      case "Project Management":
        return <Briefcase className="w-4 h-4 text-cyan-600" />;
      case "Change Control Management":
        return <RotateCcw className="w-4 h-4 text-yellow-600" />;
      case "Reports & Analytics":
        return <BarChart3 className="w-4 h-4 text-pink-600" />;
      default:
        return <FileText className="w-4 h-4 text-gray-600" />;
    }
  };

  const getActionBadge = (action: string) => {
    switch (action) {
      case "CREATE":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100 border-0 text-xs font-medium px-2 py-0.5 rounded-md">{action}</Badge>;
      case "UPDATE":
        return <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100 border-0 text-xs font-medium px-2 py-0.5 rounded-md">{action}</Badge>;
      case "VIEW":
        return <Badge className="bg-cyan-100 text-cyan-800 hover:bg-cyan-100 border-0 text-xs font-medium px-2 py-0.5 rounded-md">{action}</Badge>;
      case "DELETE":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100 border-0 text-xs font-medium px-2 py-0.5 rounded-md">{action}</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100 border-0 text-xs font-medium px-2 py-0.5 rounded-md">{action}</Badge>;
    }
  };

  const logEntries = [
    {
      timestamp: "Jan 15, 2024\n10:30 AM",
      user: "Sarah Johnson",
      module: "Document Management",
      action: "CREATE",
      activity: "12hrs ago",
      description: "Created new quality manual document for ISO compliance review"
    },
    {
      timestamp: "Jan 15, 2024\n09:45 AM",
      user: "Michael Chen",
      module: "CAPA Management",
      action: "UPDATE",
      activity: "22hrs ago",
      description: "Updated corrective action plan for equipment calibration issue"
    },
    {
      timestamp: "Jan 15, 2024\n09:15 AM",
      user: "Emily Rodriguez",
      module: "Audit Management",
      action: "VIEW",
      activity: "22hrs ago",
      description: "Accessed internal audit findings report for Q4 2023"
    },
    {
      timestamp: "Jan 14, 2024\n04:20 PM",
      user: "David Wilson",
      module: "Training Management",
      action: "CREATE",
      activity: "22hrs ago",
      description: "Created new safety training module for laboratory procedures"
    },
    {
      timestamp: "Jan 14, 2024\n03:45 PM",
      user: "Lisa Thompson",
      module: "Employee Management",
      action: "UPDATE",
      activity: "22hrs ago",
      description: "Updated employee role permissions for quality assurance team"
    },
    {
      timestamp: "Jan 14, 2024\n02:30 PM",
      user: "James Parker",
      module: "Workflow Management",
      action: "DELETE",
      activity: "22hrs ago",
      description: "Removed obsolete approval workflow for document review process"
    },
    {
      timestamp: "Jan 14, 2024\n01:15 PM",
      user: "Anna Martinez",
      module: "Company Onboarding",
      action: "CREATE",
      activity: "22hrs ago",
      description: "Created onboarding checklist for new quality engineer position"
    },
    {
      timestamp: "Jan 13, 2024\n05:00 PM",
      user: "Robert Davis",
      module: "Project Management",
      action: "UPDATE",
      activity: "22hrs ago",
      description: "Updated project timeline for ISO 27001 certification implementation"
    },
    {
      timestamp: "Jan 13, 2024\n03:30 PM",
      user: "Michelle Lee",
      module: "Change Control Management",
      action: "VIEW",
      activity: "22hrs ago",
      description: "Reviewed change request for laboratory equipment upgrade"
    },
    {
      timestamp: "Jan 13, 2024\n02:15 PM",
      user: "Kevin Brown",
      module: "Reports & Analytics",
      action: "DELETE",
      activity: "22hrs ago",
      description: "Generated monthly compliance performance dashboard report"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="p-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-foreground mb-2">Activity Logs</h1>
          <p className="text-sm text-muted-foreground">Showing 186 of 186 log entries</p>
        </div>

        {/* Table */}
        <div className="bg-card rounded-lg border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Timestamp</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">User</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Module</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Action</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Activity</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Description</th>
                </tr>
              </thead>
              <tbody>
                {logEntries.map((entry, index) => (
                  <tr key={index} className="border-b border-border hover:bg-muted/50 transition-colors">
                    <td className="p-4">
                      <div className="text-sm">
                        <div className="font-medium text-foreground whitespace-pre-line">{entry.timestamp}</div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="text-sm font-medium text-foreground">{entry.user}</div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        {getModuleIcon(entry.module)}
                        <span className="text-sm text-foreground">{entry.module}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      {getActionBadge(entry.action)}
                    </td>
                    <td className="p-4">
                      <div className="text-sm text-muted-foreground">{entry.activity}</div>
                    </td>
                    <td className="p-4">
                      <div className="text-sm text-foreground max-w-md">{entry.description}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogsPage;