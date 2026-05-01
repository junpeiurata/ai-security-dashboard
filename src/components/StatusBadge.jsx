const statusStyles = {
  Open: "border-blue-500/40 bg-blue-500/10 text-blue-400",
  Investigating: "border-amber-500/40 bg-amber-500/10 text-amber-400",
  Resolved: "border-emerald-500/40 bg-emerald-500/10 text-emerald-400",
};

export default function StatusBadge({ status }) {
  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${
        statusStyles[status] || statusStyles.Open
      }`}
    >
      {status}
    </span>
  );
}