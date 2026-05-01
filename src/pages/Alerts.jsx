export default function Alerts({ onViewDetails }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-white">Security Alerts</h2>
      <p className="mt-2 text-slate-400">
        Monitor client-side risks and malicious script detection across all pages.
      </p>

      <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <p className="text-slate-300">Alerts table will go here.</p>

        <button
          onClick={onViewDetails}
          className="mt-4 rounded-xl bg-cyan-500 px-4 py-2 text-sm font-semibold text-white hover:bg-cyan-400"
        >
          View Details
        </button>
      </div>
    </section>
  );
}