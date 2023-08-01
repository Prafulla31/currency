import { IntlShape } from "react-intl";
import {
  GroupHeaderItem,
  MegaMenuColumnItem,
  NavbarItem,
  ProvidedData,
  RawData,
  SessionInfo,
} from "./Interfaces";
import { t } from "../utils/Translation";
import createMainCsoNavbar from "./Factory";

export function cleanNavbarData(data: RawData[]): NavbarItem[] {
  /* eslint-disable no-param-reassign */ // disables for entire file
  return data.map((d: any) => {
    d.id = d.label;
    d.translated_label = d.localized;
    delete d.localized;
    delete d.value;
    delete d.Id;
    // eslint-disable-next-line no-underscore-dangle
    delete d._Access;
    switch (d.label) {
      case "sourcing":
        d.active = true;
        break;
      case "home":
        d.class = "homeIcon";
        break;
      default:
        break;
    }
    return d as NavbarItem;
  });
}

function navbarMapper(
  data: ProvidedData[],
  currentScope: string,
  currentPage: string,
  intl: IntlShape
): (MegaMenuColumnItem | GroupHeaderItem | NavbarItem)[] {
  return data
    .filter(({ show }) => show)
    .map(
      ({
        id,
        type,
        translated_label,
        fixed_label,
        page,
        scope,
        children,
        mega_menu,
        everyone,
      }): MegaMenuColumnItem | GroupHeaderItem | NavbarItem => {
        const displayLabel =
          translated_label !== undefined
            ? intl.formatMessage(translated_label)
            : fixed_label ?? "Missing translation";

        if (type === "MegaMenuColumnItem") {
          return {
            id,
            children:
              !children || children.length === 0
                ? undefined
                : navbarMapper(children, currentScope, currentPage, intl),
          } as unknown as MegaMenuColumnItem;
        }

        if (type === "GroupHeaderItem") {
          return {
            id,
            translated_label: displayLabel,
            group_header: 1,
          } as GroupHeaderItem;
        }

        return {
          id,
          label: id,
          translated_label: displayLabel,
          active: currentPage === page || scope?.includes(currentScope),
          target_url: everyone
            ? `/negotiation/everyone#${page}`
            : `/negotiation/neo#${page}`, // see comment in generateDefaultPrimaryNavbar()
          children:
            !children || children.length === 0
              ? undefined
              : navbarMapper(children, currentScope, currentPage, intl),
          mega_menu,
        } as NavbarItem;
      }
    );
}

export function generateCSONavbar(
  currentScope: string,
  currentPage: string,
  sessionInfo: SessionInfo,
  oldUsersAndCompanies: boolean,
  dataExchange: boolean,
  isPortal: boolean,
  hasBatchTester: boolean,
  developmentActive: boolean,
  intl: IntlShape
): (MegaMenuColumnItem | GroupHeaderItem | NavbarItem)[] {
  const showUsersAndCompanies =
    sessionInfo.isManager &&
    (!sessionInfo.role.support || sessionInfo.hasAccountManagementRights);

  const showLibrary =
    sessionInfo.role.administrator ||
    sessionInfo.role.marketManager ||
    sessionInfo.role.owner ||
    sessionInfo.role.projectManager;

  const showData = sessionInfo.isManager && !sessionInfo.role.support;

  const libraryPage =
    sessionInfo.role.administrator || sessionInfo.role.marketManager
      ? "tess-apps.page"
      : "library.page";

  const showSetup = showUsersAndCompanies || sessionInfo.hasPowerUserRights;

  const filteredData = createMainCsoNavbar(
    sessionInfo,
    oldUsersAndCompanies,
    dataExchange,
    isPortal,
    hasBatchTester,
    developmentActive,
    showUsersAndCompanies,
    showLibrary,
    showData,
    libraryPage,
    showSetup
  );

  return navbarMapper(filteredData, currentScope, currentPage, intl);
}

export function generateDefaultPrimaryNavbar(
  sessionInfo: SessionInfo
): NavbarItem[] {
  // `target_url` were previously calls to `NeoRouter.load("projects.page")` but this rendered <a> tags without the
  // `href` attribute which meant that users couldn't choose "open link in new tab" from the browser context menu.
  // Adding `#projects.page` at the end of the URL avoids full page reloads for normal clicks on these buttons/links.
  let targetUrl = "/negotiation/neo#projects.page";

  if (`${sessionInfo.role.evaluator}` === "true") {
    targetUrl = "/negotiation/neo#evaluatorLandingPage.page";
  } else if (`${sessionInfo.role.everyone}` === "true") {
    targetUrl = "/negotiation/everyone#projects.page";
  }

  return [
    {
      label: t("neo.js.buyer.coupa.nav.sourcing"),
      id: "default-home",
      translated_label: t("neo.js.buyer.coupa.nav.sourcing"),
      target_url: targetUrl,
      class: "homeIcon",
    },
    {
      label: t("neo.js.buyer.coupa.nav.sourcing"),
      id: "default-sourcing",
      translated_label: t("neo.js.buyer.coupa.nav.sourcing"),
      target_url: targetUrl,
      active: true,
    },
  ];
}
