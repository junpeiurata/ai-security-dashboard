import StatCard from "../components/StatCard";
import RiskTrendChart from "../components/RiskTrendChart";
import {
  overviewStats,
  riskTrendData,
  recentAlerts,
  riskyPages,
} from "../data/dashboardData";

export default function Dashboard() {
  return (
    <section>
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold text-white">Security Overview</h2>
        <p className="text-slate-400">
          Real-time monitoring of client-side risks and compliance status.
        </p>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {overviewStats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-white">
            Client-Side Risk Trend
          </h3>
          <p className="mt-1 text-sm text-slate-400">
            Security alerts detected over the past 2 weeks.
          </p>
        </div>

        <RiskTrendChart data={riskTrendData} />
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">
              Recent Security Alerts
            </h3>
            <button className="text-sm font-medium text-cyan-400 hover:text-cyan-300">
              View all
            </button>
          </div>

          <div className="space-y-3">
            {recentAlerts.map((alert) => (
              <div
                key={alert.title}
                className="rounded-xl border border-slate-800 bg-slate-950 p-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-medium text-white">{alert.title}</h4>
                    <p className="mt-2 text-sm text-slate-400">
                      {alert.page} • {alert.category}
                    </p>
                  </div>

                  <span className="rounded-full border border-red-500/40 bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-400">
                    {alert.severity}
                  </span>
                </div>

                <span className="mt-3 inline-flex rounded-full border border-amber-500/40 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-400">
                  {alert.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h3 className="mb-4 text-lg font-semibold text-white">
            High-Risk Digital Journeys
          </h3>

          <div className="space-y-4">
            {riskyPages.map((item) => (
              <div
                key={item.page}
                className="rounded-xl border border-slate-800 bg-slate-950 p-4"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-mono text-sm font-semibold text-white">
                    {item.page}
                  </span>
                  <span className="text-sm font-bold text-red-400">
                    {item.score} / 100
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                  <div
                    className="h-full rounded-full bg-red-500"
                    style={{ width: `${item.score}%` }}
                  ></div>
                </div>

                <p className="mt-2 text-sm text-slate-400">
                  {item.alerts} active alerts
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}