const statusStyles = {
  Compliant: "border-emerald-500/40 bg-emerald-500/10 text-emerald-400 light:text-emerald-600",
  Warning: "border-amber-500/40 bg-amber-500/10 text-amber-400 light:text-amber-600",
  "Action Needed": "border-red-500/40 bg-red-500/10 text-red-400 light:text-red-600",
};

export default function ComplianceCard({ framework }) {
  const progressColor =
    framework.status === "Compliant"
      ? "bg-emerald-500"
      : framework.status === "Warning"
      ? "bg-amber-500"
      : "bg-red-500";

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-colors duration-300 light:border-slate-200 light:bg-white">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-bold text-white light:text-slate-950">
            {framework.name}
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-400 light:text-slate-600">
            {framework.description}
          </p>
        </div>

        <span
          className={`rounded-full border px-3 py-1 text-xs font-semibold ${
            statusStyles[framework.status]
          }`}
        >
          {framework.status}
        </span>
      </div>

      <div className="mt-6">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="text-slate-400 light:text-slate-600">Score</span>
          <span className="font-bold text-white light:text-slate-950">
            {framework.score}%
          </span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-slate-800 light:bg-slate-200">
          <div
            className={`h-full rounded-full ${progressColor}`}
            style={{ width: `${framework.score}%` }}
          ></div>
        </div>
      </div>

      <div className="mt-5 space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-slate-400 light:text-slate-600">Open Issues</span>
          <span
            className={
              framework.openIssues > 0
                ? "text-red-400 light:text-red-600"
                : "text-emerald-400 light:text-emerald-600"
            }
          >
            {framework.openIssues}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400 light:text-slate-600">Last Scan</span>
          <span className="text-white light:text-slate-950">
            {framework.lastScan}
          </span>
        </div>
      </div>
    </div>
  );
}