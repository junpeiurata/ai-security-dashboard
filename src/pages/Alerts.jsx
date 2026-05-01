import { useEffect, useMemo, useState } from "react";
import { Download, Filter, Search } from "lucide-react";
import { alerts } from "../data/alertsData";
import SeverityBadge from "../components/SeverityBadge";
import StatusBadge from "../components/StatusBadge";
import EmptyState from "../components/EmptyState";

export default function Alerts({ onViewDetails }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [severityFilter, setSeverityFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  const filteredAlerts = useMemo(() => {
    return alerts.filter((alert) => {
      const matchesSearch =
        alert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        alert.affectedPage.toLowerCase().includes(searchTerm.toLowerCase()) ||
        alert.category.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesSeverity =
        severityFilter === "All" || alert.severity === severityFilter;

      const matchesStatus =
        statusFilter === "All" || alert.status === statusFilter;

      return matchesSearch && matchesSeverity && matchesStatus;
    });
  }, [searchTerm, severityFilter, statusFilter]);

  function clearFilters() {
    setSearchTerm("");
    setSeverityFilter("All");
    setStatusFilter("All");
  }

  function handleExport() {
    window.alert(
      "Demo export started. In a real product, this would download a CSV report."
    );
  }

  if (isLoading) {
    return <AlertsLoadingState />;
  }

  return (
    <section className="max-w-full overflow-x-hidden">
      <div>
        <h2 className="text-2xl font-bold text-white light:text-slate-950">
          Security Alerts
        </h2>

        <p className="mt-2 text-slate-400 light:text-slate-600">
          Monitor client-side risks and malicious script detection across all
          pages.
        </p>
      </div>

      <div className="mt-6 max-w-full rounded-2xl border border-slate-800 bg-slate-900 p-4 transition-colors duration-300 light:border-slate-200 light:bg-white">
        <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_auto_auto_auto]">
          <div className="flex min-w-0 items-center gap-3 rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-400 light:border-slate-300 light:bg-slate-50 light:text-slate-500">
            <Search size={18} className="shrink-0" />

            <input
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search alerts..."
              className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-slate-500 light:text-slate-950 light:placeholder:text-slate-400"
            />
          </div>

          <div className="flex items-center gap-2">
            <Filter size={18} className="shrink-0 text-slate-400 light:text-slate-500" />

            <select
              value={severityFilter}
              onChange={(event) => setSeverityFilter(event.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none light:border-slate-300 light:bg-white light:text-slate-950 lg:w-auto"
            >
              <option value="All">All Severities</option>
              <option value="Critical">Critical</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>

          <select
            value={statusFilter}
            onChange={(event) => setStatusFilter(event.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none light:border-slate-300 light:bg-white light:text-slate-950 lg:w-auto"
          >
            <option value="All">All Statuses</option>
            <option value="Open">Open</option>
            <option value="Investigating">Investigating</option>
            <option value="Resolved">Resolved</option>
          </select>

          <button
            onClick={handleExport}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-white hover:bg-cyan-400 lg:w-auto"
          >
            <Download size={18} />
            Export
          </button>
        </div>
      </div>

      <div className="mt-6 max-w-full overflow-hidden">
        {filteredAlerts.length === 0 ? (
          <EmptyState onClearFilters={clearFilters} />
        ) : (
          <div className="max-w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition-colors duration-300 light:border-slate-200 light:bg-white">
            <div className="max-w-full overflow-x-auto">
              <table className="w-full min-w-[900px] text-left">
                <thead className="border-b border-slate-800 bg-slate-900 text-sm text-slate-400 light:border-slate-200 light:bg-slate-50 light:text-slate-600">
                  <tr>
                    <th className="px-5 py-4 font-semibold">Alert</th>
                    <th className="px-5 py-4 font-semibold">Severity</th>
                    <th className="px-5 py-4 font-semibold">Affected Page</th>
                    <th className="px-5 py-4 font-semibold">Category</th>
                    <th className="px-5 py-4 font-semibold">Status</th>
                    <th className="px-5 py-4 font-semibold">Date Detected</th>
                    <th className="px-5 py-4 font-semibold">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredAlerts.map((alert) => (
                    <tr
                      key={alert.id}
                      className="border-b border-slate-800 last:border-b-0 light:border-slate-200"
                    >
                      <td className="px-5 py-5">
                        <p className="max-w-xs font-medium text-white light:text-slate-950">
                          {alert.title}
                        </p>
                      </td>

                      <td className="px-5 py-5">
                        <SeverityBadge severity={alert.severity} />
                      </td>

                      <td className="px-5 py-5">
                        <span className="font-mono text-sm text-white light:text-slate-950">
                          {alert.affectedPage}
                        </span>
                      </td>

                      <td className="px-5 py-5 text-sm text-slate-300 light:text-slate-600">
                        {alert.category}
                      </td>

                      <td className="px-5 py-5">
                        <StatusBadge status={alert.status} />
                      </td>

                      <td className="px-5 py-5 text-sm text-slate-300 light:text-slate-600">
                        {alert.dateDetected}
                      </td>

                      <td className="px-5 py-5">
                        <button
                          onClick={() => onViewDetails(alert)}
                          className="text-sm font-semibold text-cyan-400 hover:text-cyan-300 light:text-cyan-600 light:hover:text-cyan-500"
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function AlertsLoadingState() {
  return (
    <section className="max-w-full overflow-x-hidden">
      <div>
        <h2 className="text-2xl font-bold text-white light:text-slate-950">
          Security Alerts
        </h2>

        <p className="mt-2 text-slate-400 light:text-slate-600">
          Loading security alerts and analyzing client-side risk signals...
        </p>
      </div>

      <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900 p-4 light:border-slate-200 light:bg-white">
        <div className="h-12 animate-pulse rounded-xl bg-slate-800 light:bg-slate-200"></div>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 light:border-slate-200 light:bg-white">
        {[1, 2, 3, 4, 5].map((item) => (
          <div
            key={item}
            className="grid grid-cols-6 gap-4 border-b border-slate-800 p-5 last:border-b-0 light:border-slate-200"
          >
            <div className="col-span-2 h-5 animate-pulse rounded bg-slate-800 light:bg-slate-200"></div>
            <div className="h-5 animate-pulse rounded bg-slate-800 light:bg-slate-200"></div>
            <div className="h-5 animate-pulse rounded bg-slate-800 light:bg-slate-200"></div>
            <div className="h-5 animate-pulse rounded bg-slate-800 light:bg-slate-200"></div>
            <div className="h-5 animate-pulse rounded bg-slate-800 light:bg-slate-200"></div>
          </div>
        ))}
      </div>
    </section>
  );
}