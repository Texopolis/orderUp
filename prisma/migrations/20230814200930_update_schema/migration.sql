/*
  Warnings:

  - You are about to drop the column `amount` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `dailyId` on the `Item` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_dailyId_fkey";

-- AlterTable
ALTER TABLE "Item" DROP COLUMN "amount",
DROP COLUMN "dailyId";

-- CreateTable
CREATE TABLE "ListItem" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "dailyId" INTEGER,

    CONSTRAINT "ListItem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ListItem" ADD CONSTRAINT "ListItem_dailyId_fkey" FOREIGN KEY ("dailyId") REFERENCES "Daily"("id") ON DELETE SET NULL ON UPDATE CASCADE;
