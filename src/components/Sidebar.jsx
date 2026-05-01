import {
  AlertTriangle,
  LayoutDashboard,
  Settings,
  ShieldCheck,
  X,
} from "lucide-react";

const navItems = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "alerts", label: "Alerts", icon: AlertTriangle },
  { id: "compliance", label: "Compliance", icon: ShieldCheck },
  { id: "settings", label: "Settings", icon: Settings },
];

export default function Sidebar({
  activePage,
  setActivePage,
  isMobileSidebarOpen,
  onCloseMobileSidebar,
}) {
  return (
    <>
      <aside className="hidden min-h-screen w-64 shrink-0 border-r border-slate-800 bg-slate-900/80 p-4 transition-colors duration-300 md:block light:border-slate-200 light:bg-white">
        <SidebarContent activePage={activePage} setActivePage={setActivePage} />
      </aside>

      {isMobileSidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <button
            className="absolute inset-0 bg-black/60"
            onClick={onCloseMobileSidebar}
            aria-label="Close navigation overlay"
          ></button>

          <aside className="relative h-full w-72 border-r border-slate-800 bg-slate-900 p-4 shadow-2xl transition-colors duration-300 light:border-slate-200 light:bg-white">
            <div className="mb-4 flex justify-end">
              <button
                onClick={onCloseMobileSidebar}
                className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white light:text-slate-600 light:hover:bg-slate-100 light:hover:text-slate-950"
                aria-label="Close navigation"
              >
                <X size={22} />
              </button>
            </div>

            <SidebarContent
              activePage={activePage}
              setActivePage={setActivePage}
            />
          </aside>
        </div>
      )}
    </>
  );
}

function SidebarContent({ activePage, setActivePage }) {
  return (
    <>
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500 text-white">
          <ShieldCheck size={22} />
        </div>

        <div>
          <h1 className="text-sm font-bold text-white light:text-slate-950">
            AI Security
          </h1>
          <p className="text-xs text-slate-400 light:text-slate-500">
            Dashboard
          </p>
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
                  : "text-slate-400 hover:bg-slate-800 hover:text-white light:text-slate-600 light:hover:bg-slate-100 light:hover:text-slate-950"
              }`}
            >
              <Icon size={18} />
              {item.label}
            </button>
          );
        })}
      </nav>
    </>
  );
}