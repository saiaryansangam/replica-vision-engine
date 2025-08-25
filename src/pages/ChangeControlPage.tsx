import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, FileText, Users, CheckCircle, CheckCircle2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ChangeControlPage = () => {
  const stats = [
    {
      title: "Total Requests",
      value: "1",
      icon: FileText,
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      title: "Pending Review",
      value: "0",
      icon: Users,
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
    },
    {
      title: "Pending Approval",
      value: "0",
      icon: CheckCircle,
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      title: "Approved",
      value: "1",
      icon: CheckCircle2,
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
    },
  ];

  const changeRequests = [
    {
      title: "Change in the title",
      type: "Document",
      requestedBy: "sai aryan sangam",
      reviewer: "kiran",
      approver: "karthik",
      status: "Approved",
      created: "Aug 06, 2025",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Change Control Management
            </h1>
            <p className="text-muted-foreground">
              View and manage all change control requests
            </p>
          </div>
          <Button className="bg-green-600 hover:bg-green-700 text-white">
            <Plus className="w-4 h-4 mr-2" />
            Create Change
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className={`${stat.bgColor} border-0`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {stat.title}
                    </p>
                    <p className="text-3xl font-bold text-foreground">
                      {stat.value}
                    </p>
                  </div>
                  <stat.icon className={`w-8 h-8 ${stat.iconColor}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Table Section */}
        <div className="mb-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Change Control Requests
            </h2>
            <p className="text-muted-foreground">
              View and manage all change control requests
            </p>
          </div>

          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="border-b border-border">
                    <TableHead className="text-left font-semibold text-foreground py-4 px-6">
                      Title
                    </TableHead>
                    <TableHead className="text-left font-semibold text-foreground py-4 px-6">
                      Type
                    </TableHead>
                    <TableHead className="text-left font-semibold text-foreground py-4 px-6">
                      Requested By
                    </TableHead>
                    <TableHead className="text-left font-semibold text-foreground py-4 px-6">
                      Reviewer
                    </TableHead>
                    <TableHead className="text-left font-semibold text-foreground py-4 px-6">
                      Approver
                    </TableHead>
                    <TableHead className="text-left font-semibold text-foreground py-4 px-6">
                      Status
                    </TableHead>
                    <TableHead className="text-left font-semibold text-foreground py-4 px-6">
                      Created
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {changeRequests.map((request, index) => (
                    <TableRow key={index} className="border-b border-border last:border-0">
                      <TableCell className="py-4 px-6 font-medium text-foreground">
                        {request.title}
                      </TableCell>
                      <TableCell className="py-4 px-6 text-muted-foreground">
                        {request.type}
                      </TableCell>
                      <TableCell className="py-4 px-6 text-muted-foreground">
                        {request.requestedBy}
                      </TableCell>
                      <TableCell className="py-4 px-6 text-muted-foreground">
                        {request.reviewer}
                      </TableCell>
                      <TableCell className="py-4 px-6 text-muted-foreground">
                        {request.approver}
                      </TableCell>
                      <TableCell className="py-4 px-6">
                        <Badge 
                          variant="secondary" 
                          className="bg-green-100 text-green-800 hover:bg-green-100"
                        >
                          {request.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="py-4 px-6 text-muted-foreground">
                        {request.created}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ChangeControlPage;