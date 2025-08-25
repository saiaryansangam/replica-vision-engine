import { Building2, CheckCircle, BookOpen, AlertTriangle, Eye, UserPlus, Edit } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const CompanyOnboardingPage = () => {
  const statsData = [
    {
      title: "Total Companies",
      value: "4",
      icon: Building2,
      gradient: "from-cyan-400 to-blue-500"
    },
    {
      title: "Active Companies", 
      value: "4",
      icon: CheckCircle,
      gradient: "from-emerald-400 to-green-500"
    },
    {
      title: "Trainings Assigned",
      value: "3", 
      icon: BookOpen,
      gradient: "from-pink-400 to-purple-500"
    },
    {
      title: "Pending Approvals",
      value: "0",
      icon: AlertTriangle,
      gradient: "from-yellow-400 to-orange-500"
    }
  ];

  const companies = [
    {
      name: "CARE",
      timeZone: "UTC",
      status: "Active",
      created: "8/3/2025"
    },
    {
      name: "Johnson", 
      timeZone: "UTC",
      status: "Active",
      created: "8/3/2025"
    },
    {
      name: "yashoda",
      timeZone: "UTC", 
      status: "Active",
      created: "8/3/2025"
    },
    {
      name: "Pharma Corp",
      timeZone: "UTC",
      status: "Active", 
      created: "8/3/2025"
    }
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statsData.map((stat, index) => (
          <Card key={index} className="overflow-hidden border-0 shadow-lg">
            <CardContent className="p-0">
              <div className={`bg-gradient-to-br ${stat.gradient} p-6 text-white relative`}>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-white/90 mb-2">
                      {stat.title}
                    </h3>
                    <p className="text-3xl font-bold text-white">
                      {stat.value}
                    </p>
                  </div>
                  <div className="bg-white/20 p-2 rounded-lg">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Company Management</h1>
        <p className="text-muted-foreground">Manage companies and their training assignments</p>
      </div>

      {/* Companies Section */}
      <Card className="shadow-sm">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-muted p-2 rounded-lg">
              <Building2 className="w-5 h-5 text-muted-foreground" />
            </div>
            <h2 className="text-xl font-semibold text-foreground">Companies (4)</h2>
          </div>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-border">
                  <TableHead className="text-muted-foreground font-medium">Company Name</TableHead>
                  <TableHead className="text-muted-foreground font-medium">Time Zone</TableHead>
                  <TableHead className="text-muted-foreground font-medium">Status</TableHead>
                  <TableHead className="text-muted-foreground font-medium">Created</TableHead>
                  <TableHead className="text-muted-foreground font-medium">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {companies.map((company, index) => (
                  <TableRow key={index} className="border-border hover:bg-muted/50">
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="bg-muted p-2 rounded-lg">
                          <Building2 className="w-4 h-4 text-muted-foreground" />
                        </div>
                        <span className="font-medium text-foreground">{company.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-muted-foreground">{company.timeZone}</span>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-100">
                        {company.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <span className="text-muted-foreground">{company.created}</span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-cyan-600 hover:text-cyan-700 hover:bg-cyan-50 px-3 py-1 h-auto font-medium"
                        >
                          <Eye className="w-4 h-4 mr-1" />
                          View Trainings
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 px-3 py-1 h-auto font-medium"
                        >
                          <UserPlus className="w-4 h-4 mr-1" />
                          Assign Trainings
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className="text-muted-foreground hover:text-foreground p-1 h-auto"
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompanyOnboardingPage;