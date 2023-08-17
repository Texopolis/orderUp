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

type Props = { name: string; amount: string; id: string };

function ListItemComp({ name, amount, id }: Props) {
  const [open, setOpen] = useState(false);
  const [newAmount, setNewAmount] = useState("");
  const router = useRouter();

  async function handleUpdate() {
    try {
      const res = await fetch("/api/updateListItem", {
        method: "PUT",
        body: JSON.stringify({ newAmount: newAmount, id: id }),
      });
      if (res.status == 200) {
        setOpen(false);
        setNewAmount("");
        router.refresh();
      }
    } catch (error) {}
  }

  async function handleDelete() {
    try {
      const res = await fetch("/api/deleteListItem", {
        method: "DELETE",
        body: JSON.stringify(id),
      });
      if (res.status == 200) {
        setOpen(false);
        router.refresh();
      }
    } catch (error) {}
  }
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
        {/* <div className="border mb-2 flex items-center justify-between rounded-lg border-slate-600 p-2"> */}
        <div className="my-1 flex max-w-fit items-center gap-2 rounded-lg border border-slate-500 p-3 text-center text-lg">
          <div>{amount}</div>
          <div>{name}</div>
          {/* </div> */}
          {/* <div className="flex">
            <Button variant="secondary">Edit</Button>
            <Button variant="destructive">Delete</Button>
          </div> */}
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit {`${amount} ${name}`} </DialogTitle>
          <DialogDescription>
            Make changes to the current item.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {/* <div className="flex gap-1">
            <div>Current Amount:</div>
            <div>{amount}</div>
            <div>{name}</div>
          </div> */}
          <div className="grid grid-cols-6 place-items-center items-center justify-center ">
            <Label htmlFor="newAmount" className="col-span-2 text-left">
              Update Amount:
            </Label>
            <Input
              id="newAmount"
              onChange={(e) => setNewAmount(e.target.value)}
              value={newAmount}
              placeholder={amount}
              className="col-span-4"
            />
          </div>
        </div>
        <DialogFooter className="flex w-full flex-row justify-between p-4">
          <Button onClick={() => setOpen(false)} variant="ghost">
            Cancel
          </Button>
          <Button disabled={newAmount == ""} onClick={handleUpdate}>
            Confirm
          </Button>
          <Button variant="destructive" onClick={handleDelete}>
            Delete {name}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
export default ListItemComp;
