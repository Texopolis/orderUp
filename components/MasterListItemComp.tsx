"use client";
import React from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

type Props = { name: string; add?: boolean };

function MasterListItemComp({ name, add }: Props) {
  function handleClick(e: React.SyntheticEvent<HTMLButtonElement>) {
    if (e.currentTarget.innerHTML == "Add New") {
      console.log(e.currentTarget.innerHTML);
    } else {
      console.log("ELSE");
      return "HI";
    }
  }

  return (
    <Dialog>
      <DialogTrigger>
        <Button onClick={handleClick} className={add ? `bg-green-400` : ""}>
          {name}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos`re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default MasterListItemComp;
