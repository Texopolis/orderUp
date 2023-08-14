import React from "react";
import { Menubar } from "@/components/ui/menubar";
import { Button } from "@/components/ui/button";
import { DatePickerComp } from "@/components/DatePickerComp";
import { format } from "date-fns";
import Link from "next/link";

function page() {
  const today = Date.now();

  return (
    <div className="flex flex-col">
      <div>Cooks</div>
      <Link href={`/${new Date()}`}>
        go to today&apos;s order
      </Link>
      <DatePickerComp />
      <div>Today is: {format(today, "PPP")}</div>
    </div>
  );
}

export default page;
