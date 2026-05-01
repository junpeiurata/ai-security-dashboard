import { ShieldCheck } from "lucide-react";

export default function EmptyState({ onClearFilters }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-800 bg-slate-900 p-12 text-center transition-colors duration-300 light:border-slate-200 light:bg-white">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-800 text-cyan-400 light:bg-cyan-50 light:text-cyan-600">
        <ShieldCheck size={28} />
      </div>

      <h3 className="text-lg font-semibold text-white light:text-slate-950">
        No alerts found
      </h3>

      <p className="mt-2 max-w-md text-sm text-slate-400 light:text-slate-600">
        Try adjusting your filters or search term to find matching security alerts.
      </p>

      <button
        onClick={onClearFilters}
        className="mt-5 rounded-xl bg-cyan-500 px-4 py-2 text-sm font-semibold text-white hover:bg-cyan-400"
      >
        Clear Filters
      </button>
    </div>
  );
}