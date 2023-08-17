import { prisma } from "@/lib/prismaClient";
import { NextResponse, NextRequest } from "next/server";

export async function PUT(req: NextRequest) {
  const origin = req.headers.get("origin");
  const { newAmount, id } = await req.json();

  async function updateListItem() {
    try {
      const prismaRes = await prisma.listItem.update({
        where: { id: id },
        data: {
          amount: newAmount,
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
  const res = await updateListItem();
  const data = JSON.stringify(res);

  return new NextResponse(data, {
    headers: {
      "Access-Control-Allow-Origin": origin || "*",
      "Content-Type": "application/json",
    },
  });
}
