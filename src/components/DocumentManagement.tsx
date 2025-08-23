import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Plus, 
  Search, 
  Eye, 
  Download, 
  Trash2, 
  RefreshCw,
  Clock,
  CheckCircle
} from "lucide-react";

// Mock document data
const documents = [
  {
    id: "DOC-175455215298O",
    name: "Procurement Doc",
    type: "policy",
    department: "Production",
    status: "Approval in 2 days",
    statusType: "warning",
    version: "1.0",
    createdDate: "8/7/2025",
    icon: "📄"
  },
  {
    id: "DOC-175455204216S",
    name: "Alert Doc",
    type: "policy",
    department: "Research & Development",
    status: "Under Approval",
    statusType: "error",
    version: "1.1",
    createdDate: "8/7/2025",
    icon: "📄"
  },
  {
    id: "DOC-175455152I2l1",
    name: "Notify Document",
    type: "SOP",
    department: "Production",
    status: "Under Approval",
    statusType: "error",
    version: "1.1",
    createdDate: "8/7/2025",
    icon: "📋"
  },
  {
    id: "DOC-175429508080Z",
    name: "Production Details",
    type: "Policy",
    department: "Production",
    status: "Approved",
    statusType: "success",
    version: "1.0",
    createdDate: "8/7/2025",
    icon: "📋"
  },
  {
    id: "DOC-175421049595Z",
    name: "KK",
    type: "Policy",
    department: "Production",
    status: "Under Approval",
    statusType: "error",
    version: "1.1",
    createdDate: "8/7/2025",
    icon: "📄"
  },
  {
    id: "DOC-175455215298O",
    name: "Procurement Doc",
    type: "policy",
    department: "Production",
    status: "Approval in 2 days",
    statusType: "warning",
    version: "1.0",
    createdDate: "8/7/2025",
    icon: "🗂️"
  }
];

const StatusBadge = ({ status, type }: { status: string; type: string }) => {
  const getStatusStyles = () => {
    switch (type) {
      case "success":
        return "bg-green-100 text-green-800 border-green-200";
      case "warning":
        return "bg-pink-100 text-pink-800 border-pink-200";
      case "error":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getIcon = () => {
    switch (type) {
      case "success":
        return <CheckCircle className="w-3 h-3" />;
      case "warning":
      case "error":
        return <Clock className="w-3 h-3" />;
      default:
        return null;
    }
  };

  return (
    <Badge className={`${getStatusStyles()} flex items-center gap-1 text-xs border`}>
      {getIcon()}
      {status}
    </Badge>
  );
};

export function DocumentManagement() {
  const [activeTab, setActiveTab] = useState("all");
  const [departmentFilter, setDepartmentFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex-1 bg-background">
      {/* Header */}
      <div className="bg-primary-light px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-primary mb-2">Document Management</h1>
            <p className="text-muted-foreground">Manage your quality documents with full lifecycle control</p>
          </div>
          <Button 
            className="bg-primary hover:bg-primary-dark text-white"
          >
            <Plus className="w-4 h-4 mr-2" />
            New Document
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="px-8 py-6 border-b border-qms-table-border">
        <div className="flex items-center gap-4 mb-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search Documents......"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-white border-border"
            />
          </div>
          
          <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
            <SelectTrigger className="w-48 bg-white border-border">
              <SelectValue placeholder="Filter by Department" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Filter by Department</SelectItem>
              <SelectItem value="production">Production</SelectItem>
              <SelectItem value="research">Research & Development</SelectItem>
              <SelectItem value="quality">Quality</SelectItem>
              <SelectItem value="hr">HR</SelectItem>
            </SelectContent>
          </Select>

          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-40 bg-white border-border">
              <SelectValue placeholder="Filter by Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Filter by Type</SelectItem>
              <SelectItem value="policy">Policy</SelectItem>
              <SelectItem value="sop">SOP</SelectItem>
              <SelectItem value="procedure">Procedure</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-1">
          <Button
            variant={activeTab === "all" ? "default" : "ghost"}
            onClick={() => setActiveTab("all")}
            className={`rounded-full px-6 ${
              activeTab === "all" 
                ? "bg-primary-light text-primary" 
                : "text-muted-foreground hover:text-primary"
            }`}
          >
            All Documents
          </Button>
          <Button
            variant={activeTab === "pending" ? "default" : "ghost"}
            onClick={() => setActiveTab("pending")}
            className={`rounded-full px-6 ${
              activeTab === "pending" 
                ? "bg-primary-light text-primary" 
                : "text-muted-foreground hover:text-primary"
            }`}
          >
            Pending approvals
          </Button>
          <Button
            variant={activeTab === "approved" ? "default" : "ghost"}
            onClick={() => setActiveTab("approved")}
            className={`rounded-full px-6 ${
              activeTab === "approved" 
                ? "bg-primary-light text-primary" 
                : "text-muted-foreground hover:text-primary"
            }`}
          >
            Approved Documents
          </Button>
        </div>
      </div>

      {/* Document Library */}
      <div className="px-8 py-6">
        <h2 className="text-lg font-semibold text-primary mb-6">Document Library</h2>
        
        <div className="bg-white rounded-lg border border-qms-table-border overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-qms-table-header border-b border-qms-table-border">
                <th className="text-left py-4 px-6 font-medium text-primary">Document Name</th>
                <th className="text-left py-4 px-6 font-medium text-primary">Type</th>
                <th className="text-left py-4 px-6 font-medium text-primary">Department</th>
                <th className="text-left py-4 px-6 font-medium text-primary">Status</th>
                <th className="text-left py-4 px-6 font-medium text-primary">Version</th>
                <th className="text-left py-4 px-6 font-medium text-primary">Created Date</th>
                <th className="text-left py-4 px-6 font-medium text-primary">Actions</th>
              </tr>
            </thead>
            <tbody>
              {documents.map((document, index) => (
                <tr key={index} className="border-b border-qms-table-border last:border-b-0 hover:bg-muted/30">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary-light rounded flex items-center justify-center text-primary">
                        <FileText className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">{document.name}</div>
                        <div className="text-sm text-muted-foreground">{document.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-foreground">{document.type}</td>
                  <td className="py-4 px-6 text-foreground">{document.department}</td>
                  <td className="py-4 px-6">
                    <StatusBadge status={document.status} type={document.statusType} />
                  </td>
                  <td className="py-4 px-6 text-foreground">{document.version}</td>
                  <td className="py-4 px-6 text-foreground">{document.createdDate}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="w-8 h-8 p-0 hover:bg-blue-100 hover:text-blue-600"
                        title="View"
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="w-8 h-8 p-0 hover:bg-green-100 hover:text-green-600"
                        title="Download"
                      >
                        <Download className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="w-8 h-8 p-0 hover:bg-red-100 hover:text-red-600"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="w-8 h-8 p-0 hover:bg-orange-100 hover:text-orange-600"
                        title="Refresh"
                      >
                        <RefreshCw className="w-4 h-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}