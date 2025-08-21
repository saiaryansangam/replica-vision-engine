import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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

  const resetFilters = () => {
    setRoleFilter("all");
    setDepartmentFilter("all"); 
    setStatusFilter("all");
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
          <Button className="bg-primary hover:bg-primary-dark text-white">
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
    </div>
  );
}