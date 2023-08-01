import * as React from "react";
import NavBarApp from "./NavbarApp";
import { NeoContextProvider } from "../utils/NeoContext";

export default class Navbar {
  static create(sessionInfo: any): React.ReactElement {
    return (
      <NeoContextProvider>
        <NavBarApp sessionInfo={sessionInfo} />
      </NeoContextProvider>
    );
  }
}
