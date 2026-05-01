export default function AlertDetail({ onBack }) {
  return (
    <section>
      <button
        onClick={onBack}
        className="mb-6 text-sm text-slate-400 hover:text-cyan-400"
      >
        ← Back to Alerts
      </button>

      <h2 className="text-2xl font-bold text-white">
        Possible Formjacking Script Detected
      </h2>

      <p className="mt-2 text-slate-400">
        Critical client-side risk detected on the payment page.
      </p>

      <div className="mt-6 rounded-2xl border border-red-500/40 bg-slate-900 p-6">
        Alert detail content will go here.
      </div>
    </section>
  );
}