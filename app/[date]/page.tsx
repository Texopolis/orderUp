import React from "react";
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
      return await prisma.daily.findUnique({
        where: { id: params.date },
        select: { items: true },
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
        where: { id: "MASTER" },
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
  console.log(daily?.items);

  function formatDateString(date: string) {
    const decodedString = decodeURIComponent(date);
    const dateObject = new Date(decodedString);
    return dateObject;
  }

  const date = format(formatDateString(params.date), "PPP");

  return (
    <div className="flex h-full flex-col justify-between p-6">
      <div className="text-2xl">Order for: {date}</div>
      {daily?.items.length == 0 ||daily==null ? (
          <div>No order started</div>
        ) : (
          <section>
            <div className="flex flex-col">
              {daily?.items.map((item) => {
                return (
                  <ListItemComp
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    id={item.id}
                  />
                );
              })}
            </div>
          </section>
        )
     
      }
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
