import { Bell, Moon, Search } from "lucide-react";

export default function Topbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-800 bg-slate-900/70 px-6">
      <div className="flex w-full max-w-md items-center gap-3 rounded-xl bg-slate-950 px-4 py-2 text-slate-400">
        <Search size={18} />
        <span className="text-sm">Search alerts, pages, scripts...</span>
      </div>

      <div className="flex items-center gap-4">
        <button className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white">
          <Moon size={18} />
        </button>

        <button className="relative rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white">
          <Bell size={18} />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"></span>
        </button>

        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-500 text-sm font-bold text-white">
          JD
        </div>
      </div>
    </header>
  );
}