import React, { cache } from "react";
import { format } from "date-fns";
import { PrismaClient } from "@prisma/client";
import MasterListItemComp from "@/components/MasterListItemComp";
import MasterListAddItemComp from "@/components/MasterListAddItemComp";

type Props = { params: { date: string } };

async function page({ params }: Props) {
  const prisma = new PrismaClient();
  const getMaster = cache(async function () {
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
  });

  const master = await getMaster();
  console.log(master?.items);

  function formatDateString(date: string) {
    const decodedString = decodeURIComponent(date);
    const dateObject = new Date(decodedString);
    return dateObject;
  }

  const date = format(formatDateString(params.date), "PPP");

  return (
    <div>
      <div>Page: {date}</div>
      <section>
        <div>Currently Used Items</div>
        <div className="grid grid-cols-3 gap-4">
          <MasterListAddItemComp />
          {master?.items.map((item, i) => {
            return <MasterListItemComp key={i} name={item} />;
          })}
        </div>
      </section>
    </div>
  );
}
export default page;
