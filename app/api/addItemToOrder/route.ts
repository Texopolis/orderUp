import { prisma } from "@/lib/prismaClient";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const origin = req.headers.get("origin");
  const { name, amount, date } = await req.json();
  async function addItemToOrder() {
    try {
      const prismaRes = await prisma.listItem.create({
        data: {
          name: name,
          amount: amount,
          Daily: {
            connectOrCreate: {
              where: { id: date },
              create: { id: date },
            },
          },
        },
      });

      await prisma.$disconnect();
      return prismaRes;
    } catch (error) {
      console.error(error);
      await prisma.$disconnect();
      process.exit(1);
    }
  }
  const res = await addItemToOrder();
  const data = JSON.stringify(res);

  return new NextResponse(data, {
    headers: {
      "Access-Control-Allow-Origin": origin || "*",
      "Content-Type": "application/json",
    },
  });
}
