"use-client";
import React from "react";
import { Menubar, MenubarMenu, MenubarItem } from "./ui/menubar";
import UserButtonComp from "./UserButtonComp";

function MenuBarComp() {
  return (
    <Menubar>
      <UserButtonComp />
    </Menubar>
  );
}

export default MenuBarComp;
