import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MoreHorizontal, Edit, Plus } from "lucide-react";

// Mock employee data
const employees = [
  {
    id: "123456789",
    name: "Jhon",
    role: "Employee",
    department: "Production",
    email: "Jhon@gmail.com"
  },
  {
    id: "123456789",
    name: "Jhon",
    role: "Employee", 
    department: "Production",
    email: "Jhon@gmail.com"
  },
  {
    id: "123456789",
    name: "Jhon",
    role: "Employee",
    department: "Production", 
    email: "Jhon@gmail.com"
  },
  {
    id: "123456789",
    name: "Jhon",
    role: "Employee",
    department: "Production",
    email: "Jhon@gmail.com"
  },
  {
    id: "123456789",
    name: "Jhon",
    role: "Employee",
    department: "Production",
    email: "Jhon@gmail.com"
  },
  {
    id: "123456789",
    name: "Jhon",
    role: "Employee",
    department: "Production",
    email: "Jhon@gmail.com"
  },
  {
    id: "123456789",
    name: "Jhon",
    role: "Employee",
    department: "Production",
    email: "Jhon@gmail.com"
  },
  {
    id: "123456789",
    name: "Jhon",
    role: "Employee",
    department: "Production",
    email: "Jhon@gmail.com"
  },
  {
    id: "123456789",
    name: "Jhon",
    role: "Employee",
    department: "Production",
    email: "Jhon@gmail.com"
  }
];

export function EmployeeManagement() {
  const [roleFilter, setRoleFilter] = useState("all");
  const [departmentFilter, setDepartmentFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [isNewEmployeeModalOpen, setIsNewEmployeeModalOpen] = useState(false);
  const [isEditEmployeeModalOpen, setIsEditEmployeeModalOpen] = useState(false);
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    email: "",
    contact: "",
    role: "",
    department: ""
  });
  const [editingEmployee, setEditingEmployee] = useState({
    id: "",
    name: "",
    email: "",
    contact: "",
    role: "",
    department: ""
  });

  const resetFilters = () => {
    setRoleFilter("all");
    setDepartmentFilter("all"); 
    setStatusFilter("all");
  };

  const handleInputChange = (field: string, value: string) => {
    setNewEmployee(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleEditInputChange = (field: string, value: string) => {
    setEditingEmployee(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleEditEmployee = (employee: any) => {
    setEditingEmployee({
      id: employee.id,
      name: employee.name,
      email: employee.email,
      contact: "", // This would come from employee data if available
      role: employee.role,
      department: employee.department
    });
    setIsEditEmployeeModalOpen(true);
  };

  const handleCreateEmployee = () => {
    // Handle employee creation logic here
    console.log("Creating employee:", newEmployee);
    setIsNewEmployeeModalOpen(false);
    // Reset form
    setNewEmployee({
      name: "",
      email: "",
      contact: "",
      role: "",
      department: ""
    });
  };

  const handleUpdateEmployee = () => {
    // Handle employee update logic here
    console.log("Updating employee:", editingEmployee);
    setIsEditEmployeeModalOpen(false);
    // Reset form
    setEditingEmployee({
      id: "",
      name: "",
      email: "",
      contact: "",
      role: "",
      department: ""
    });
  };

  return (
    <div className="flex-1 bg-background">
      {/* Header */}
      <div className="bg-primary-light px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-semibold text-primary">Employee Management</h1>
            <div className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
              {employees.length} Employees
            </div>
          </div>
          <Button 
            className="bg-primary hover:bg-primary-dark text-white"
            onClick={() => setIsNewEmployeeModalOpen(true)}
          >
            <Plus className="w-4 h-4 mr-2" />
            New Employee
          </Button>
        </div>
      </div>

      {/* Filters */}
      <div className="px-8 py-6 border-b border-qms-table-border">
        <div className="flex items-center gap-4">
          <Select value={roleFilter} onValueChange={setRoleFilter}>
            <SelectTrigger className="w-40 bg-white border-border">
              <SelectValue placeholder="All Roles" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Roles</SelectItem>
              <SelectItem value="employee">Employee</SelectItem>
              <SelectItem value="manager">Manager</SelectItem>
              <SelectItem value="admin">Admin</SelectItem>
            </SelectContent>
          </Select>

          <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
            <SelectTrigger className="w-48 bg-white border-border">
              <SelectValue placeholder="All Departments" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Departments</SelectItem>
              <SelectItem value="production">Production</SelectItem>
              <SelectItem value="quality">Quality</SelectItem>
              <SelectItem value="hr">HR</SelectItem>
              <SelectItem value="finance">Finance</SelectItem>
            </SelectContent>
          </Select>

          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-40 bg-white border-border">
              <SelectValue placeholder="All statuses" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All statuses</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
            </SelectContent>
          </Select>

          <Button 
            variant="outline" 
            onClick={resetFilters}
            className="ml-auto border-border"
          >
            Reset
          </Button>
        </div>
      </div>

      {/* Employee Table */}
      <div className="px-8 py-6">
        <div className="bg-white rounded-lg border border-qms-table-border overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-qms-table-header border-b border-qms-table-border">
                <th className="text-left py-4 px-6 font-medium text-primary">Name</th>
                <th className="text-left py-4 px-6 font-medium text-primary">Employee ID</th>
                <th className="text-left py-4 px-6 font-medium text-primary">Role</th>
                <th className="text-left py-4 px-6 font-medium text-primary">Department</th>
                <th className="text-left py-4 px-6 font-medium text-primary">Email</th>
                <th className="text-left py-4 px-6 font-medium text-primary">Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee, index) => (
                <tr key={index} className="border-b border-qms-table-border last:border-b-0 hover:bg-muted/30">
                  <td className="py-4 px-6 text-foreground">{employee.name}</td>
                  <td className="py-4 px-6 text-foreground">{employee.id}</td>
                  <td className="py-4 px-6 text-foreground">{employee.role}</td>
                  <td className="py-4 px-6 text-foreground">{employee.department}</td>
                  <td className="py-4 px-6 text-primary">{employee.email}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="w-8 h-8 p-0 hover:bg-muted"
                      >
                        <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="w-8 h-8 p-0 hover:bg-muted"
                        onClick={() => handleEditEmployee(employee)}
                      >
                        <Edit className="w-4 h-4 text-muted-foreground" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* New Employee Modal */}
      <Dialog open={isNewEmployeeModalOpen} onOpenChange={setIsNewEmployeeModalOpen}>
        <DialogContent className="sm:max-w-[500px] bg-white">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-primary">Add New Employee</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Create a new employee account. The employee will receive an email to confirm their account.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium text-foreground">Name</Label>
                <Input
                  id="name"
                  value={newEmployee.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="bg-white border-border"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-foreground">Email.com</Label>
                <Input
                  id="email"
                  type="email"
                  value={newEmployee.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="bg-white border-border"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="contact" className="text-sm font-medium text-foreground">Contact</Label>
                <Input
                  id="contact"
                  value={newEmployee.contact}
                  onChange={(e) => handleInputChange("contact", e.target.value)}
                  className="bg-white border-border"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role" className="text-sm font-medium text-foreground">Role</Label>
                <Select value={newEmployee.role} onValueChange={(value) => handleInputChange("role", value)}>
                  <SelectTrigger className="bg-white border-border">
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="employee">Employee</SelectItem>
                    <SelectItem value="manager">Manager</SelectItem>
                    <SelectItem value="admin">Admin</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label htmlFor="department" className="text-sm font-medium text-foreground">Department</Label>
                <Select value={newEmployee.department} onValueChange={(value) => handleInputChange("department", value)}>
                  <SelectTrigger className="bg-white border-border">
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="production">Production</SelectItem>
                    <SelectItem value="quality">Quality</SelectItem>
                    <SelectItem value="hr">HR</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button
              variant="outline"
              onClick={() => setIsNewEmployeeModalOpen(false)}
              className="border-border"
            >
              Cancel
            </Button>
            <Button
              onClick={handleCreateEmployee}
              className="bg-primary hover:bg-primary-dark text-white"
            >
              Create Employee
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Edit Employee Modal */}
      <Dialog open={isEditEmployeeModalOpen} onOpenChange={setIsEditEmployeeModalOpen}>
        <DialogContent className="sm:max-w-[500px] bg-white">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-primary">Edit Employee</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Update Employee Details
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="edit-name" className="text-sm font-medium text-foreground">Name</Label>
                <Input
                  id="edit-name"
                  value={editingEmployee.name}
                  onChange={(e) => handleEditInputChange("name", e.target.value)}
                  className="bg-white border-border"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-email" className="text-sm font-medium text-foreground">Email.com</Label>
                <Input
                  id="edit-email"
                  type="email"
                  value={editingEmployee.email}
                  onChange={(e) => handleEditInputChange("email", e.target.value)}
                  className="bg-white border-border"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="edit-contact" className="text-sm font-medium text-foreground">Contact</Label>
                <Input
                  id="edit-contact"
                  value={editingEmployee.contact}
                  onChange={(e) => handleEditInputChange("contact", e.target.value)}
                  className="bg-white border-border"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-role" className="text-sm font-medium text-foreground">Role</Label>
                <Select value={editingEmployee.role} onValueChange={(value) => handleEditInputChange("role", value)}>
                  <SelectTrigger className="bg-white border-border">
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="employee">Employee</SelectItem>
                    <SelectItem value="manager">Manager</SelectItem>
                    <SelectItem value="admin">Admin</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label htmlFor="edit-department" className="text-sm font-medium text-foreground">Department</Label>
                <Select value={editingEmployee.department} onValueChange={(value) => handleEditInputChange("department", value)}>
                  <SelectTrigger className="bg-white border-border">
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="production">Production</SelectItem>
                    <SelectItem value="quality">Quality</SelectItem>
                    <SelectItem value="hr">HR</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button
              variant="outline"
              onClick={() => setIsEditEmployeeModalOpen(false)}
              className="border-border"
            >
              Cancel
            </Button>
            <Button
              onClick={handleUpdateEmployee}
              className="bg-primary hover:bg-primary-dark text-white"
            >
              Update Employee
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}