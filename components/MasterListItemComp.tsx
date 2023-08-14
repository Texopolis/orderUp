import React from "react";
import { Button } from "./ui/button";

type Props = { name: string; add?: boolean };

function MasterListItemComp({ name, add }: Props) {
  return <Button className={add ? `bg-green-400` : ""}>{name}</Button>;
}

export default MasterListItemComp;
