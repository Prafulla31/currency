import { ProvidedData, SessionInfo } from "./Interfaces";
import titles from "./localization";

function createSupplierEntitiesSubMenu(
  showSuppliersAndUsers: boolean
): ProvidedData[] | undefined {
  if (!showSuppliersAndUsers) {
    return undefined;
  }

  return [
    {
      id: "suppliers",
      translated_label: titles.suppliers,
      show: true,
      type: "GroupHeaderItem",
    },
    {
      id: "supplier-companies",
      translated_label: titles.suppliers,
      page: "supplier-companies.page",
      show: true,
      scope: ["supplierCompanies"],
    },
    {
      id: "supplier-users",
      translated_label: titles.supplierContacts,
      page: "supplier-users.page",
      show: true,
      scope: ["supplierUsers"],
    },
  ];
}

function createInternalEntitiesSubMenu(
  showSuppliersAndUsers: boolean
): ProvidedData[] | undefined {
  if (!showSuppliersAndUsers) {
    return undefined;
  }

  return [
    {
      id: "internal",
      translated_label: titles.organizations,
      show: true,
      type: "GroupHeaderItem",
    },
    {
      id: "internal-companies",
      translated_label: titles.organizations,
      page: "internal-companies.page",
      show: true,
      scope: ["internalCompanies"],
    },
    {
      id: "internal-users",
      translated_label: titles.userAccounts,
      page: "internal-users.page",
      show: true,
      scope: ["internalUsers"],
    },
  ];
}

function createFinancialSetupSubMenu(
  showSuppliersAndUsers: boolean
): ProvidedData[] | undefined {
  if (!showSuppliersAndUsers) {
    return undefined;
  }

  return [
    {
      id: "financial-setup",
      translated_label: titles.financialSetup,
      show: true,
      type: "GroupHeaderItem",
    },
    {
      id: "currencies",
      translated_label: titles.currencies,
      page: "currenciesPage.page",
      show: true,
      scope: ["internalCompanies"],
    },
    {
      id: "exchange-rates",
      translated_label: titles.exchangeRates,
      page: "exchangeRatesPage.page",
      show: true,
      scope: ["internalUsers"],
    },
  ];
}

function createSetupSettingsSubMenu(
  sessionInfo: SessionInfo
): ProvidedData[] | undefined {
  if (!sessionInfo.hasPowerUserRights) {
    return undefined;
  }

  return [
    {
      id: "setup-settings",
      translated_label: titles.settings,
      show: true,
      type: "GroupHeaderItem",
    },
    {
      id: "domain-settings",
      translated_label: titles.domainSettings,
      page: "domainSettings.page",
      show: true,
      scope: ["domainSettings"],
    },
    {
      id: "system-features",
      translated_label: titles.systemFeatures,
      page: "@features",
      show: true,
      scope: ["systemFeatures"],
    },
  ];
}

function createIntegrationSubMenu(
  sessionInfo: SessionInfo,
  isPortal: boolean
): ProvidedData[] | undefined {
  if (!sessionInfo.hasPowerUserRights) {
    return undefined;
  }

  return [
    {
      id: "integration",
      translated_label: titles.integration,
      show: true,
      type: "GroupHeaderItem",
    },
    {
      id: "integration-setup",
      translated_label: titles.integration,
      page: "integrationSetup.page",
      show: true,
      scope: ["integrationSetup"],
    },
    {
      id: "oidc-hosts",
      translated_label: titles.oidcHosts,
      page: "oidcHosts.page",
      show:
        (!isPortal && sessionInfo.hasPowerUserRights) ||
        sessionInfo.hasRootRights,
      scope: ["oidcHosts"],
    },
    {
      id: "end-points",
      translated_label: titles.endPoints,
      page: "endPoints.page",
      show: true,
      scope: ["endPoints"],
    },
    {
      id: "end-point-auth",
      translated_label: titles.endPointAuth,
      page: "endPointAuthentication.page",
      show: true,
      scope: ["endPointAuthentication"],
    },
    {
      id: "end-point-replies",
      translated_label: titles.endPointReplies,
      page: "endPointReply.page",
      show: true,
      scope: ["endPointReply"],
    },
    {
      id: "commands",
      translated_label: titles.commands,
      page: "commandConfigurations.page",
      show: true,
      scope: ["commands"],
    },
    {
      id: "labels",
      translated_label: titles.labels,
      page: "labels.page",
      show: true,
      scope: ["labels"],
    },
    {
      id: "api-keys",
      translated_label: titles.apiKeys,
      page: "apiKeys.page",
      show: true,
      scope: ["apiKeys"],
    },
    {
      id: "company-aliases",
      translated_label: titles.companyAliases,
      page: "organizationAliases.page",
      show: true,
      scope: ["organizationAliases"],
    },
    {
      id: "user-aliases",
      translated_label: titles.userAliases,
      page: "userAliases.page",
      show: true,
      scope: ["userAliases"],
    },
  ];
}

function createSetupMenu(
  sessionInfo: SessionInfo,
  showSetup: boolean,
  useOldUsersAndOrganizations: boolean,
  showUsersAndCompanies: boolean,
  isPortal: boolean
): ProvidedData[] | undefined {
  if (!showSetup) {
    return undefined;
  }

  const showNewSuppliersAndUsers =
    showUsersAndCompanies && !useOldUsersAndOrganizations;

  return [
    {
      id: "system-other-column-old",
      children: [
        {
          id: "users",
          translated_label: titles.currencies,
          page: "accounts.page",
          show: useOldUsersAndOrganizations,
          scope: ["currencies"],
        },
        {
          id: "companies",
          translated_label: titles.currencies,
          page: "organizations.page",
          show: useOldUsersAndOrganizations,
          scope: ["currencies"],
        },
      ],
      show: useOldUsersAndOrganizations,
      type: "MegaMenuColumnItem",
    },
    {
      id: "system-other-column",
      children: showNewSuppliersAndUsers
        ? [
            ...createSupplierEntitiesSubMenu(showNewSuppliersAndUsers),
            ...createInternalEntitiesSubMenu(showNewSuppliersAndUsers),
            ...createFinancialSetupSubMenu(showNewSuppliersAndUsers),
          ]
        : undefined,
      show: showNewSuppliersAndUsers,
      type: "MegaMenuColumnItem",
    },

    {
      id: "setup-settings-column",
      children: createSetupSettingsSubMenu(sessionInfo),
      show: sessionInfo.hasPowerUserRights,
      type: "MegaMenuColumnItem",
    },
    {
      id: "integration-column",
      children: createIntegrationSubMenu(sessionInfo, isPortal),
      show: sessionInfo.hasPowerUserRights,
      type: "MegaMenuColumnItem",
    },
  ];
}

function createJobsSubMenu(
  sessionInfo: SessionInfo
): ProvidedData[] | undefined {
  if (!sessionInfo.hasPowerUserRights) {
    return undefined;
  }

  return [
    {
      id: "jobs",
      translated_label: titles.jobs,
      show: true,
      type: "GroupHeaderItem",
    },
    {
      id: "status",
      translated_label: titles.systemStatus,
      show: true,
      page: "systemStatus.page",
      scope: ["status"],
    },
    {
      id: "job-queue",
      translated_label: titles.jobQueue,
      page: "jobQueue.page",
      show: true,
      scope: ["jobQueue"],
    },
    {
      id: "workers",
      translated_label: titles.workersOld,
      page: "@nodesOverview",
      show: true,
      scope: ["workers"],
    },
    {
      id: "workers-page",
      translated_label: titles.workers,
      page: "workers.page",
      show: true,
      scope: ["workersPage"],
    },
    {
      id: "converter-status",
      translated_label: titles.converterStatus,
      page: "converterStatus.page",
      show: true,
      scope: ["converterStatus"],
    },
    {
      id: "tasks-overview",
      translated_label: titles.tasksOverview,
      page: "tasksOverview.page",
      show: sessionInfo.hasRootRights,
      scope: ["tasksOverview"],
    },
    {
      id: "job-quotas",
      translated_label: titles.jobUnits,
      page: "@jobQuotaOverview",
      show: sessionInfo.hasRootRights,
      scope: ["jobQuotaOverview"],
    },
    {
      id: "job-settings",
      translated_label: titles.jobSettings,
      page: "@setJobSettings",
      show: sessionInfo.hasRootRights,
      scope: ["setJobSettings"],
    },
    {
      id: "cloud-sessions",
      translated_label: titles.cloudSessions,
      page: "@boostedOrganizationsInfo",
      show: sessionInfo.hasRootRights,
      scope: ["cloudSessions"],
    },
    {
      id: "solver-history",
      translated_label: titles.solverHistory,
      page: "solverHistory.page",
      show: true,
      scope: ["solverHistory"],
    },
    {
      id: "scenario-history",
      translated_label: titles.scenarioHistory,
      page: "scenarioHistory.page",
      show: true,
      scope: ["scenarioHistory"],
    },
    {
      id: "results",
      translated_label: titles.results,
      page: "@systemReplies",
      show: true,
      scope: ["systemReplies"],
    },
  ];
}

function createSettingsSubMenu(
  sessionInfo: SessionInfo
): ProvidedData[] | undefined {
  if (!sessionInfo.hasPortalPowerUserRights) {
    return undefined;
  }

  return [
    {
      id: "settings",
      translated_label: titles.settings,
      show: true,
      type: "GroupHeaderItem",
    },
    {
      id: "system-settings",
      translated_label: titles.systemSettings,
      page: "systemSettings.page",
      show: true,
      scope: ["systemSettings"],
    },
    {
      id: "system-settingsOld",
      translated_label: titles.systemSettingsOld,
      page: "@systemSettings",
      show: true,
      scope: ["systemSettingsOld"],
    },
    {
      id: "performance-settings",
      translated_label: titles.performanceSettings,
      page: "systemFormulas.page",
      show: true,
      scope: ["systemFormulas"],
    },
    {
      id: "coupaClassificationSettings",
      translated_label: titles.coupaClassificationSettings,
      page: "coupaClassification.page",
      show: true,
      scope: ["coupaClassification"],
    },
    {
      id: "coupa-classification-meta",
      translated_label: titles.coupaClassificationMetaData,
      page: "coupaClassificationMetaData.page",
      show: true,
      scope: ["coupaClassificationMetaData"],
    },
    {
      id: "normalizedFieldsSettings",
      translated_label: titles.normalizedFieldsSettings,
      page: "normalizedFields.page",
      show: true,
      scope: ["normalizedFields"],
    },
  ];
}

function createToolsSubMenu(
  sessionInfo: SessionInfo
): ProvidedData[] | undefined {
  if (!sessionInfo.hasPowerUserRights) {
    return undefined;
  }

  return [
    {
      id: "tools",
      translated_label: titles.tools,
      show: true,
      type: "GroupHeaderItem",
    },
    {
      id: "excel-diff",
      translated_label: titles.excelDiff,
      page: "@excelDiff",
      show: true,
      scope: ["excelDiff"],
    },
    {
      id: "excel-append",
      translated_label: titles.excelAppend,
      page: "@excelAppend",
      show: true,
      scope: ["excelAppend"],
    },
    {
      id: "mark-unlocked-cells",
      translated_label: titles.markedUnlockedCells,
      page: "@markUnlockedCells",
      show: true,
      scope: ["markUnlockedCells"],
    },
    {
      id: "unprotect-workbook",
      translated_label: titles.unprotectWorkbook,
      page: "@unprotectWorkbook",
      show: true,
      scope: ["unprotectWorkbook"],
    },
    {
      id: "kb-load",
      translated_label: titles.kbLoad,
      page: "knowledgeBaseLoad.page",
      show: sessionInfo.hasRootRights,
      scope: ["knowledgeBaseLoad"],
    },
  ];
}

function createDeveloperPagesSubMenu(
  devFeaturesActive: boolean
): ProvidedData[] | undefined {
  if (!devFeaturesActive) {
    return undefined;
  }

  return [
    {
      id: "developer-pages",
      translated_label: titles.developerPages,
      show: true,
      type: "GroupHeaderItem",
    },
    {
      id: "react-hook-form",
      fixed_label: "React Hook Form test page",
      page: "react-hook-form.page",
      show: true,
      scope: ["reactHookForm"],
    },
    {
      id: "basic-react-form",
      fixed_label: "Basic React Form",
      page: "basic-react-form.page",
      show: true,
      scope: ["basicReactForm"],
    },
    {
      id: "kendo-react-grid-demo",
      fixed_label: "Kendo React Grid",
      page: "kendo-react-grid-demo.page",
      show: true,
      scope: ["kendoReactGridDemo"],
    },
    {
      id: "inline-grid-editing-demo",
      fixed_label: "Inline Grid Editing",
      page: "inline-grid-editing-demo.page",
      show: true,
      scope: ["inlineGridEditingDemo"],
    },
    {
      id: "card-list-demo",
      fixed_label: "Card list",
      page: "card-list-demo.page",
      show: true,
      scope: ["cardListDemo"],
    },
  ];
}

function createSystemMenu(
  sessionInfo: SessionInfo,
  hasBatchTester: boolean,
  developmentActive: boolean
): ProvidedData[] | undefined {
  if (!sessionInfo.hasPowerUserRights) {
    return undefined;
  }

  return [
    {
      id: "system-other-column",
      children: [
        {
          id: "websites",
          translated_label: titles.websites,
          page: "websites.page",
          show: sessionInfo.hasPortalPowerUserRights,
          scope: ["websites"],
        },
        {
          id: "querylog",
          translated_label: titles.queryLog,
          page: "queryLog.page",
          show: sessionInfo.hasRootRights,
          scope: ["queryLog"],
        },
        {
          id: "log4j",
          translated_label: titles.log4j,
          page: "log4j.page",
          show: sessionInfo.hasPortalPowerUserRights,
          scope: ["log4j"],
        },
        {
          id: "elasticsearchlog",
          translated_label: titles.elasticSearchLog,
          page: "elasticsearchlog.page",
          show: sessionInfo.hasPortalPowerUserRights,
          scope: ["elasticsearchlog"],
        },
        {
          id: "translations",
          translated_label: titles.translations,
          page: "translations.page",
          show: sessionInfo.hasPortalPowerUserRights,
          scope: ["translations"],
        },
        {
          id: "batch-test",
          translated_label: titles.batchTest,
          page: "batchTest.page",
          show: sessionInfo.hasRootRights && hasBatchTester,
          scope: ["batchTest"],
        },
        {
          id: "system-mail-log",
          translated_label: titles.systemMailLog,
          page: "systemMailLog.page",
          show: true,
          scope: ["systemMailLog"],
        },
      ],
      show: true,
      type: "MegaMenuColumnItem",
    },
    {
      id: "jobs-column",
      children: createJobsSubMenu(sessionInfo),
      show: true,
      type: "MegaMenuColumnItem",
    },
    {
      id: "settings-column",
      children: createSettingsSubMenu(sessionInfo),
      show: sessionInfo.hasPortalPowerUserRights,
      type: "MegaMenuColumnItem",
    },
    {
      id: "tools-column",
      children: createToolsSubMenu(sessionInfo),
      show: true,
      type: "MegaMenuColumnItem",
    },
    {
      id: "developer-pages-column",
      children: createDeveloperPagesSubMenu(developmentActive),
      show: developmentActive,
      type: "MegaMenuColumnItem",
    },
  ];
}

export default function createMainCsoNavbar(
  sessionInfo: SessionInfo,
  oldUsersAndCompanies: boolean,
  dataExchange: boolean,
  isPortal: boolean,
  hasBatchTester: boolean,
  developmentActive: boolean,
  showUsersAndCompanies: boolean,
  showLibrary: boolean,
  showData: boolean,
  libraryPage: "tess-apps.page" | "library.page",
  showSetup: boolean
): ProvidedData[] {
  return [
    {
      id: "events",
      translated_label: titles.events,
      page: `${
        sessionInfo.role.evaluator
          ? "evaluatorLandingPage.page"
          : "projects.page"
      }`,
      show: true,
      scope: ["project"],
      everyone: `${sessionInfo.role.everyone}` === "true",
    },
    {
      id: "library",
      translated_label: titles.library,
      page: libraryPage,
      show: showLibrary,
      scope: ["library"],
    },
    {
      id: "data",
      translated_label: titles.data,
      page: "baseDataItems.page",
      show: sessionInfo.isManager && !sessionInfo.role.support,
      scope: ["data"],
    },
    {
      id: "insights",
      translated_label: titles.insights,
      page: "insights.page",
      show:
        sessionInfo.featureSwitches.enableBidPricingInsights &&
        !sessionInfo.role.evaluator,
      scope: ["insights"],
    },
    {
      id: "setup",
      translated_label: titles.setup,
      page: oldUsersAndCompanies ? "accounts.page" : "supplier-companies.page",
      show: showSetup,
      scope: ["setup"],
      mega_menu: true,
      children: createSetupMenu(
        sessionInfo,
        showSetup,
        oldUsersAndCompanies,
        showUsersAndCompanies,
        isPortal
      ),
    },
    {
      id: "settings",
      translated_label: titles.system,
      page: "systemStatus.page",
      show: sessionInfo.hasPowerUserRights,
      scope: ["system"],
      mega_menu: true,
      children: createSystemMenu(
        sessionInfo,
        hasBatchTester,
        developmentActive
      ),
    },
  ];
}
