import { prisma } from "@/lib/prismaClient";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const origin = req.headers.get("origin");
  const newItem = await req.json();

  async function createNewMasterItem() {
    try {
      const prismaRes = await prisma.master.update({
        where: { id: 0 },
        data: {
          items: { push: newItem },
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
  const res = await createNewMasterItem();
  const data = JSON.stringify(res);

  return new NextResponse(data, {
    headers: {
      "Access-Control-Allow-Origin": origin || "*",
      "Content-Type": "application/json",
    },
  });
}
