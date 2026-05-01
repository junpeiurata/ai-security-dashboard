import { useState } from "react";
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
  const [isDarkMode, setIsDarkMode] = useState(true);

  function handleViewAlertDetails(alert) {
    setSelectedAlert(alert);
    setActivePage("alert-detail");
  }

  function handleBackToAlerts() {
    setSelectedAlert(null);
    setActivePage("alerts");
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
          <Sidebar activePage={activePage} setActivePage={setActivePage} />

          <main className="min-w-0 flex-1 overflow-x-hidden">
            <Topbar
              isDarkMode={isDarkMode}
              onToggleTheme={() => setIsDarkMode(!isDarkMode)}
            />

            <div className="p-6 lg:p-8">{renderPage()}</div>
          </main>
        </div>
      </div>
    </div>
  );
}