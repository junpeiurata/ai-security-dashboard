import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./pages/Dashboard";
import Alerts from "./pages/Alerts";
import AlertDetail from "./pages/AlertDetail";
import Compliance from "./pages/Compliance";
import Settings from "./pages/Settings";

export default function App() {
  const [activePage, setActivePage] = useState("overview");
  const [selectedAlert, setSelectedAlert] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : true;
  });
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  function handleViewAlertDetails(alert) {
    setSelectedAlert(alert);
    setActivePage("alert-detail");
  }

  function handleBackToAlerts() {
    setSelectedAlert(null);
    setActivePage("alerts");
  }

  function handleNavigate(page) {
    setActivePage(page);
    setIsMobileSidebarOpen(false);
  }

  function renderPage() {
    if (activePage === "overview") return <Dashboard />;

    if (activePage === "alerts") {
      return <Alerts onViewDetails={handleViewAlertDetails} />;
    }

    if (activePage === "alert-detail") {
      return <AlertDetail alert={selectedAlert} onBack={handleBackToAlerts} />;
    }

    if (activePage === "compliance") return <Compliance />;

    if (activePage === "settings") return <Settings />;

    return <Dashboard />;
  }

  return (
    <div className={isDarkMode ? "dark" : "light"}>
      <div className="min-h-screen overflow-x-hidden bg-slate-950 text-slate-100 transition-colors duration-300 light:bg-slate-50 light:text-slate-950">
        <div className="flex min-h-screen overflow-x-hidden">
          <Sidebar
            activePage={activePage}
            setActivePage={handleNavigate}
            isMobileSidebarOpen={isMobileSidebarOpen}
            onCloseMobileSidebar={() => setIsMobileSidebarOpen(false)}
          />

          <main className="min-w-0 flex-1 overflow-x-hidden">
            <Topbar
              isDarkMode={isDarkMode}
              onToggleTheme={() => setIsDarkMode(!isDarkMode)}
              onOpenMobileSidebar={() => setIsMobileSidebarOpen(true)}
            />

            <div className="p-4 sm:p-6 lg:p-8">{renderPage()}</div>
          </main>
        </div>
      </div>
    </div>
  );
}