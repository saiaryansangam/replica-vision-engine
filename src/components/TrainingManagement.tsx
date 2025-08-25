import { useState } from "react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { BookOpen, CheckCircle, Users, Grid3X3, Search, MoreHorizontal, Link, CalendarIcon, FileText, Video } from "lucide-react";
import { cn } from "@/lib/utils";

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
  const [isNewTrainingOpen, setIsNewTrainingOpen] = useState(false);
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [contentType, setContentType] = useState("document");
  const [mandatoryTraining, setMandatoryTraining] = useState(false);
  const [formData, setFormData] = useState({
    courseTitle: "",
    courseCode: "",
    description: "",
    trainer: "",
    duration: "",
    passingScore: "",
    approvedDocument: ""
  });

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
        <Button 
          className="bg-emerald-600 hover:bg-emerald-700 text-white"
          onClick={() => setIsNewTrainingOpen(true)}
        >
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

      {/* New Training Modal */}
      <Dialog open={isNewTrainingOpen} onOpenChange={setIsNewTrainingOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold">Create New Training Course</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6 py-4">
            {/* Course Title and Code */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="courseTitle">Course Title *</Label>
                <Input
                  id="courseTitle"
                  value={formData.courseTitle}
                  onChange={(e) => setFormData({...formData, courseTitle: e.target.value})}
                  className="bg-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="courseCode">Course Code *</Label>
                <Input
                  id="courseCode"
                  value={formData.courseCode}
                  onChange={(e) => setFormData({...formData, courseCode: e.target.value})}
                  className="bg-white"
                />
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                className="bg-white min-h-[80px]"
              />
            </div>

            {/* Trainer, Duration, Passing Score */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="trainer">Trainer</Label>
                <Input
                  id="trainer"
                  placeholder="Trainer name"
                  value={formData.trainer}
                  onChange={(e) => setFormData({...formData, trainer: e.target.value})}
                  className="bg-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="duration">Duration (Hours)</Label>
                <Input
                  id="duration"
                  type="number"
                  placeholder="8"
                  value={formData.duration}
                  onChange={(e) => setFormData({...formData, duration: e.target.value})}
                  className="bg-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="passingScore">Passing Score (%)</Label>
                <Input
                  id="passingScore"
                  type="number"
                  placeholder="80"
                  value={formData.passingScore}
                  onChange={(e) => setFormData({...formData, passingScore: e.target.value})}
                  className="bg-white"
                />
              </div>
            </div>

            {/* Start Date and End Date */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Start Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal bg-white",
                        !startDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {startDate ? format(startDate, "MM/dd/yyyy") : <span>mm/dd/yyyy</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={startDate}
                      onSelect={setStartDate}
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="space-y-2">
                <Label>End Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal bg-white",
                        !endDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {endDate ? format(endDate, "MM/dd/yyyy") : <span>mm/dd/yyyy</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={endDate}
                      onSelect={setEndDate}
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            {/* Content Type */}
            <div className="space-y-3">
              <Label>Content Type</Label>
              <RadioGroup value={contentType} onValueChange={setContentType} className="flex gap-6">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="document" id="document" />
                  <Label htmlFor="document" className="flex items-center gap-2 cursor-pointer">
                    <FileText className="w-4 h-4" />
                    Document
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="video" id="video" />
                  <Label htmlFor="video" className="flex items-center gap-2 cursor-pointer">
                    <Video className="w-4 h-4" />
                    Video
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Select Approved Document */}
            <div className="space-y-2">
              <Label>Select Approved Document</Label>
              <Select value={formData.approvedDocument} onValueChange={(value) => setFormData({...formData, approvedDocument: value})}>
                <SelectTrigger className="bg-white">
                  <SelectValue placeholder="Choose a document..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="document1">Document 1</SelectItem>
                  <SelectItem value="document2">Document 2</SelectItem>
                  <SelectItem value="document3">Document 3</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Mandatory Training */}
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="mandatory" 
                checked={mandatoryTraining}
                onCheckedChange={(checked) => setMandatoryTraining(checked === true)}
              />
              <Label htmlFor="mandatory">Mandatory Training</Label>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-3 pt-4">
              <Button
                variant="outline"
                onClick={() => setIsNewTrainingOpen(false)}
              >
                Cancel
              </Button>
              <Button
                className="bg-emerald-600 hover:bg-emerald-700 text-white"
                onClick={() => {
                  // Handle form submission here
                  console.log('Creating training course:', {
                    ...formData,
                    startDate,
                    endDate,
                    contentType,
                    mandatoryTraining
                  });
                  setIsNewTrainingOpen(false);
                }}
              >
                Create Course
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}