import { NavBar } from "@coupa/coupa-common-js/core/NavBar";
import { fromJS } from "immutable";
import { ReactElement, useEffect, useMemo, useState } from "react";
import { useIntl } from "react-intl";
import {
  GroupHeaderItem,
  MegaMenuColumnItem,
  NavbarItem,
  RawData,
  SessionInfo,
} from "./Interfaces";
import {
  cleanNavbarData,
  generateCSONavbar,
  generateDefaultPrimaryNavbar,
} from "./NavbarItems";
import { NeoAjax, Navigation, Router } from "../utils/NeoUtils";
import { useActiveIntegrationFeatures } from "../common/queryHooks/activeIntegrationFeatures";
import { useDomainSettings } from "../common/queryHooks/domainSettings";
import { useWebsiteInformation } from "../common/queryHooks/websiteInformation";
import { useFeatures } from "../common/queryHooks/features";

declare const $: any;

interface Props {
  sessionInfo: SessionInfo;
}

// eslint-disable-next-line consistent-return
function findActive(
  items: (MegaMenuColumnItem | GroupHeaderItem | NavbarItem)[],
  onlyTopLevel?: boolean
): NavbarItem | undefined {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    if (!onlyTopLevel && item.children?.length) {
      const child = findActive(item.children);
      if (child) {
        return child;
      }
    }

    if (item.active) {
      return item;
    }
  }

  return undefined;
}

export default function NavBarApp({ sessionInfo }: Props): ReactElement {
  const intl = useIntl();

  const [navbarData, setNavbarData] = useState(
    generateDefaultPrimaryNavbar(sessionInfo)
  );
  const [currentPage, setCurrentPage] = useState("projects.page");
  const [currentScope, setCurrentScope] = useState("event");

  const { data: domainSettings } = useDomainSettings();
  const { data: activeIntegrationFeatures } = useActiveIntegrationFeatures();
  const { data: websiteInformation } = useWebsiteInformation();
  const { data: features } = useFeatures();

  const oldUsersAndCompanies: boolean = useMemo(
    () => domainSettings?.UseOldUsersAndOrganizations?.Value === "true",
    [domainSettings]
  );

  const hasBatchTester: boolean = useMemo(
    () =>
      domainSettings?.["RegressionTester.AllowScenarioRegressionTests"]
        ?.Value === "true",
    [domainSettings]
  );

  const dataExchange: boolean = useMemo(
    () => activeIntegrationFeatures?.includes("DataExchange"),
    [activeIntegrationFeatures]
  );

  const isPortal: boolean = useMemo(
    () => websiteInformation?.IsPortal,
    [websiteInformation]
  );

  const developmentActive: boolean = useMemo(
    () => features?.features?.displayDevelopmentFeatures?.Enabled,
    [features]
  );

  const csoNavbar = useMemo(
    () =>
      generateCSONavbar(
        currentScope,
        currentPage,
        sessionInfo,
        oldUsersAndCompanies,
        dataExchange,
        isPortal,
        hasBatchTester,
        developmentActive,
        intl
      ),
    [
      currentScope,
      currentPage,
      sessionInfo,
      oldUsersAndCompanies,
      dataExchange,
      isPortal,
      hasBatchTester,
      developmentActive,
      intl,
    ]
  );

  useEffect(() => {
    const currentActive = findActive(csoNavbar, true);
    if (currentActive) {
      $("div.csoTitle-no-project span.project-name").text(
        currentActive.translated_label
      );
    }
  }, [csoNavbar]);

  useEffect(() => {
    NeoAjax("coupa.nav.json", {
      ignorePageChange: true,
    })
      .then((result: any) => {
        if (result.Data.length > 0) {
          setNavbarData(cleanNavbarData(result.Data.map((r: RawData) => r)));
        }
        // eslint-disable-next-line no-console
      })
      .catch((err) => console.error(err));
    Navigation.onNavigate(() => {
      setCurrentPage(Router.decode(window.location.hash).page);
      setCurrentScope(Navigation.current().scope);
    });
  }, []);

  return (
    <div className="coupaUI coupaUIOverride">
      <NavBar
        navItems={fromJS(navbarData)}
        theme="primary"
        containerId="primary_nav"
      />
      <NavBar
        navItems={fromJS(csoNavbar)}
        theme="secondary"
        containerId="secondary_nav"
        showDropdownArrow
      />
    </div>
  );
}
