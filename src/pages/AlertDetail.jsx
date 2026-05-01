import { AlertTriangle, ArrowLeft, FileDown, ShieldCheck } from "lucide-react";
import SeverityBadge from "../components/SeverityBadge";
import StatusBadge from "../components/StatusBadge";

export default function AlertDetail({ alert, onBack }) {
  const currentAlert = alert || {
    title: "Possible formjacking script detected on payment page",
    severity: "Critical",
    affectedPage: "/payment",
    category: "Malicious Script Injection",
    status: "Investigating",
    dateDetected: "2026-05-01",
    riskScore: 94,
  };

  function handleExport() {
    window.alert("Demo alert report export started.");
  }

  return (
    <section>
      <button
        onClick={onBack}
        className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-cyan-400 light:text-slate-600 light:hover:text-cyan-600"
      >
        <ArrowLeft size={18} />
        Back to Alerts
      </button>

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-colors duration-300 light:border-slate-200 light:bg-white">
        <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-start">
          <div>
            <h2 className="text-2xl font-bold text-white light:text-slate-950">
              Possible Formjacking Script Detected
            </h2>

            <div className="mt-5 grid gap-3 text-sm text-slate-300 light:text-slate-700 sm:grid-cols-2">
              <p>
                <span className="text-slate-500 light:text-slate-600">
                  Affected Page:
                </span>{" "}
                <span className="font-mono font-semibold text-white light:text-slate-950">
                  {currentAlert.affectedPage}
                </span>
              </p>

              <p>
                <span className="text-slate-500 light:text-slate-600">
                  Category:
                </span>{" "}
                <span className="font-semibold text-white light:text-slate-950">
                  {currentAlert.category}
                </span>
              </p>

              <p>
                <span className="text-slate-500 light:text-slate-600">
                  Date Detected:
                </span>{" "}
                <span className="font-semibold text-white light:text-slate-950">
                  {currentAlert.dateDetected}
                </span>
              </p>

              <p>
                <span className="text-slate-500 light:text-slate-600">
                  Risk Level:
                </span>{" "}
                <span className="font-semibold text-red-400 light:text-red-600">
                  {currentAlert.severity}
                </span>
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <SeverityBadge severity={currentAlert.severity} />
            <StatusBadge status={currentAlert.status} />
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-red-500/50 bg-red-500/5 p-6">
        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-red-400 light:text-red-600">
            <AlertTriangle size={26} />
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-lg font-bold text-white light:text-slate-950">
                Risk Summary
              </h3>
              <span className="text-3xl font-bold text-red-400 light:text-red-600">
                {currentAlert.riskScore}/100
              </span>
            </div>

            <p className="mt-3 max-w-3xl leading-7 text-slate-200 light:text-slate-700">
              A critical client-side risk has been detected on your payment page.
              This third-party script exhibits behavioral patterns consistent with
              formjacking and Magecart-style attacks, which target sensitive payment
              data during checkout.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-colors duration-300 light:border-slate-200 light:bg-white">
        <div className="mb-4 flex items-center gap-3">
          <ShieldCheck className="text-cyan-400 light:text-cyan-600" size={22} />
          <h3 className="text-lg font-bold text-white light:text-slate-950">
            What is Formjacking?
          </h3>
        </div>

        <p className="leading-7 text-slate-300 light:text-slate-700">
          Formjacking is a type of malicious script injection where attackers
          compromise websites to steal payment card data directly from checkout
          forms. This attack can intercept cardholder data as customers enter it,
          sending the information to unauthorized third parties before legitimate
          payment processing occurs.
        </p>

        <div className="mt-5 rounded-xl border border-red-500/30 bg-red-500/5 p-4">
          <h4 className="font-semibold text-white light:text-slate-950">
            Data at Risk
          </h4>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-300 light:text-slate-700">
            <li>Payment card numbers and CVV codes</li>
            <li>Cardholder names and billing addresses</li>
            <li>Personal information such as email and phone number</li>
            <li>Transaction metadata and session data</li>
          </ul>
        </div>
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-colors duration-300 light:border-slate-200 light:bg-white">
          <h3 className="text-lg font-bold text-white light:text-slate-950">
            Recommended Actions
          </h3>

          <ol className="mt-4 space-y-4 text-sm text-slate-300 light:text-slate-700">
            <li>1. Review the third-party script source and ownership.</li>
            <li>2. Block the script until the vendor is verified.</li>
            <li>3. Confirm whether the vendor is approved for payment pages.</li>
            <li>4. Re-scan the affected page after remediation.</li>
          </ol>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-colors duration-300 light:border-slate-200 light:bg-white">
          <h3 className="text-lg font-bold text-white light:text-slate-950">
            Related Frameworks
          </h3>

          <div className="mt-4 flex flex-wrap gap-3">
            {["PCI DSS 4.0.1", "GDPR", "CCPA/CPRA"].map((framework) => (
              <span
                key={framework}
                className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-sm font-semibold text-cyan-300 light:text-cyan-700"
              >
                {framework}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-colors duration-300 light:border-slate-200 light:bg-white">
        <h3 className="text-lg font-bold text-white light:text-slate-950">
          Activity Timeline
        </h3>

        <div className="mt-5 space-y-4">
          {[
            "Alert detected",
            "Script source analyzed",
            "Vendor marked as unknown",
            "Recommended action generated",
          ].map((item, index) => (
            <div key={item} className="flex gap-3">
              <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500 text-xs font-bold text-white">
                {index + 1}
              </div>
              <p className="text-sm text-slate-300 light:text-slate-700">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button className="rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-400">
          Mark as Resolved
        </button>

        <button
          onClick={handleExport}
          className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800 light:border-slate-300 light:text-slate-950 light:hover:bg-slate-100"
        >
          <FileDown size={18} />
          Export Alert Report
        </button>
      </div>
    </section>
  );
}