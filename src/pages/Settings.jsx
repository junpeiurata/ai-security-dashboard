import { useState } from "react";
import {
  Bell,
  KeyRound,
  Moon,
  Save,
  ShieldCheck,
  User,
  Globe,
  ScanLine,
} from "lucide-react";

export default function Settings() {
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [criticalAlerts, setCriticalAlerts] = useState(true);
  const [weeklyReports, setWeeklyReports] = useState(false);
  const [autoScan, setAutoScan] = useState(true);
  const [blockUnknownScripts, setBlockUnknownScripts] = useState(false);

  function handleSave() {
    alert("Demo settings saved. In a real product, these preferences would be stored for the account.");
  }

  return (
    <section>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white light:text-slate-950">
            Settings
          </h2>
          <p className="mt-2 text-slate-400 light:text-slate-600">
            Manage account preferences, alert notifications, and security scan settings.
          </p>
        </div>

        <button
          onClick={handleSave}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-white hover:bg-cyan-400"
        >
          <Save size={18} />
          Save Changes
        </button>
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-2">
        <SettingsCard
          icon={<User size={22} />}
          title="Profile & Account"
          description="Basic workspace and account information."
        >
          <div className="space-y-4">
            <InputField label="Full Name" value="Junpei Urata" />
            <InputField label="Work Email" value="junpei_u@company.com" />
            <InputField label="Company" value="Northstar Digital" />
            <InputField label="Role" value="Security Operations Lead" />
          </div>
        </SettingsCard>

        <SettingsCard
          icon={<Bell size={22} />}
          title="Notification Preferences"
          description="Choose which security events should trigger notifications."
        >
          <div className="space-y-4">
            <ToggleRow
              title="Email alerts"
              description="Receive email updates for new client-side risks."
              enabled={emailAlerts}
              onToggle={() => setEmailAlerts(!emailAlerts)}
            />

            <ToggleRow
              title="Critical alert escalation"
              description="Immediately notify the team when critical threats are detected."
              enabled={criticalAlerts}
              onToggle={() => setCriticalAlerts(!criticalAlerts)}
            />

            <ToggleRow
              title="Weekly compliance summary"
              description="Send a weekly report of compliance status and open issues."
              enabled={weeklyReports}
              onToggle={() => setWeeklyReports(!weeklyReports)}
            />
          </div>
        </SettingsCard>

        <SettingsCard
          icon={<ScanLine size={22} />}
          title="Scan Preferences"
          description="Control how the dashboard monitors websites and third-party scripts."
        >
          <div className="space-y-4">
            <ToggleRow
              title="Automatic website scans"
              description="Continuously scan monitored pages for suspicious scripts and data flows."
              enabled={autoScan}
              onToggle={() => setAutoScan(!autoScan)}
            />

            <ToggleRow
              title="Block unknown scripts"
              description="Flag and block unapproved scripts from high-risk digital journeys."
              enabled={blockUnknownScripts}
              onToggle={() => setBlockUnknownScripts(!blockUnknownScripts)}
            />

            <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 light:border-slate-200 light:bg-slate-50">
              <label className="text-sm font-medium text-slate-300 light:text-slate-700">
                Scan frequency
              </label>

              <select className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white outline-none light:border-slate-300 light:bg-white light:text-slate-950">
                <option>Every 15 minutes</option>
                <option>Every hour</option>
                <option>Every 6 hours</option>
                <option>Once per day</option>
              </select>
            </div>
          </div>
        </SettingsCard>

        <SettingsCard
          icon={<Moon size={22} />}
          title="Appearance"
          description="Theme preference for the dashboard interface."
        >
          <div className="grid gap-3 sm:grid-cols-2">
            <button className="rounded-xl border border-cyan-500 bg-cyan-500/10 p-4 text-left">
              <p className="font-semibold text-white light:text-slate-950">
                Dark Mode
              </p>
              <p className="mt-2 text-sm text-slate-400 light:text-slate-600">
                Optimized for security monitoring.
              </p>
            </button>

            <button className="rounded-xl border border-slate-700 bg-slate-950 p-4 text-left hover:border-slate-500 light:border-slate-200 light:bg-white light:hover:border-slate-400">
              <p className="font-semibold text-white light:text-slate-950">
                Light Mode
              </p>
              <p className="mt-2 text-sm text-slate-400 light:text-slate-600">
                Cleaner layout for reporting.
              </p>
            </button>
          </div>

          <p className="mt-4 rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm text-slate-400 light:border-slate-200 light:bg-slate-50 light:text-slate-600">
            Use the theme icon in the top bar to switch between dark and light mode.
          </p>
        </SettingsCard>
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <SettingsCard
          icon={<KeyRound size={22} />}
          title="API Key"
          description="Use this demo API key to connect monitored websites."
        >
          <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 light:border-slate-200 light:bg-slate-50">
            <label className="text-sm font-medium text-slate-300 light:text-slate-700">
              Demo API Key
            </label>

            <div className="mt-3 flex flex-col gap-3 sm:flex-row">
              <code className="flex-1 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-cyan-300 light:border-slate-300 light:bg-white light:text-cyan-700">
                sk_demo_••••••••••••••••7892
              </code>

              <button
                onClick={() => alert("Demo API key copied.")}
                className="rounded-xl border border-slate-700 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800 light:border-slate-300 light:text-slate-950 light:hover:bg-slate-100"
              >
                Copy
              </button>
            </div>
          </div>
        </SettingsCard>

        <SettingsCard
          icon={<Globe size={22} />}
          title="Monitored Websites"
          description="Web properties currently connected to this workspace."
        >
          <div className="space-y-3">
            {["company.com", "checkout.company.com", "portal.company.com"].map(
              (site) => (
                <div
                  key={site}
                  className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950 p-4 light:border-slate-200 light:bg-slate-50"
                >
                  <span className="font-mono text-sm text-white light:text-slate-950">
                    {site}
                  </span>
                  <span className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400 light:text-emerald-600">
                    Active
                  </span>
                </div>
              )
            )}
          </div>
        </SettingsCard>
      </div>

      <div className="mt-6 rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500 text-white">
            <ShieldCheck size={24} />
          </div>

          <div>
            <h3 className="font-bold text-white light:text-slate-950">
              Security settings are configured for demo mode
            </h3>
            <p className="mt-1 text-sm text-slate-300 light:text-slate-600">
              This portfolio project uses mock data, so settings are interactive but not connected to a backend.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SettingsCard({ icon, title, description, children }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-colors duration-300 light:border-slate-200 light:bg-white">
      <div className="mb-5 flex items-start gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 light:bg-cyan-50 light:text-cyan-600">
          {icon}
        </div>

        <div>
          <h3 className="font-bold text-white light:text-slate-950">
            {title}
          </h3>
          <p className="mt-1 text-sm leading-6 text-slate-400 light:text-slate-600">
            {description}
          </p>
        </div>
      </div>

      {children}
    </div>
  );
}

function InputField({ label, value }) {
  return (
    <div>
      <label className="text-sm font-medium text-slate-300 light:text-slate-700">
        {label}
      </label>
      <input
        defaultValue={value}
        className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none focus:border-cyan-500 light:border-slate-300 light:bg-white light:text-slate-950"
      />
    </div>
  );
}

function ToggleRow({ title, description, enabled, onToggle }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-slate-800 bg-slate-950 p-4 light:border-slate-200 light:bg-slate-50">
      <div>
        <h4 className="font-medium text-white light:text-slate-950">
          {title}
        </h4>
        <p className="mt-1 text-sm leading-6 text-slate-400 light:text-slate-600">
          {description}
        </p>
      </div>

      <button
        onClick={onToggle}
        className={`flex h-7 w-12 shrink-0 items-center rounded-full p-1 transition ${
          enabled ? "bg-cyan-500" : "bg-slate-700 light:bg-slate-300"
        }`}
      >
        <span
          className={`h-5 w-5 rounded-full bg-white transition ${
            enabled ? "translate-x-5" : "translate-x-0"
          }`}
        ></span>
      </button>
    </div>
  );
}