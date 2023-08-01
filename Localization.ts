import { defineMessages } from "react-intl";

const titles = defineMessages({
  events: { id: "neo.react.nav-bar.events", defaultMessage: "Events" },
  library: { id: "neo.react.nav-bar.library", defaultMessage: "Library" },
  data: { id: "neo.react.nav-bar.data", defaultMessage: "Data" },
  insights: { id: "neo.react.nav-bar.insights", defaultMessage: "Insights" },
  setup: { id: "neo.react.nav-bar.setup", defaultMessage: "Setup" },
  system: { id: "neo.react.nav-bar.system", defaultMessage: "System" },

  companies: { id: "neo.react.nav-bar.companies", defaultMessage: "Companies" },
  users: { id: "neo.react.nav-bar.users", defaultMessage: "Users" },
  suppliers: { id: "neo.react.nav-bar.suppliers", defaultMessage: "Suppliers" },
  supplierContacts: {
    id: "neo.react.nav-bar.supplier-contacts",
    defaultMessage: "Supplier contacts",
  },
  organizations: {
    id: "neo.react.nav-bar.organizations",
    defaultMessage: "Organizations",
  },
  userAccounts: {
    id: "neo.react.nav-bar.user-accounts",
    defaultMessage: "Users",
  },
  financialSetup: {
    id: "neo.react.nav-bar.todo",
    defaultMessage: "Financial Setup",
  },
  currencies: { id: "neo.react.nav-bar.todo", defaultMessage: "Currencies" },
  exchangeRates: {
    id: "neo.react.nav-bar.todo",
    defaultMessage: "Exchange Rates",
  },

  domainSettings: {
    id: "neo.react.nav-bar.domain-settings",
    defaultMessage: "Domain settings",
  },
  systemFeatures: {
    id: "neo.react.nav-bar.system-features",
    defaultMessage: "System features",
  },
  integration: {
    id: "neo.react.nav-bar.integration",
    defaultMessage: "Integration",
  },

  oidcHosts: {
    id: "neo.react.nav-bar.oidc-hosts",
    defaultMessage: "OpenID connect",
  },
  endPoints: { id: "neo.react.nav-bar.endpoints", defaultMessage: "Endpoints" },
  endPointAuth: {
    id: "neo.react.nav-bar.endpoint-auth",
    defaultMessage: "Endpoint auth",
  },
  endPointReplies: {
    id: "neo.react.nav-bar.endpoint-replies",
    defaultMessage: "Endpoint replies",
  },
  commands: { id: "neo.react.nav-bar.commands", defaultMessage: "Commands" },
  labels: { id: "neo.react.nav-bar.labels", defaultMessage: "Labels" },
  apiKeys: { id: "neo.react.nav-bar.api-keys", defaultMessage: "API keys" },
  companyAliases: {
    id: "neo.react.nav-bar.company-aliases",
    defaultMessage: "Company aliases",
  },
  userAliases: {
    id: "neo.react.nav-bar.user-aliases",
    defaultMessage: "User aliases",
  },

  supplierCompanies: {
    id: "neo.react.nav-bar.supplier-companies",
    defaultMessage: "Supplier companies",
  },
  supplierUsers: {
    id: "neo.react.nav-bar.supplier-users",
    defaultMessage: "Supplier users",
  },

  jobs: { id: "neo.react.nav-bar.jobs", defaultMessage: "Jobs" },
  settings: { id: "neo.react.nav-bar.settings", defaultMessage: "Settings" },
  websites: { id: "neo.react.nav-bar.websites", defaultMessage: "Websites" },
  queryLog: { id: "neo.react.nav-bar.query-log", defaultMessage: "Query log" },
  log4j: { id: "neo.react.nav-bar.log4j", defaultMessage: "Log4j" },
  elasticSearchLog: {
    id: "neo.react.nav-bar.elastic-search-log",
    defaultMessage: "Elastic search log",
  },
  translations: {
    id: "neo.react.nav-bar.translations",
    defaultMessage: "Translations",
  },
  batchTest: {
    id: "neo.react.nav-bar.batch-test",
    defaultMessage: "Batch test",
  },
  tools: { id: "neo.react.nav-bar.tools", defaultMessage: "Tools" },
  systemMailLog: {
    id: "neo.react.nav-bar.system-mail-log",
    defaultMessage: "System email logs",
  },
  developerPages: {
    id: "neo.react.nav-bar.developer-pages",
    defaultMessage: "Developer pages",
  },

  systemStatus: {
    id: "neo.react.nav-bar.system-status",
    defaultMessage: "System status",
  },
  jobQueue: { id: "neo.react.nav-bar.job-queue", defaultMessage: "Job queue" },
  workersOld: {
    id: "neo.react.nav-bar.workers-old",
    defaultMessage: "Workers (old)",
  },
  workers: { id: "neo.react.nav-bar.workers", defaultMessage: "Workers" },
  converterStatus: {
    id: "neo.react.nav-bar.converter-status",
    defaultMessage: "Converter status",
  },
  tasksOverview: {
    id: "neo.react.nav-bar.tasks-overview",
    defaultMessage: "Tasks overview",
  },
  jobUnits: { id: "neo.react.nav-bar.job-units", defaultMessage: "Job units" },
  jobSettings: {
    id: "neo.react.nav-bar.job-settings",
    defaultMessage: "Job settings",
  },
  cloudSessions: {
    id: "neo.react.nav-bar.cloud-sessions",
    defaultMessage: "Cloud sessions",
  },
  solverHistory: {
    id: "neo.react.nav-bar.solver-history",
    defaultMessage: "Solver history",
  },
  scenarioHistory: {
    id: "neo.react.nav-bar.scenario-history",
    defaultMessage: "Scenario history",
  },
  results: { id: "neo.react.nav-bar.results", defaultMessage: "Results" },

  systemSettings: {
    id: "neo.react.nav-bar.system-settings",
    defaultMessage: "System settings",
  },
  systemSettingsOld: {
    id: "neo.react.nav-bar.system-settings-old",
    defaultMessage: "System settings (old)",
  },
  performanceSettings: {
    id: "neo.react.nav-bar.performance-settings",
    defaultMessage: "Performance settings",
  },
  coupaClassificationSettings: {
    id: "neo.react.nav-bar.coupa-classification-settings",
    defaultMessage: "Coupa Classification settings",
  },
  coupaClassificationMetaData: {
    id: "neo.react.nav-bar.coupa-classification-metadata",
    defaultMessage: "Coupa Classification metadata settings",
  },
  normalizedFieldsSettings: {
    id: "neo.react.nav-bar.normalized-field-settings",
    defaultMessage: "Normalized field settings",
  },

  excelDiff: {
    id: "neo.react.nav-bar.excel-diff",
    defaultMessage: "Excel diff",
  },
  excelAppend: {
    id: "neo.react.nav-bar.excel-append",
    defaultMessage: "Excel append",
  },
  markedUnlockedCells: {
    id: "neo.react.nav-bar.marked-unlocked-cells",
    defaultMessage: "Marked unlocked cells",
  },
  unprotectWorkbook: {
    id: "neo.react.nav-bar.unprotect-workbook",
    defaultMessage: "Unprotect workbook",
  },
  kbLoad: { id: "neo.react.nav-bar.kb-load", defaultMessage: "KB load" },
});

export default titles;
