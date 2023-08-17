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
import { set } from "date-fns";

type Props = { name: string; date: string };

function MasterListItemComp({ name, date }: Props) {
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState("");
  const router = useRouter();

  async function handleSubmit() {
    try {
      const res = await fetch("/api/addItemToOrder", {
        method: "POST",
        body: JSON.stringify({ date: date, name: name, amount: amount }),
      });
      if (res.status == 200) {
        setOpen(false);
        setAmount("");
        router.refresh();
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button className="w-20">{name}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add item to order</DialogTitle>
          <DialogDescription>
            Add this item to today&apos;s order
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="amount" className="text-right">
              Amount
            </Label>
            <Input
              id="amount"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
              }}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSubmit} disabled={amount == ""}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default MasterListItemComp;
