/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Master" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Master_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Item" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "amount" TEXT,
    "masterId" INTEGER,
    "dailyId" INTEGER,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Daily" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Daily_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_masterId_fkey" FOREIGN KEY ("masterId") REFERENCES "Master"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_dailyId_fkey" FOREIGN KEY ("dailyId") REFERENCES "Daily"("id") ON DELETE SET NULL ON UPDATE CASCADE;
