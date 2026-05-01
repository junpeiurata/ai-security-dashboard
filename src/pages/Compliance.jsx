import { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Download, FileCheck, ShieldCheck, AlertTriangle } from "lucide-react";
import ComplianceCard from "../components/ComplianceCard";
import SeverityBadge from "../components/SeverityBadge";
import {
  auditEvidence,
  complianceFrameworks,
  complianceGaps,
  complianceTrendData,
} from "../data/complianceData";

export default function Compliance() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  function handleGenerateReport() {
    alert(
      "Demo compliance report generated. In a real product, this would export audit-ready evidence."
    );
  }

  if (isLoading) {
    return <ComplianceLoadingState />;
  }

  return (
    <section>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Compliance</h2>
          <p className="mt-2 text-slate-400">
            Monitor regulatory compliance and audit-ready evidence.
          </p>
        </div>

        <button
          onClick={handleGenerateReport}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-white hover:bg-cyan-400"
        >
          <Download size={18} />
          Generate Compliance Report
        </button>
      </div>

      <div className="mt-6 rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-500 p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-white/90">
              Overall Compliance Score
            </p>

            <div className="mt-5 flex flex-wrap items-end gap-3">
              <h3 className="text-5xl font-bold text-white">87%</h3>
              <p className="pb-2 text-sm font-semibold text-white">
                ↗ +4% this month
              </p>
            </div>
          </div>

          <div className="hidden h-16 w-16 items-center justify-center rounded-2xl bg-white/20 text-white sm:flex">
            <ShieldCheck size={34} />
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-white">
            Compliance Trend
          </h3>
          <p className="mt-1 text-sm text-slate-400">
            Overall compliance score over time.
          </p>
        </div>

        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={complianceTrendData}>
              <CartesianGrid strokeDasharray="4 4" stroke="#334155" />
              <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} />
              <YAxis domain={[70, 100]} stroke="#94a3b8" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#0f172a",
                  border: "1px solid #334155",
                  borderRadius: "12px",
                  color: "#fff",
                }}
              />
              <Area
                type="monotone"
                dataKey="score"
                stroke="#06b6d4"
                fill="#06b6d4"
                fillOpacity={0.2}
                strokeWidth={3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="mb-4 text-lg font-semibold text-white">
          Compliance Frameworks
        </h3>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {complianceFrameworks.map((framework) => (
            <ComplianceCard key={framework.name} framework={framework} />
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <div className="mb-5 flex items-center gap-3">
            <AlertTriangle className="text-amber-400" size={22} />
            <h3 className="text-lg font-semibold text-white">
              Compliance Gaps
            </h3>
          </div>

          <div className="space-y-4">
            {complianceGaps.map((gap) => (
              <div
                key={gap.title}
                className="rounded-xl border border-slate-800 bg-slate-950 p-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-medium text-white">{gap.title}</h4>
                    <p className="mt-2 text-sm text-slate-400">
                      {gap.framework} •{" "}
                      <span className="font-mono">{gap.page}</span>
                    </p>
                  </div>

                  <SeverityBadge severity={gap.severity} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <div className="mb-5 flex items-center gap-3">
            <FileCheck className="text-cyan-400" size={22} />
            <h3 className="text-lg font-semibold text-white">
              Audit-Ready Evidence
            </h3>
          </div>

          <div className="space-y-4">
            {auditEvidence.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950 p-4"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                  <ShieldCheck size={18} />
                </div>
                <p className="text-sm text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ComplianceLoadingState() {
  return (
    <section>
      <div>
        <h2 className="text-2xl font-bold text-white">Compliance</h2>
        <p className="mt-2 text-slate-400">
          Analyzing compliance status and preparing audit evidence...
        </p>
      </div>

      <div className="mt-6 h-36 animate-pulse rounded-2xl bg-slate-800"></div>

      <div className="mt-6 h-80 animate-pulse rounded-2xl bg-slate-800"></div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="h-56 animate-pulse rounded-2xl bg-slate-800"
          ></div>
        ))}
      </div>
    </section>
  );
}