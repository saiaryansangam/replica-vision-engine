import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import Index from "./pages/Index";
import EmployeesPage from "./pages/EmployeesPage";
import DocumentsPage from "./pages/DocumentsPage";
import TrainingPage from "./pages/TrainingPage";
import AuditPage from "./pages/AuditPage";
import LogsPage from "./pages/LogsPage";
import ChangeControlPage from "./pages/ChangeControlPage";
import CompanyOnboardingPage from "./pages/CompanyOnboardingPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="flex min-h-screen w-full bg-background">
            <AppSidebar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/employees" element={<EmployeesPage />} />
                <Route path="/documents" element={<DocumentsPage />} />
                <Route path="/training" element={<TrainingPage />} />
                <Route path="/audit" element={<AuditPage />} />
                <Route path="/logs" element={<LogsPage />} />
                <Route path="/change-control" element={<ChangeControlPage />} />
                <Route path="/onboarding" element={<CompanyOnboardingPage />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
