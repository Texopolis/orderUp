import React from "react";
import { Menubar } from "@/components/ui/menubar";
import { Button } from "@/components/ui/button";
import { DatePickerComp } from "@/components/DatePickerComp";
import { format } from "date-fns";
import Link from "next/link";

function page() {
  const today = Date.now();
  
  return (
    <div className="flex h-full flex-col justify-between">
      <div className="mt-6 flex h-1/4 flex-col items-center justify-between">
        <div className="text-2xl text-cyan-400">Cooks</div>
        <Link
          className="inline-flex h-10 items-center justify-center rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 "
          href={`/${new Date(new Date().setHours(0, 0, 0, 0))}`}
        >
          go to today&apos;s order
        </Link>
        <DatePickerComp />
      </div>
      <div className="mb-8 ml-4">Today is: {format(today, "PPP")}</div>
    </div>
  );
}

export default page;
