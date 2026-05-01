import { Bell, Menu, Moon, Search, Sun } from "lucide-react";

export default function Topbar({
  isDarkMode,
  onToggleTheme,
  onOpenMobileSidebar,
}) {
  return (
    <header className="flex h-16 items-center justify-between gap-3 border-b border-slate-800 bg-slate-900/70 px-4 transition-colors duration-300 light:border-slate-200 light:bg-white sm:px-6">
      <button
        onClick={onOpenMobileSidebar}
        className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white md:hidden light:text-slate-600 light:hover:bg-slate-100 light:hover:text-slate-950"
        aria-label="Open navigation"
      >
        <Menu size={22} />
      </button>

      <div className="flex min-w-0 flex-1 items-center gap-3 rounded-xl bg-slate-950 px-4 py-2 text-slate-400 transition-colors duration-300 light:bg-slate-100 light:text-slate-500 md:max-w-md">
        <Search size={18} className="shrink-0" />
        <span className="truncate text-sm">Search alerts, pages, scripts...</span>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <button
          onClick={onToggleTheme}
          className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white light:text-slate-600 light:hover:bg-slate-100 light:hover:text-slate-950"
          aria-label="Toggle theme"
        >
          {isDarkMode ? <Moon size={18} /> : <Sun size={18} />}
        </button>

        <button className="relative rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white light:text-slate-600 light:hover:bg-slate-100 light:hover:text-slate-950">
          <Bell size={18} />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"></span>
        </button>

        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-500 text-sm font-bold text-white">
          JU
        </div>
      </div>
    </header>
  );
}