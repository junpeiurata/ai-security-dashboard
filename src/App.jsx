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
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="flex min-h-screen">
        <Sidebar activePage={activePage} setActivePage={setActivePage} />

        <main className="flex-1">
          <Topbar />
          <div className="p-6 lg:p-8">{renderPage()}</div>
        </main>
      </div>
    </div>
  );
}