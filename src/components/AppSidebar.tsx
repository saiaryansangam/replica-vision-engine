import { 
  LayoutDashboard, 
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
  FileBarChart,
  UserCircle
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { 
  Sidebar, 
  SidebarContent, 
  SidebarGroup, 
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

const coreModules = [
  { title: "Dashboard", icon: LayoutDashboard, url: "/" },
  { title: "Document Management", icon: FileText, url: "/documents" },
  { title: "CAPA Management", icon: AlertTriangle, url: "/capa" },
  { title: "Audit Management", icon: Shield, url: "/audit" },
  { title: "Training Management", icon: GraduationCap, url: "/training" },
];

const administration = [
  { title: "Employee Management", icon: Users, url: "/employees" },
  { title: "Workflow Management", icon: Settings, url: "/workflow" },
  { title: "Company Onboarding", icon: FolderOpen, url: "/onboarding" },
  { title: "Project Management", icon: Briefcase, url: "/projects" },
  { title: "Change Control Management", icon: RotateCcw, url: "/change-control" },
];

const analytics = [
  { title: "Reports & Analytics", icon: BarChart3, url: "/reports" },
  { title: "Log Management", icon: FileBarChart, url: "/logs" },
];

const more = [
  { title: "Profile", icon: UserCircle, url: "/profile" },
];

export function AppSidebar() {
  return (
    <Sidebar className="w-64 bg-qms-sidebar border-r border-qms-table-border">
      {/* Logo Section */}
      <div className="p-6 border-b border-qms-table-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">Q</span>
          </div>
          <div>
            <h1 className="font-semibold text-primary text-lg">i-QMS</h1>
            <p className="text-xs text-qms-sidebar-item">Quality Management</p>
          </div>
        </div>
      </div>

      <SidebarContent className="px-4 py-6">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-medium text-qms-sidebar-item mb-3 uppercase tracking-wider">
            Core Modules
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {coreModules.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="w-full">
                    <NavLink 
                      to={item.url}
                      className={({ isActive }) => cn(
                        "flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors",
                        isActive 
                          ? "bg-qms-sidebar-active text-white" 
                          : "text-qms-sidebar-item hover:bg-qms-sidebar-hover hover:text-primary"
                      )}
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-8">
          <SidebarGroupLabel className="text-xs font-medium text-qms-sidebar-item mb-3 uppercase tracking-wider">
            Administration
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {administration.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="w-full">
                    <NavLink 
                      to={item.url}
                      className={({ isActive }) => cn(
                        "flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors",
                        isActive 
                          ? "bg-qms-sidebar-active text-white" 
                          : "text-qms-sidebar-item hover:bg-qms-sidebar-hover hover:text-primary"
                      )}
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-8">
          <SidebarGroupLabel className="text-xs font-medium text-qms-sidebar-item mb-3 uppercase tracking-wider">
            Analytics
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {analytics.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="w-full">
                    <NavLink 
                      to={item.url}
                      className={({ isActive }) => cn(
                        "flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors",
                        isActive 
                          ? "bg-qms-sidebar-active text-white" 
                          : "text-qms-sidebar-item hover:bg-qms-sidebar-hover hover:text-primary"
                      )}
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-8">
          <SidebarGroupLabel className="text-xs font-medium text-qms-sidebar-item mb-3 uppercase tracking-wider">
            More
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {more.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="w-full">
                    <NavLink 
                      to={item.url}
                      className={({ isActive }) => cn(
                        "flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors",
                        isActive 
                          ? "bg-qms-sidebar-active text-white" 
                          : "text-qms-sidebar-item hover:bg-qms-sidebar-hover hover:text-primary"
                      )}
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}