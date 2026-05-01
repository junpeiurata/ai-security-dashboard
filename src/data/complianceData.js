export const complianceTrendData = [
  { month: "Mar", score: 82 },
  { month: "Mar 15", score: 84 },
  { month: "Apr", score: 83 },
  { month: "Apr 15", score: 85 },
  { month: "May", score: 87 },
];

export const complianceFrameworks = [
  {
    name: "PCI DSS 4.0.1",
    description: "Payment card industry data security standard",
    status: "Warning",
    score: 87,
    openIssues: 3,
    lastScan: "2026-05-01",
  },
  {
    name: "HIPAA",
    description: "Health data privacy and security requirements",
    status: "Compliant",
    score: 100,
    openIssues: 0,
    lastScan: "2026-04-28",
  },
  {
    name: "GDPR",
    description: "General Data Protection Regulation",
    status: "Compliant",
    score: 96,
    openIssues: 0,
    lastScan: "2026-05-01",
  },
  {
    name: "CCPA/CPRA",
    description: "California consumer privacy requirements",
    status: "Warning",
    score: 82,
    openIssues: 2,
    lastScan: "2026-04-30",
  },
  {
    name: "PIPEDA",
    description: "Canadian privacy compliance framework",
    status: "Compliant",
    score: 94,
    openIssues: 0,
    lastScan: "2026-04-29",
  },
];

export const complianceGaps = [
  {
    title: "Unapproved tracker on checkout page",
    framework: "PCI DSS 4.0.1",
    severity: "High",
    page: "/checkout",
  },
  {
    title: "Consent mismatch on marketing page",
    framework: "CCPA/CPRA",
    severity: "Medium",
    page: "/home",
  },
  {
    title: "Third-party script missing approval record",
    framework: "PCI DSS 4.0.1",
    severity: "Medium",
    page: "/products",
  },
];

export const auditEvidence = [
  "Latest website scan completed",
  "Third-party script inventory generated",
  "Compliance gaps identified",
  "Audit-ready evidence package available",
];