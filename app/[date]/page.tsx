import React, { cache } from "react";
import { format } from "date-fns";
import { PrismaClient } from "@prisma/client";
import MasterListItemComp from "@/components/MasterListItemComp";
import MasterListAddItemComp from "@/components/MasterListAddItemComp";
import ListItemComp from "@/components/ListItemComp";

type Props = { params: { date: string } };

async function page({ params }: Props) {
  const prisma = new PrismaClient();

  async function getDaily() {
    try {
      return await prisma.listItem.findMany({
        where: { dailyId: params.date },
      });
    } catch (e) {
      console.error(e);
      process.exit(1);
    } finally {
      await prisma.$disconnect();
    }
  }

  async function getMaster() {
    try {
      return await prisma.master.findUnique({
        where: { id: 0 },
      });
    } catch (e) {
      console.error(e);
      process.exit(1);
    } finally {
      await prisma.$disconnect();
    }
  }

  const daily = await getDaily();
  const master = await getMaster();
  console.log(daily);

  function formatDateString(date: string) {
    const decodedString = decodeURIComponent(date);
    const dateObject = new Date(decodedString);
    return dateObject;
  }

  const date = format(formatDateString(params.date), "PPP");

  return (
    <div className="flex h-full flex-col justify-between p-6">
      <div className="text-2xl">Order for: {date}</div>
      <section>
        <div>Current Order:</div>
        <div className="flex flex-col">
          {daily.map((item, i) => {
            return (
              <ListItemComp key={i} name={item.name} amount={item.amount} />
            );
          })}
        </div>
      </section>
      <section className="justify-center text-center align-middle">
        <div className="text-2xl text-blue-400">Currently Used Items</div>
        <div className="grid grid-cols-4 gap-2">
          <MasterListAddItemComp />
          {master?.items.map((item, i) => {
            return (
              <MasterListItemComp key={i} date={params.date} name={item} />
            );
          })}
        </div>
      </section>
    </div>
  );
}
export default page;
