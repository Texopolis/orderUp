import React from "react";
import { Menubar } from "@/components/ui/menubar";
import { Button } from "@/components/ui/button";
import { DatePickerComp } from "@/components/DatePickerComp";
import { format } from "date-fns";
import Link from "next/link";

function page() {
  const today = Date.now();

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex flex-col items-center mt-6 h-1/4 justify-between">
        <div className="text-cyan-400 text-2xl">Cooks</div>
        <Link className ='inline-flex items-center justify-center rounded-xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 ' href={`/${new Date()}`}>
          go to today&apos;s order
        </Link>
        <DatePickerComp />
      </div>
      <div>Today is: {format(today, "PPP")}</div>
    </div>
  );
}

export default page;
