"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useRouter } from "next/navigation";

type Props = { name: string; amount: string };

function ListItemComp({ name, amount }: Props) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  // async function handleSubmit() {
  //   try {
  //     const res = await fetch("/api/createNewMasterItem", {
  //       method: "POST",
  //       body: JSON.stringify(newItem),
  //     });
  //     if (res.status == 200) {
  //       setOpen(false);
  //       router.refresh();
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <div className="border mb-2 flex w-full items-center justify-between rounded-lg border-slate-600 px-4">
          <div className="flex">
            <div>{amount}</div>
            <div>{name}</div>
          </div>
          <div className="flex">
            <Button variant="secondary">Edit</Button>
            <Button variant="destructive">Delete</Button>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Item to Master List</DialogTitle>
          <DialogDescription>
            Make changes to the master order list here.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="newItem" className="text-right">
              New Item:
            </Label>
            {/* <Input
                id="newItem"
                onChange={(e) => setNewItem(e.target.value)}
                value={newItem}
                className="col-span-3"
              /> */}
          </div>
        </div>
        <DialogFooter>
          {/* <Button type="submit" onClick={handleSubmit}>
              Save changes
            </Button> */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
export default ListItemComp;
