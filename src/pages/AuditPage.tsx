import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Calendar, 
  Clock, 
  CheckCircle, 
  AlertTriangle, 
  FileText, 
  Search, 
  Eye, 
  Edit, 
  ChevronDown,
  User,
  Building2
} from "lucide-react";

const AuditPage = () => {
  const [activeTab, setActiveTab] = useState("All Audit Records");

  const auditData = [
    {
      id: "AUD-2025-004",
      status: "Scheduled",
      type: "Internal",
      auditor: "Vikram",
      scheduledDate: "2025-07-29",
      department: "Production",
      auditType: "Internal",
      icon: Clock,
      statusColor: "bg-yellow-100 text-yellow-800"
    },
    {
      id: "AUD-2025-003",
      title: "Test 123",
      status: "Completed",
      type: "External", 
      auditor: "Vikram",
      scheduledDate: "2025-07-30",
      department: "Maintenance",
      auditType: "External",
      icon: CheckCircle,
      statusColor: "bg-green-100 text-green-800"
    }
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      {/* Header Section */}
      <div className="mb-8">
        <div className="border border-border rounded-lg p-6 bg-card">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-primary mb-2">Audit Management</h1>
              <p className="text-muted-foreground">Plan, execute, and track audit activities</p>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Calendar className="w-4 h-4 mr-2" />
              Schedule Audit
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="p-6 border border-border">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-foreground mb-1">1</div>
              <div className="text-muted-foreground text-sm">Completed</div>
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-primary/20 flex items-center justify-center">
              <Clock className="w-5 h-5 text-primary" />
            </div>
          </div>
        </Card>

        <Card className="p-6 border border-border">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-foreground mb-1">1</div>
              <div className="text-muted-foreground text-sm">Scheduled</div>
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-green-200 flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
          </div>
        </Card>

        <Card className="p-6 border border-border">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-foreground mb-1">2</div>
              <div className="text-muted-foreground text-sm">In Progress</div>
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-yellow-200 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-yellow-600" />
            </div>
          </div>
        </Card>

        <Card className="p-6 border border-border">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-foreground mb-1">3</div>
              <div className="text-muted-foreground text-sm">Total Workflows</div>
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-primary/20 flex items-center justify-center">
              <FileText className="w-5 h-5 text-primary" />
            </div>
          </div>
        </Card>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 mb-6">
        {["Upcoming Audits", "All Audit Records", "Completed Audits"].map((tab) => (
          <Button
            key={tab}
            variant={activeTab === tab ? "default" : "outline"}
            onClick={() => setActiveTab(tab)}
            className={
              activeTab === tab 
                ? "bg-primary text-primary-foreground" 
                : "bg-background text-muted-foreground hover:bg-muted"
            }
          >
            {tab}
          </Button>
        ))}
      </div>

      {/* Filter Controls */}
      <div className="flex items-center gap-4 mb-6">
        <Select>
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="All Reports" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Reports</SelectItem>
            <SelectItem value="internal">Internal</SelectItem>
            <SelectItem value="external">External</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="All Statuses" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="scheduled">Scheduled</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="progress">In Progress</SelectItem>
          </SelectContent>
        </Select>

        <Button variant="outline" size="icon">
          <Search className="w-4 h-4" />
        </Button>
      </div>

      {/* Results Header */}
      <h2 className="text-lg font-semibold text-primary mb-6">4 Audit Files Found</h2>

      {/* Audit Records */}
      <div className="space-y-4">
        {auditData.map((audit) => (
          <Card key={audit.id} className="p-6 border border-border">
            <div className="flex items-center gap-4">
              {/* Icon */}
              <div className="w-10 h-10 rounded-full border-2 border-muted flex items-center justify-center">
                <audit.icon className="w-5 h-5 text-muted-foreground" />
              </div>

              {/* Audit ID and Title */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-semibold text-foreground">{audit.id}</h3>
                  <Badge 
                    variant="secondary" 
                    className={`${audit.status === 'Scheduled' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'} border-0`}
                  >
                    {audit.status}
                  </Badge>
                  <Badge 
                    variant="outline"
                    className={`${audit.type === 'Internal' ? 'bg-blue-50 text-blue-700 border-blue-200' : 'bg-purple-50 text-purple-700 border-purple-200'}`}
                  >
                    {audit.type}
                  </Badge>
                </div>
                
                {audit.title && (
                  <h4 className="font-medium text-foreground mb-3">{audit.title}</h4>
                )}

                {/* Details */}
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>Auditor : {audit.auditor}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>Scheduled : {audit.scheduledDate}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Building2 className="w-4 h-4" />
                    <span>Department : {audit.department}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FileText className="w-4 h-4" />
                    <span>Type : {audit.auditType}</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Eye className="w-4 h-4 mr-1" />
                  View
                </Button>
                <Button variant="outline" size="sm">
                  <Edit className="w-4 h-4 mr-1" />
                  Edit
                </Button>
                <Select>
                  <SelectTrigger className="w-[100px] h-8">
                    <SelectValue placeholder="Scheduled" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="scheduled">Scheduled</SelectItem>
                    <SelectItem value="progress">In Progress</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AuditPage;