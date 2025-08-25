import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BookOpen, CheckCircle, Users, Grid3X3, Search, MoreHorizontal, Link } from "lucide-react";

interface TrainingProgram {
  id: string;
  title: string;
  department: string;
  duration: string;
  assessment: string;
  trainee: number;
}

const mockTrainingData: TrainingProgram[] = [
  {
    id: "1",
    title: "abc",
    department: "Marketing",
    duration: "1h",
    assessment: "Assessment",
    trainee: 0
  },
  {
    id: "2",
    title: "Business Management",
    department: "Not Assigned",
    duration: "4h",
    assessment: "Assessment",
    trainee: 0
  },
  {
    id: "3",
    title: "Leadership",
    department: "Not Assigned",
    duration: "4h",
    assessment: "Assessment",
    trainee: 0
  },
  {
    id: "4",
    title: "Management Skills",
    department: "Not Assigned",
    duration: "3h",
    assessment: "Assessment",
    trainee: 0
  },
  {
    id: "5",
    title: "Test 1",
    department: "Not Assigned",
    duration: "7h",
    assessment: "Assessment",
    trainee: 0
  }
];

export function TrainingManagement() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("training-programs");

  const filteredTraining = mockTrainingData.filter((training) =>
    training.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    training.department.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6 bg-background min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-foreground">Training Management</h1>
            <p className="text-sm text-muted-foreground">Manage and track employee training programs</p>
          </div>
        </div>
        <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
          New Training
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-emerald-100 border-emerald-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-emerald-800">Active Programs</p>
                <p className="text-3xl font-bold text-emerald-900">17</p>
              </div>
              <BookOpen className="w-8 h-8 text-emerald-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-emerald-100 border-emerald-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-emerald-800">Completed Trainings</p>
                <p className="text-3xl font-bold text-emerald-900">0</p>
              </div>
              <CheckCircle className="w-8 h-8 text-emerald-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-emerald-100 border-emerald-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-emerald-800">Total Employees</p>
                <p className="text-3xl font-bold text-emerald-900">18</p>
              </div>
              <Users className="w-8 h-8 text-emerald-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-emerald-100 border-emerald-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-emerald-800">Departments</p>
                <p className="text-3xl font-bold text-emerald-900">0</p>
              </div>
              <Grid3X3 className="w-8 h-8 text-emerald-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3 max-w-md">
          <TabsTrigger 
            value="training-programs" 
            className="flex items-center gap-2 data-[state=active]:bg-emerald-600 data-[state=active]:text-white"
          >
            <BookOpen className="w-4 h-4" />
            Training Programs
          </TabsTrigger>
          <TabsTrigger 
            value="active-instances"
            className="flex items-center gap-2"
          >
            <Users className="w-4 h-4" />
            Active Instances
          </TabsTrigger>
          <TabsTrigger 
            value="employee-records"
            className="flex items-center gap-2"
          >
            <Users className="w-4 h-4" />
            Employee records
          </TabsTrigger>
        </TabsList>

        <TabsContent value="training-programs" className="space-y-4">
          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search Workflows....."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white"
              />
            </div>
            <Select defaultValue="all-departments">
              <SelectTrigger className="w-full sm:w-48 bg-white">
                <SelectValue placeholder="All Departments" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-departments">All Departments</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
                <SelectItem value="hr">HR</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all-trainers">
              <SelectTrigger className="w-full sm:w-48 bg-white">
                <SelectValue placeholder="All Trainers" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-trainers">All Trainers</SelectItem>
                <SelectItem value="trainer-1">Trainer 1</SelectItem>
                <SelectItem value="trainer-2">Trainer 2</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Training Table */}
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="border-b border-qms-table-border">
                    <TableHead className="text-muted-foreground font-medium py-4">Title</TableHead>
                    <TableHead className="text-muted-foreground font-medium py-4">Department</TableHead>
                    <TableHead className="text-muted-foreground font-medium py-4">Duration</TableHead>
                    <TableHead className="text-muted-foreground font-medium py-4">Assessment</TableHead>
                    <TableHead className="text-muted-foreground font-medium py-4">Trainee</TableHead>
                    <TableHead className="text-muted-foreground font-medium py-4">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredTraining.map((training) => (
                    <TableRow key={training.id} className="border-b border-qms-table-border hover:bg-muted/50">
                      <TableCell className="py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-medium text-sm">
                              {training.title.charAt(0).toLowerCase()}
                            </span>
                          </div>
                          <span className="font-medium">{training.title}</span>
                        </div>
                      </TableCell>
                      <TableCell className="py-4 text-muted-foreground">{training.department}</TableCell>
                      <TableCell className="py-4 text-muted-foreground">{training.duration}</TableCell>
                      <TableCell className="py-4 text-muted-foreground">{training.assessment}</TableCell>
                      <TableCell className="py-4 text-muted-foreground">{training.trainee}</TableCell>
                      <TableCell className="py-4">
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="icon" className="w-8 h-8">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="w-8 h-8">
                            <Link className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="active-instances">
          <Card>
            <CardContent className="p-8 text-center">
              <p className="text-muted-foreground">No active training instances found.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="employee-records">
          <Card>
            <CardContent className="p-8 text-center">
              <p className="text-muted-foreground">No employee training records found.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}