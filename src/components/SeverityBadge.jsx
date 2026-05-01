const severityStyles = {
  Critical: "border-red-500/40 bg-red-500/10 text-red-400",
  High: "border-rose-500/40 bg-rose-500/10 text-rose-400",
  Medium: "border-amber-500/40 bg-amber-500/10 text-amber-400",
  Low: "border-blue-500/40 bg-blue-500/10 text-blue-400",
};

export default function SeverityBadge({ severity }) {
  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${
        severityStyles[severity] || severityStyles.Low
      }`}
    >
      {severity}
    </span>
  );
}