import { LayoutDashboard, AlertTriangle, ShieldCheck, Settings } from "lucide-react";

export default function Sidebar({ activePage, setActivePage }) {
  const navItems = [
    {
      id: "overview",
      label: "Overview",
      icon: LayoutDashboard,
    },
    {
      id: "alerts",
      label: "Alerts",
      icon: AlertTriangle,
    },
    {
      id: "compliance",
      label: "Compliance",
      icon: ShieldCheck,
    },
    {
      id: "settings",
      label: "Settings",
      icon: Settings,
    },
  ];

  return (
    <aside className="hidden min-h-screen w-64 border-r border-slate-800 bg-slate-900/80 p-4 md:block">
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500 text-white">
          <ShieldCheck size={22} />
        </div>
        <div>
          <h1 className="text-sm font-bold text-white">AI Security</h1>
          <p className="text-xs text-slate-400">Dashboard</p>
        </div>
      </div>

      <nav className="space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            activePage === item.id ||
            (activePage === "alert-detail" && item.id === "alerts");

          return (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm transition ${
                isActive
                  ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/20"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <Icon size={18} />
              {item.label}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}