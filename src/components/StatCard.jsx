import { ShieldCheck, AlertTriangle, Code2, Globe2 } from "lucide-react";

const iconMap = {
  shield: ShieldCheck,
  warning: AlertTriangle,
  code: Code2,
  globe: Globe2,
};

const toneStyles = {
  success: {
    icon: "bg-emerald-500",
    change: "text-emerald-400",
  },
  danger: {
    icon: "bg-red-500",
    change: "text-red-400",
  },
  info: {
    icon: "bg-cyan-500",
    change: "text-cyan-400",
  },
};

export default function StatCard({ label, value, change, tone, icon }) {
  const Icon = iconMap[icon];
  const styles = toneStyles[tone];

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-slate-400">{label}</p>
          <h3 className="mt-3 text-3xl font-bold text-white">{value}</h3>
          <p className={`mt-3 text-sm ${styles.change}`}>{change}</p>
        </div>

        <div className={`rounded-xl p-3 text-white ${styles.icon}`}>
          <Icon size={22} />
        </div>
      </div>
    </div>
  );
}