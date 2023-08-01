import { MessageDescriptor } from "react-intl";

export interface RawData {
  label: string;
  value: string;
  localized: string;
  target_url: string;
  Id: string;
  _Access: any; // ??
}

type MenuItemType = "MegaMenuColumnItem" | "GroupHeaderItem" | "NavbarItem";

export interface ProvidedData {
  id: string;
  type?: MenuItemType;
  translated_label?: MessageDescriptor;
  fixed_label?: string;
  page?: string;
  show: boolean;
  scope?: string[];
  children?: ProvidedData[];
  mega_menu?: boolean;
  group_header?: boolean;
  page_title?: MessageDescriptor;
  everyone?: boolean;
}

export interface MegaMenuColumnItem {
  id: string;
  children: (GroupHeaderItem | NavbarItem)[];
  active?: false;
}

export interface GroupHeaderItem {
  id: string;
  translated_label: string;
  group_header: 1;
  children?: null;
  active?: false;
}

export interface NavbarItem {
  label?: string; // for now this is optional as CCjs mixed up labels and ids.
  id: string;
  translated_label: string;
  target_url?: string;
  keep?: boolean;
  active?: boolean;
  class?: string;
  mega_menu?: boolean;
  callback?(): void;
  children?: (MegaMenuColumnItem | GroupHeaderItem | NavbarItem)[];
}

export interface SessionInfo {
  role: {
    administrator: boolean;
    marketManager: boolean;
    owner: boolean;
    projectManager: boolean;
    support: boolean;
    observer: boolean;
    evaluator: boolean;
    everyone: boolean;
  };
  isManager: boolean;
  hasAccountManagementRights: boolean;
  hasPowerUserRights: boolean;
  hasPortalPowerUserRights: boolean;
  hasRootRights: boolean;
  featureSwitches: {
    enableBidPricingInsights: boolean;
  };
}
