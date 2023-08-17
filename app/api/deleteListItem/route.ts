import { prisma } from "@/lib/prismaClient";
import { NextResponse, NextRequest } from "next/server";

export async function DELETE(req: NextRequest) {
  const origin = req.headers.get("origin");
  const id = await req.json();

  async function deleteListItem() {
    try {
      const prismaRes = await prisma.listItem.delete({
        where: { id: id },
      });
      await prisma.$disconnect();
      return prismaRes;
    } catch (error) {
      console.error(error);
      await prisma.$disconnect();
      process.exit(1);
    }
  }
  const res = await deleteListItem();
  const data = JSON.stringify(res);

  return new NextResponse(data, {
    headers: {
      "Access-Control-Allow-Origin": origin || "*",
      "Content-Type": "application/json",
    },
  });
}
