export const overviewStats = [
  {
    label: "Compliance Score",
    value: "87%",
    change: "↑ 3% from last week",
    tone: "success",
    icon: "shield",
  },
  {
    label: "Critical Alerts",
    value: "6",
    change: "↓ 2 new today",
    tone: "danger",
    icon: "warning",
  },
  {
    label: "Third-Party Scripts",
    value: "248",
    change: "↑ 12 detected this week",
    tone: "info",
    icon: "code",
  },
  {
    label: "Websites Protected",
    value: "12",
    change: "All sites monitored",
    tone: "info",
    icon: "globe",
  },
];

export const riskTrendData = [
  { date: "Apr 15", alerts: 12 },
  { date: "Apr 18", alerts: 15 },
  { date: "Apr 21", alerts: 9 },
  { date: "Apr 24", alerts: 18 },
  { date: "Apr 27", alerts: 8 },
  { date: "Apr 30", alerts: 6 },
  { date: "May 1", alerts: 6 },
];

export const recentAlerts = [
  {
    title: "Possible formjacking script detected on payment page",
    page: "/payment",
    category: "Malicious Script Injection",
    severity: "Critical",
    status: "Investigating",
  },
  {
    title: "Unauthorized tracker detected on checkout page",
    page: "/checkout",
    category: "Privacy Compliance Gap",
    severity: "High",
    status: "Open",
  },
  {
    title: "Suspicious data flow to unapproved vendor",
    page: "/analytics",
    category: "Data Exposure",
    severity: "High",
    status: "Investigating",
  },
];

export const riskyPages = [
  {
    page: "/payment",
    score: 94,
    alerts: 3,
  },
  {
    page: "/checkout",
    score: 87,
    alerts: 2,
  },
  {
    page: "/analytics",
    score: 76,
    alerts: 2,
  },
];