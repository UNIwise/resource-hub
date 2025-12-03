import type { Config } from "./models/config";
import type { Link } from "./models/link";

// Company branding configuration
export const config: Config = {
  companyName: "UNIwise",
  // companyLogo: "/logo.svg", // Place your logo in the public folder
  githubEditUrl:
    "https://github.com/uniwise/resource-hub/blob/master/src/config.ts",

  // Sorting options
  categorySorting: "defined",
  linkSorting: "defined",

  // Optional: Define category order when categorySorting is "defined"
  categories: [
    "Environments",
    "Monitoring",
    "Operations",
    "Development",
    "Documentation",
    "Project Management",
    "Design",
    "Communication",
  ],

  // Grid layout
  gridColumns: 4,

  // Card layout: "default" (vertical with icon on top) or "compact" (horizontal with icon on left)
  cardLayout: "compact",

  // How links open: "same-tab", "new-tab", or "new-window"
  linkTarget: "new-tab",
};

// Links
export const links: Link[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // ENVIRONMENTS - Application instances across different stages
  // ═══════════════════════════════════════════════════════════════════════════

  // WISEflow Environments
  {
    href: "https://europe.wiseflow.net",
    title: "WISEflow Production",
    description: "Main production instance for European customers",
    icon: "https://europe.wiseflow.net/favicon.ico",
    category: "Environments",
    tags: ["wiseflow", "production"],
  },
  {
    href: "https://europe-stage.wiseflow.net",
    title: "WISEflow Staging",
    description: "Pre-production testing and QA validation",
    icon: "https://europe-stage.wiseflow.net/favicon.ico",
    category: "Environments",
    tags: ["wiseflow", "staging"],
  },
  {
    href: "https://europe-dev.wiseflow.net",
    title: "WISEflow Dev",
    description: "Active development and feature integration",
    icon: "https://europe-dev.wiseflow.net/favicon.ico",
    category: "Environments",
    tags: ["wiseflow", "development"],
  },
  {
    href: "https://europe-hotfix.wiseflow.net",
    title: "WISEflow Hotfix",
    description: "Emergency fixes and critical patches",
    icon: "https://europe-hotfix.wiseflow.net/favicon.ico",
    category: "Environments",
    tags: ["wiseflow", "hotfix"],
  },

  // Originality Environments
  {
    title: "Originality Production",
    href: "https://wiseflow-originality.net",
    description: "Main production instance for plagiarism detection",
    icon: "https://wiseflow-originality.net/static/icons/logo.svg",
    category: "Environments",
    tags: ["originality", "production"],
  },
  {
    title: "Originality Prerelease",
    href: "https://prerelease.wiseflow-originality.net/",
    description: "Pre-production validation before rollout",
    icon: "https://prerelease.wiseflow-originality.net/static/icons/logo.svg",
    category: "Environments",
    tags: ["originality", "prerelease"],
  },
  {
    title: "Originality Dev",
    href: "https://development.wiseflow-originality.net",
    description: "Active development and feature testing",
    icon: "https://development.wiseflow-originality.net/static/icons/logo.svg",
    category: "Environments",
    tags: ["originality", "development"],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MONITORING - Dashboards, metrics, logs, and observability
  // ═══════════════════════════════════════════════════════════════════════════
  {
    title: "Grafana (WISEflow Prod)",
    href: "https://grafana.wiseflow.io",
    description: "Metrics and dashboards for production environment",
    icon: "devicon/grafana-original",
    category: "Monitoring",
    tags: ["wiseflow", "production", "metrics", "alerting"],
  },
  {
    title: "Grafana (WISEflow Staging)",
    href: "https://grafana.stage.eu.wiseflow.io/",
    description: "Metrics and dashboards for staging environment",
    icon: "devicon/grafana-original",
    category: "Monitoring",
    tags: ["wiseflow", "staging", "metrics"],
  },
  {
    title: "Grafana (Originality)",
    href: "https://monitoring.originality.wf/",
    description: "Metrics, Logs and dashboards for Originality",
    icon: "devicon/grafana-original",
    category: "Monitoring",
    tags: ["originality", "production", "metrics"],
  },
  {
    title: "Prometheus Alerts",
    href: "https://alerts.prometheus.prod.wf",
    description: "Active alerts and alert silencing",
    icon: "devicon/prometheus-original",
    category: "Monitoring",
    tags: ["wiseflow", "production", "alerting"],
  },
  {
    title: "Kibana Logs",
    href: "https://kibana.prod.wf/",
    description: "Centralized log search and analysis",
    icon: "devicon/kibana-original",
    category: "Monitoring",
    tags: ["wiseflow", "production", "logging"],
  },
  {
    title: "OpenCost",
    href: "https://opencost.prod.wf/",
    description: "Kubernetes cost allocation and tracking",
    icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/opencost.png",
    category: "Monitoring",
    tags: ["wiseflow", "production", "cost"],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // OPERATIONS - Infrastructure, incidents, security, and messaging
  // ═══════════════════════════════════════════════════════════════════════════
  {
    title: "LastPass",
    href: "https://lastpass.com/",
    description: "Company passwords, shared credentials, and secrets",
    icon: "https://lastpass.com/favicon.ico",
    category: "Operations",
    tags: ["security", "credentials"],
  },
  {
    href: "https://uniwise.awsapps.com/start/#/?tab=accounts",
    title: "AWS Console",
    description: "Access AWS accounts via SSO",
    icon: "devicon/amazonwebservices-plain",
    category: "Operations",
    tags: ["infrastructure"],
  },
  {
    href: "https://uniwise.eu.pagerduty.com/",
    title: "PagerDuty",
    description: "On-call schedules and incident response",
    icon: "https://www.pagerduty.com/favicon.ico",
    category: "Operations",
    tags: ["alerting", "incidents"],
  },
  {
    title: "Status Page",
    href: "https://uniwise.status.io/",
    description: "Public service status and incident updates",
    icon: "https://status.io/favicon.ico",
    category: "Operations",
    tags: ["incidents"],
  },
  {
    title: "DefectDojo",
    href: "https://defectdojo.wiseflow.io/",
    description: "Vulnerability tracking and security management",
    icon: "https://defectdojo.wiseflow.io/static/dojo/img/favicon.png",
    category: "Operations",
    tags: ["security"],
  },
  {
    title: "RabbitMQ",
    href: "https://rabbitmq.prod.wf/",
    description: "AMQP message queue management",
    icon: "devicon/rabbitmq-original",
    category: "Operations",
    tags: ["wiseflow", "production", "messaging"],
  },
  {
    title: "EMQX",
    href: "https://emqx.prod.wf/",
    description: "MQTT broker for real-time messaging",
    icon: "https://www.emqx.com/favicon/favicon-96x96.png",
    category: "Operations",
    tags: ["wiseflow", "production", "messaging"],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // DEVELOPMENT - Code, tools, and testing utilities
  // ═══════════════════════════════════════════════════════════════════════════
  {
    title: "GitHub",
    href: "https://github.com/uniwise",
    description: "Source code repositories and collaboration",
    icon: "devicon/github-original",
    category: "Development",
    tags: ["code"],
  },
  {
    href: "https://uniwise.github.io/flow-ui-react",
    title: "Flow UI",
    description: "React component library and Storybook",
    icon: "devicon/storybook-original",
    category: "Development",
    tags: ["frontend", "design"],
  },
  {
    title: "POEditor",
    href: "https://poeditor.com/projects/",
    description: "Translation and localization management",
    icon: "https://poeditor.com/public/images/favicons/android-chrome-192x192.png",
    category: "Development",
    tags: ["localization"],
  },
  {
    title: "Mail Viewer (Dev)",
    href: "https://mail.dev.wf/",
    description: "Captured emails from development environment",
    icon: "✉️",
    category: "Development",
    tags: ["wiseflow", "development", "testing"],
  },
  {
    title: "Mail Viewer (Staging)",
    href: "https://mail.stage.wf/",
    description: "Captured emails from staging environment",
    icon: "✉️",
    category: "Development",
    tags: ["wiseflow", "staging", "testing"],
  },
  {
    title: "Mail Viewer (Prod)",
    href: "https://mail.prod.wf/",
    description: "Captured emails from production environment",
    icon: "✉️",
    category: "Development",
    tags: ["wiseflow", "production", "testing"],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // DOCUMENTATION - Knowledge bases and API references
  // ═══════════════════════════════════════════════════════════════════════════
  {
    title: "Confluence",
    href: "https://uniwise.atlassian.net/wiki/spaces/UNIWISE/overview",
    description: "Internal documentation and knowledge base",
    icon: "devicon/confluence-original",
    category: "Documentation",
    tags: ["wiki"],
  },
  {
    title: "API Docs (WISEflow Production)",
    href: "https://docs.wiseflow.net",
    description: "Public REST API reference for integrations",
    icon: "https://docs.wiseflow.net/assets/favicon-32x32.png",
    category: "Documentation",
    tags: ["wiseflow", "api-docs", "production"],
  },
  {
    title: "API Docs (WISEflow stage)",
    href: "https://europe-stage-apidocs.wiseflow.net",
    description: "Staging API documentation for testing",
    icon: "https://docs.wiseflow.net/assets/favicon-32x32.png",
    category: "Documentation",
    tags: ["wiseflow", "api-docs", "staging"],
  },
  {
    title: "API Docs (Originality Production)",
    href: "https://api.wiseflow-originality.net",
    description: "Public REST API reference for plagiarism detection",
    icon: "https://docs.wiseflow.net/assets/favicon-32x32.png",
    category: "Documentation",
    tags: ["originality", "api-docs", "production"],
  },
  {
    title: "API Docs (Originality Prerelease)",
    href: "https://api.prerelease.wiseflow-originality.net",
    description: "Prerelease API documentation for testing",
    icon: "https://docs.wiseflow.net/assets/favicon-32x32.png",
    category: "Documentation",
    tags: ["originality", "api-docs", "prerelease"],
  },
  {
    title: "Internal Docs (WISEflow)",
    href: "https://docs.wiseflow.io",
    description: "Internal production documentation and knowledge base",
    icon: "📚",
    category: "Documentation",
    tags: ["wiki"],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PROJECT MANAGEMENT - Planning, tracking, and coordination
  // ═══════════════════════════════════════════════════════════════════════════
  {
    title: "Jira",
    href: "https://uniwise.atlassian.net/jira/for-you",
    description: "Issue tracking and sprint management",
    icon: "devicon/jira-original",
    category: "Project Management",
    tags: ["agile", "planning"],
  },
  {
    title: "Monday.com",
    href: "https://uniwise.monday.com",
    description: "Cross-team project coordination",
    icon: "https://monday.com/favicon.ico",
    category: "Project Management",
    tags: ["planning"],
  },
  {
    title: "Sycamore",
    href: "https://uniwise-sycamore.web.app/",
    description: "Internal project tracking tool",
    icon: "https://uniwise-sycamore.web.app/pics/sycamore-main-logo.svg",
    category: "Project Management",
    tags: ["planning"],
  },
  {
    title: "Clockify",
    href: "https://clockify.me/",
    description: "Time tracking and timesheets",
    icon: "https://clockify.me/assets/images/favicon.ico",
    category: "Project Management",
    tags: ["time-tracking"],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // DESIGN - UI/UX tools and visual assets
  // ═══════════════════════════════════════════════════════════════════════════
  {
    href: "https://www.figma.com/login",
    title: "Figma",
    description: "UI designs, prototypes, and design system",
    icon: "devicon/figma-original",
    category: "Design",
    tags: ["ui", "prototyping"],
  },
  {
    title: "Lucidchart",
    href: "https://lucid.app/",
    description: "Architecture diagrams and flowcharts",
    icon: "https://www.lucidchart.com/favicon.ico",
    category: "Design",
    tags: ["diagrams"],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // COMMUNICATION - Team collaboration and external engagement
  // ═══════════════════════════════════════════════════════════════════════════
  {
    title: "Slack",
    href: "https://uniwise.slack.com/",
    description: "Primary team chat and notifications",
    icon: "devicon/slack-original",
    category: "Communication",
    tags: ["chat"],
  },
  {
    title: "Microsoft Teams",
    href: "https://teams.microsoft.com/",
    description: "Video meetings and external collaboration",
    icon: "https://upload.wikimedia.org/wikipedia/commons/9/94/Microsoft_Office_Teams_%282019%E2%80%932025%29.svg",
    category: "Communication",
    tags: ["meetings"],
  },
  {
    title: "Blogin",
    href: "https://uniwise.blogin.dk/",
    description: "Company news and internal announcements",
    icon: "https://uniwise.blogin.co/images/touch/blogin_logo_48.png",
    category: "Communication",
    tags: ["news"],
  },
  {
    title: "HubSpot",
    href: "https://app.hubspot.com/login",
    description: "CRM and customer engagement tracking",
    icon: "https://www.hubspot.com/hubfs/favicon.ico",
    category: "Communication",
    tags: ["crm", "sales"],
  },
  {
    title: "Outlook",
    href: "https://outlook.office.com/mail/",
    description: "Company email and calendar",
    icon: "https://outlook.office.com/favicon.ico",
    category: "Communication",
    tags: ["email"],
  },
];
